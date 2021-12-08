import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/slices/userSlice";
import AppLogo from "../atoms/AppLogo";
import { Label } from "../atoms/index";
import { AfterLoginButton, BeforeLoginButton } from "../molecules/index";

type PROPS = {};

const Header: React.FC<PROPS> = () => {
  const user = useSelector(getUser).user;

  return (
    <div className="w-screen">
      <div className="w-full h-16 py-2 flex items-center bg-gray-200 text-black">
        <div className="w-2/12">
          <div className="text-xl text-center">OSSへの感謝を伝える</div>
          <div className="text-xs text-center">ThankYouOSS</div>
        </div>
        <div className="w-3/12" />
        <div className="w-2/12 text-xl text-center">開発チーム</div>：
        <div className="w-2/12">
          <div className="text-xl text-center">進撃のE</div>
          <div className="text-xs text-center">Attack on E</div>
        </div>
      </div>
      <div className="w-full flex items-center h-16 bg-blue-400">
        <button className="flex items-center w-1/12 pl-16">
          <AppLogo />
        </button>
        <div className="flex justify-evenly w-3/12 items-center">
          <Label labelText="ホーム" href={"/"} />
        </div>
        <div className="w-5/12" />
        <div className="w-2/12 flex items-center justify-evenly">
          {user.isSignedIn ? <AfterLoginButton /> : <BeforeLoginButton />}
        </div>
        <div className="w-1/12" />
      </div>
    </div>
  );
};

export default Header;
