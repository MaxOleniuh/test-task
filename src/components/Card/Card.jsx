import {
  CardWrapper,
  Line,
  Image,
  TweetsTitle,
  FollowersTitle,
  Button,
  Avatar,
} from './Card.styled';
import img from '../../images/img.svg';
import avatar from '../../images/avatar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { follow, unfollow } from '../../redux/slice';
export const Card = () => {
  const dispatch = useDispatch();
  const followers = useSelector(state => state.toolkit.followers);
  const isFollowed = useSelector(state => state.toolkit.isFollowed)
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
    <CardWrapper>
      <Image src={img} alt="quiz" width="308" height="168" />
      <Line />
       <Avatar src={avatar} alt="avatar" />
      <TweetsTitle>777 tweets</TweetsTitle>
      <FollowersTitle>{followers.toLocaleString()} Followers</FollowersTitle>
      <Button type="button" onClick={!isFollowed ? handleFollow : handleUnfollow} isFollowed={isFollowed}>
        {isFollowed ? "Following" : "Follow"}
      </Button>
    </CardWrapper>
  );
};
