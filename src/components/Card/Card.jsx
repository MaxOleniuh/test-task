import {
  CardWrapper,
  Line,
  Image,
  Eclipse,
  TweetsTitle,
  FollowersTitle,
  Button,
} from './Card.styled';
import img from '../../images/img.svg';
import avatar from '../../images/avatar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { follow, unfollow } from '../../redux/slice';
import { useState } from 'react';
export const Card = () => {
  const dispatch = useDispatch();
  const followers = useSelector(state => state.toolkit.followers);
  const [isFollowed, setIsFollowed] = useState(false);
  const handleFollow = () => {
    if (!isFollowed) {
      dispatch(follow());
      setIsFollowed(true);
    }
    };
    const handleUnfollow = () => {
    if (isFollowed) {
      dispatch(unfollow());
      setIsFollowed(false);
    }
  };
  return (
    <CardWrapper>
      <Image src={img} alt="quiz" width="308" height="168" />
      <Line />
      <Eclipse>
        <img src={avatar} alt="avatar" />
      </Eclipse>
      <TweetsTitle>777 tweets</TweetsTitle>
      <FollowersTitle>{followers.toLocaleString()} Followers</FollowersTitle>
      <Button type="button" onClick={!isFollowed ? handleFollow : handleUnfollow} isFollowed={isFollowed}>
        {isFollowed ? "Following" : "Follow"}
      </Button>
    </CardWrapper>
  );
};
