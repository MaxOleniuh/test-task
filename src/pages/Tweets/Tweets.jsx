import Header from "../../shared/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  CardWrapper,
  Line,
  Image,
  TweetsTitle,
  FollowersTitle,
  Button,
  Eclipse,
  AvatarWrapper,
  CardAvatar,
} from "./Tweets.styled";
import img from "../../images/img.svg";
import { follow, unfollow } from "../../redux/slice";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/operations";
import LoadMore from "@mui/material/Button";
import ScrollToTop from "react-scroll-to-top";

export const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const currentPage = useSelector((state) => state.toolkit.currentPage);
  const users = useSelector((state) => state.toolkit.users);

  const handleFollow = (userId) => {
    dispatch(follow(userId));
  };
  const handleUnfollow = (userId) => {
    dispatch(unfollow(userId));
  };
  const handleLoadMore = () => {
    dispatch(fetchUsers(currentPage + 1));
  };

  return (
    <>
      <Header />
      <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />
      {users &&
        users.map(({ avatar, tweets, followers, id, isFollowed }) => (
          <li key={id}>
            <CardWrapper>
              <Image src={img} alt="quiz" width="308" height="168" />
              <Line />
              <AvatarWrapper>
                <Eclipse>
                  <CardAvatar src={avatar} alt="user" height="63" width="63" />
                </Eclipse>
              </AvatarWrapper>
              <TweetsTitle>{tweets} tweets</TweetsTitle>
              <FollowersTitle>
                {followers && followers.toLocaleString()} Followers
              </FollowersTitle>
              <Button
                type="button"
                onClick={
                  !isFollowed
                    ? () => handleFollow(id)
                    : () => handleUnfollow(id)
                }
                isFollowed={isFollowed}
              >
                {isFollowed ? "Following" : "Follow"}
              </Button>
            </CardWrapper>
          </li>
        ))}
      <LoadMore
        variant="contained"
        sx={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
        onClick={handleLoadMore}
      >
        Load more...
      </LoadMore>
    </>
  );
};
