import { NextPage } from "next";
import { useRouter } from "next/router";

const UserName: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return <p>{username}</p>;
};
export default UserName;