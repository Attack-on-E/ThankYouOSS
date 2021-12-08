import React from "react";
import Link from "next/link";
import { db } from "../../firebase/firebase"
import { error } from "firebase-functions/logger";
import { getUser, getThankedRepos, setUserName } from "../../../redux/slices/userSlice"
import { useDispatch, useSelector } from "react-redux";

type PROPS = {
  userName: string;
  reposName: string;
};


const LikeButton: React.FC<PROPS> = (props) => {
  const user = useSelector(getUser).user;
  const dispatch = useDispatch();
  const LikeOnClick = () => {
    const LoginUser = {
      uid: user.uid
    }
    const Username = {
      userName: props.userName
    }

    const data = dispatch(getThankedRepos(LoginUser));


    const docRef = db.collection("repos").doc(props.userName);
    docRef.get().then((doc) => {
      if (doc.exists) {
        const thankCount = doc.get(props.reposName).thankCount;

        db.collection("repos").doc(props.userName).update({
          [props.reposName]: { "thankCount": thankCount + 1 }
        }).then(() => {
          console.log("更新に成功しました");
          alert("感謝登録しました")
        })
          .catch((error) => {
            console.log(`更新に失敗しました (${error})`);
          });
      }
      else {
        console.log("404");
      }
    })
      .catch((error) => {
        console.log(`データを取得できませんでした (${error})`);
      });
  };

  return (
    <div className="w-fll h-full flex justyfy-center items-center">
      <button onClick={LikeOnClick} className="text-center text-xl text-white w-32 py-2 shadow-2xl border-4 border-pink-500 bg-pink-400 bg-opacity-62  font-semibold rounded-full hover:bg-pink-300">
        ありがとう
      </button>
    </div>
    
  );
};


export default LikeButton;
