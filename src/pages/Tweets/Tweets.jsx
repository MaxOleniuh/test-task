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
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Filter } from "../../components/Filter/Filter";
import Loader from "../../components/Loader/Loader"
export const Tweets = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.toolkit.loading);
    const currentPage = useSelector((state) => state.toolkit.currentPage);

  useEffect(() => {
    if(currentPage === 1)
    dispatch(fetchUsers());
  }, [dispatch, currentPage]);

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
     {loading && <Loader/>}
      <Header />
      <Filter/>
      <ScrollToTop smooth component={<KeyboardArrowUpIcon />} style={{ borderRadius: '50%', backgroundColor: '#315cc1', color: 'white'}} />
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
