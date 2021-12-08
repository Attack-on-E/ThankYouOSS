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
      <div className="w-full flex items-center h-16 bg-blue-400">
        <button className="flex items-center w-1/12 pl-16">
          <AppLogo />
        </button>

        <div className="ml-1 text-2xs text-white text-center">ThankYouOSS</div>

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
