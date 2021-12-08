import React from "react";
import Link from "next/link";
import { db } from "../../firebase/firebase";

type PROPS = {
    userName: string;
    reposName: string;
};

const LikeButton: React.FC<PROPS> = (props) => {
    const LikeOnClick = () => {
        
      };

  return (
    <button onClick={LikeOnClick} className="text-center text-xl text-white w-32 py-2 shadow-2xl border-4 border-pink-500 bg-pink-400 bg-opacity-62  font-semibold rounded-full hover:bg-pink-300">
      ありがとう
    </button>
  );
};


export default LikeButton;
