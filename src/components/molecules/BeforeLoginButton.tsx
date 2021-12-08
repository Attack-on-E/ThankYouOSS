import { PButton } from "../atoms";
import { signInUser } from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const BeforeLoginButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-around">
      <PButton
        label="Githubでログイン"
        onClick={() => {
          dispatch(signInUser());
        }}
      />
    </div>
  );
};
export default BeforeLoginButton;
