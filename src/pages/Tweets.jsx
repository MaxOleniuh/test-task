import Header from "../shared/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  CardWrapper,
  Line,
  Image,
  TweetsTitle,
  FollowersTitle,
  Button,
  CardAvatar,
    Eclipse,
  AvatarWrapper
} from "../components/Card/Card.styled";
import img from "../images/img.svg";
import eclipse from "../images/eclipse.png";
import { follow, unfollow } from "../redux/slice";
import { useEffect } from "react";
import { fetchUsers } from "../redux/operations";
export const Tweets = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
    const users = useSelector((state) => state.toolkit.users);
    const isFollowed = useSelector((state) => state.toolkit.isFollowed);
  const handleFollow = () => {
    if (!isFollowed) {
      dispatch(follow());
    }
  };
  const handleUnfollow = () => {
    if (isFollowed) {
      dispatch(unfollow());
    }
  };
  return (
    <>
      <Header />
      {users.map(({ avatar, tweets, followers, id }) => (
        <li key={id}>
          <CardWrapper>
            <Image src={img} alt="quiz" width="308" height="168" />
                  <Line />
                  <AvatarWrapper>
                       <Eclipse src={eclipse} alt="eclipse" />
            <CardAvatar src={avatar} alt="avatar" width="63" height="63" />
                  </AvatarWrapper>
            <TweetsTitle>{tweets} tweets</TweetsTitle>
            <FollowersTitle>
              {followers && Number(followers.toLocaleString())} Followers
            </FollowersTitle>
            <Button
              type="button"
              onClick={!isFollowed ? handleFollow : handleUnfollow}
              isFollowed={isFollowed}
            >
              {isFollowed ? "Following" : "Follow"}
            </Button>
          </CardWrapper>
        </li>
      ))}
    </>
  );
};
