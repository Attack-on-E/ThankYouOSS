"use strict";
exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x1": () => (/* binding */ deleteUserImage),
/* harmony export */   "hn": () => (/* binding */ addUserImage),
/* harmony export */   "Mx": () => (/* binding */ signOutUser),
/* harmony export */   "w2": () => (/* binding */ signInUser),
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports initialState, addUser, fetchUser, updateUserState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7615);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  user: {
    uid: "",
    username: "",
    email: "",
    isSignedIn: false,
    image: {
      id: "",
      path: ""
    }
  }
};
const deleteUserImage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/deleteUserImage", async deleteuserimage => {
  const uid = deleteuserimage.uid;
  const image = deleteuserimage.image;
  _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .storage.ref */ .tO.ref("images").child(image.id).delete();
  const data = await (await _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection("users").doc(uid).get()).data();
  const timestamp = _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .FirebaseTimestamp.now */ .FA.now();
  const userUpdateData = {
    updated_at: timestamp,
    image: {
      id: "",
      path: ""
    }
  };
  _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection("users").doc(uid).set(userUpdateData, {
    merge: true
  }).then(() => {
    console.log("更新完了");
  });
  return {
    uid: uid,
    username: data.username,
    email: data.email,
    image: {
      id: "",
      path: ""
    },
    isSignedIn: true
  };
});
const addUserImage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/addUserImage", async adduserimage => {
  const uid = adduserimage.uid;
  const image = adduserimage.image;
  const data = await (await _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection("users").doc(uid).get()).data();
  const timestamp = _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .FirebaseTimestamp.now */ .FA.now();
  const userUpdateData = {
    updated_at: timestamp,
    image: image
  };
  _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection("users").doc(uid).set(userUpdateData, {
    merge: true
  }).then(() => {
    console.log("更新成功");
  });
  return {
    uid: uid,
    username: data.username,
    email: data.email,
    image: image,
    isSignedIn: true
  };
});
const signOutUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/signOutUser", async () => {
  _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .auth.signOut */ .I8.signOut();
  return _objectSpread({}, initialState.user);
});
const addUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/addUser", async adduser => {
  const {
    username,
    email,
    password,
    confirmPassword
  } = adduser;
  const result = await _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .auth.createUserWithEmailAndPassword */ .I8.createUserWithEmailAndPassword(email, password);
  const user = result.user;

  if (user) {
    const uid = user.uid;
    const timestamp = _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .FirebaseTimestamp.now */ .FA.now();
    const userInitialData = {
      created_at: timestamp,
      email: email,
      uid: uid,
      updated_at: timestamp,
      username: username,
      image: {
        id: "",
        path: ""
      }
    };
    await _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection("users").doc(uid).set(userInitialData);
    await _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection("users").doc(uid).collection("userPublic").doc(uid).set({
      username: username
    });
    console.log("登録成功");
    return userInitialData;
  }
});
const signInUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/signInUser", async () => {
  var _result$user, _result$user2, _result$user3;

  const result = await _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .auth.signInWithPopup */ .I8.signInWithPopup(_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .githubProvider */ .pc);
  const user = result.user;
  const uid = (_result$user = result.user) === null || _result$user === void 0 ? void 0 : _result$user.uid;
  const image = (_result$user2 = result.user) === null || _result$user2 === void 0 ? void 0 : _result$user2.photoURL;
  const email = (_result$user3 = result.user) === null || _result$user3 === void 0 ? void 0 : _result$user3.email;
  console.log(user);
  const loginData = {
    uid: uid,
    username: email,
    email: email,
    isSignedIn: true,
    image: {
      id: uid,
      path: image
    }
  };
  _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection("users").doc(uid).set(loginData, {
    merge: true
  });
  return {
    uid: uid,
    image: {
      id: uid,
      path: image
    },
    username: email,
    isSignedIn: true
  };
});
const fetchUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/fetchUser", async fetchuser => {
  const {
    email,
    password
  } = fetchuser;
  const response = await _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__/* .auth.signInWithEmailAndPassword */ .I8.signInWithEmailAndPassword(email, password);
  const uid = response.user.uid;
  const data = await (await _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection("users").doc(uid).get()).data();
  return {
    uid: uid,
    username: data.username,
    email: data.email,
    isSignedIn: true,
    image: {
      id: data.image.id,
      path: data.image.path
    }
  };
}); // State, Reducer, Action を一気に生成する

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  //スライスの名前を設定
  initialState,
  //stateの初期値を設定
  reducers: {
    updateUserState: (state, action) => ({
      user: _objectSpread({}, action.payload)
      /* もとの配列を展開して新しい配列を作る */

    })
  },
  extraReducers: builder => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.user = action.payload; // payloadCreatorでreturnされた値

      alert("登録完了しました。");
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
    });
    builder.addCase(addUser.rejected, (state, action) => {
      console.log(action.error);
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload; // payloadCreatorでreturnされた値

      alert("ログインしました。");
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(state.user);
      alert("ログインしました．");
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
    });
    builder.addCase(signOutUser.fulfilled, (state, action) => {
      state.user = action.payload;
      alert("サインアウトしました。");
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/");
    });
    builder.addCase(addUserImage.fulfilled, (state, action) => {
      state.user = action.payload;
      alert("画像の登録が完了しました。");
    });
    builder.addCase(deleteUserImage.fulfilled, (state, action) => {
      state.user = action.payload;
      alert("画像の削除が完了しました。");
    });
  }
});
const {
  updateUserState
} = userSlice.actions;
const getUser = state => state.user;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice);

/***/ }),

/***/ 4920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_images_no_profile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7309);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const ImagePreview = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "pt-8",
    children: props.image.path ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "w-56 h-56 mx-auto",
      onClick: () => props.delete(props.image.id),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "rounded-full",
        src: props.image.path,
        alt: "userProfileImage",
        width: 220,
        height: 215
      })
    }, props.image.id) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "w-56 h-56 mx-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
          className: "rounded-full",
          src: _public_images_no_profile_png__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z,
          alt: "NoProfileImage",
          width: 220,
          height: 215
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
          className: "hidden",
          type: "file",
          id: "image",
          onChange: event => props.upload(event)
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePreview);

/***/ }),

/***/ 7615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "tO": () => (/* binding */ storage),
/* harmony export */   "pc": () => (/* binding */ githubProvider),
/* harmony export */   "FA": () => (/* binding */ FirebaseTimestamp)
/* harmony export */ });
/* unused harmony exports fb, FirebaseFieldValue */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5942);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9714);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8828);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);



 // If you need it

const config = {
  apiKey: "AIzaSyBI8bqYHjdBtqUrVjfGgpl8_Lci7jJJ-pw",
  authDomain: "thankyouoss.firebaseapp.com",
  //   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: "thankyouoss",
  storageBucket: "athankyouoss.appspot.com",
  messagingSenderId: "630470971865",
  appId: "1:630470971865:web:32fae993a064155f3849c8"
};

if (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore();
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().storage();
const githubProvider = new (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.GithubAuthProvider)();
const fb = (/* unused pure expression or super */ null && (firebase));
const FirebaseFieldValue = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.FieldValue);
const FirebaseTimestamp = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore.Timestamp);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (firebase)));

/***/ }),

/***/ 7309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/images/no-profile.67b6df1989aa1591a44344f003fa4da0.png","height":215,"width":220,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAh0lEQVR42g3KPQrCQBRF4VtaiI21FoJrtXAV1jpM3psoQgwIVloorsHKH6KgMGORdzOc7vBBUAx16X8+ai1TAaSvV88tK3rqXSbQuTCkaLTdP68SelG69mlfC1ZQ39Cz56F9WGNHy6JBOVuxSTRaTFl4bHpyqrjP1dSbjBCwHriFe7mPCzIWdFvqX5zpuv7xAAAAAElFTkSuQmCC"});

/***/ })

};
;