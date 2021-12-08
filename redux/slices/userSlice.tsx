import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  auth,
  FirebaseTimestamp,
  db,
  storage,
  githubProvider,
} from "../../src/firebase/firebase";
import Router from "next/router";
import UserName from "../../src/pages/thanks";

export type userState = {
  user: {
    uid: string;
    username: string;
    email: string;
    isSignedIn: boolean;
    image: {
      id: string;
      path: string;
    };
  };
};

export const initialState: userState = {
  user: {
    uid: "",
    username: "",
    email: "",
    isSignedIn: false,
    image: {
      id: "",
      path: "",
    },
  },
};
export type fetchuser = {
  email: string;
  password: string;
};

export type adduser = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type userimage = {
  uid: string;
  image: {
    id: string;
    path: string;
  };
};

export type LoginUser = {
  uid: string;
}

export type Username = {
  userName: string;
}

export const deleteUserImage = createAsyncThunk(
  "user/deleteUserImage",
  async (deleteuserimage: userimage) => {
    const uid = deleteuserimage.uid;
    const image = deleteuserimage.image;

    storage.ref("images").child(image.id).delete();

    const data: any = await (
      await db.collection("users").doc(uid).get()
    ).data();
    const timestamp = FirebaseTimestamp.now();

    const userUpdateData = {
      updated_at: timestamp,
      image: {
        id: "",
        path: "",
      },
    };

    db.collection("users")
      .doc(uid)
      .set(userUpdateData, { merge: true })
      .then(() => {
        console.log("更新完了");
      });

    return {
      uid: uid,
      username: data.username,
      email: data.email,
      image: {
        id: "",
        path: "",
      },
      isSignedIn: true,
    };
  }
);

export const addUserImage = createAsyncThunk(
  "user/addUserImage",
  async (adduserimage: userimage) => {
    const uid = adduserimage.uid;
    const image = adduserimage.image;

    const data: any = await (
      await db.collection("users").doc(uid).get()
    ).data();
    const timestamp = FirebaseTimestamp.now();

    const userUpdateData = {
      updated_at: timestamp,
      image: image,
    };

    db.collection("users")
      .doc(uid)
      .set(userUpdateData, { merge: true })
      .then(() => {
        console.log("更新成功");
      });

    return {
      uid: uid,
      username: data.username,
      email: data.email,
      image: image,
      isSignedIn: true,
    };
  }
);

export const signOutUser = createAsyncThunk("user/signOutUser", async () => {
  auth.signOut();

  return {
    ...initialState.user,
  };
});

export const addUser = createAsyncThunk(
  "user/addUser",
  async (adduser: adduser) => {
    const { username, email, password, confirmPassword } = adduser;

    const result = await auth.createUserWithEmailAndPassword(email, password);
    const user = result.user;

    if (user) {
      const uid = user.uid;
      const timestamp = FirebaseTimestamp.now();
      const userInitialData = {
        created_at: timestamp,
        email: email,
        uid: uid,
        updated_at: timestamp,
        username: username,
        image: {
          id: "",
          path: "",
        },
      };

      await db.collection("users").doc(uid).set(userInitialData);
      await db
        .collection("users")
        .doc(uid)
        .collection("userPublic")
        .doc(uid)
        .set({ username: username });
      console.log("登録成功");

      return userInitialData;
    }
  }
);

export const signInUser = createAsyncThunk("user/signInUser", async () => {
  const result = await auth.signInWithPopup(githubProvider);
  const user = result.user;
  const uid = result.user?.uid;
  const image = result.user?.photoURL;
  const email = result.user?.email;
  console.log(user);
  const loginData = {
    uid: uid,
    username: email,
    email: email,
    isSignedIn: true,
    image: {
      id: uid,
      path: image,
    },
  };
  db.collection("users").doc(uid).set(loginData, { merge: true });
  return {
    uid: uid,
    image: {
      id: uid,
      path: image,
    },
    username: email,
    isSignedIn: true,
  };
});

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (fetchuser: fetchuser) => {
    const { email, password } = fetchuser;

    const response: any = await auth.signInWithEmailAndPassword(
      email,
      password
    );

    const uid = response.user.uid;
    const data: any = await (
      await db.collection("users").doc(uid).get()
    ).data();

    return {
      uid: uid,
      username: data.username,
      email: data.email,
      isSignedIn: true,
      image: {
        id: data.image.id,
        path: data.image.path,
      },
    };
  }
);




// State, Reducer, Action を一気に生成する
const userSlice = createSlice({
  name: "user", //スライスの名前を設定
  initialState, //stateの初期値を設定
  reducers: {
    updateUserState: (state: userState, action: any) => ({
      user: {
        ...action.payload,
      } /* もとの配列を展開して新しい配列を作る */,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action: any) => {
      state.user = action.payload; // payloadCreatorでreturnされた値
      alert("登録完了しました。");
      Router.push("/");
    });
    builder.addCase(addUser.rejected, (state, action: any) => {
      console.log(action.error);
    });
    builder.addCase(fetchUser.fulfilled, (state, action: any) => {
      state.user = action.payload; // payloadCreatorでreturnされた値
      alert("ログインしました。");
      Router.push("/");
    });
    builder.addCase(signInUser.fulfilled, (state, action: any) => {
      state.user = action.payload;
      console.log(state.user);
      alert("ログインしました．");
      Router.push("/");
    });
    builder.addCase(signOutUser.fulfilled, (state, action: any) => {
      state.user = action.payload;
      alert("サインアウトしました。");
      Router.push("/");
    });
    builder.addCase(addUserImage.fulfilled, (state, action: any) => {
      state.user = action.payload;
      alert("画像の登録が完了しました。");
    });
    builder.addCase(deleteUserImage.fulfilled, (state, action: any) => {
      state.user = action.payload;
      alert("画像の削除が完了しました。");
    });
  },
});

export const setUserName = createAsyncThunk("user/getUserName", async (username: Username) => {
  const userName = username.userName;



})


export const getThankedRepos = createAsyncThunk("user/getThankedRepos", async (loginUser: LoginUser) => {
  const uid = loginUser.uid;
  const data: any = await (
    await db.collection("userThanks").doc(uid).get()
  ).data();

  return data;

})

export const { updateUserState } = userSlice.actions;

export const getUser = (state: RootState) => state.user;

export default userSlice;
