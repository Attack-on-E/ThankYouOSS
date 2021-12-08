import { NextPage } from "next";
import { useRouter } from "next/router";
import LikeButton from "../../../components/atoms/LikeButton";

const UserName: NextPage = () => {
  const router = useRouter();
  const userName = router.query['username'];
  const repoName = router.query['repository'];
  return (
    <div>
      <LikeButton userName={String(userName)} reposName={String(repoName)} />
    </div>
  );
};
export default UserName;