import React from "react";
import Link from "next/link";
import {db} from "../../firebase/firebase"
import { error } from "firebase-functions/logger";

type PROPS = {
    userName: string;
    reposName: string;
};


const LikeButton: React.FC<PROPS> = (props) => {
    const LikeOnClick = () => {
      var docRef = db.collection("repos").doc(props.userName);
      docRef.get().then((doc)=>{
        if (doc.exists) {
          var thankCount = doc.get(props.reposName).thankCount;
          thankCount += 1
          db.collection("repos").doc(props.userName).update({
            [props.reposName]: {"thankCount": thankCount,}
          }).then(()=>{
            console.log("更新に成功しました");
          })
          .catch((error)=>{
            console.log(`更新に失敗しました (${error})`);
          });
        }
        else {
          console.log("404");
        }
      })
      .catch( (error) => {
          console.log(`データを取得できませんでした (${error})`);
      });
    };

  return (
    <button onClick={LikeOnClick} className="text-center text-xl text-white w-32 py-2 shadow-2xl border-4 border-pink-500 bg-pink-400 bg-opacity-62  font-semibold rounded-full hover:bg-pink-300">
      ありがとう
    </button>
  );
};


export default LikeButton;
