import { useNavigate } from "react-router-dom";
import Header from "../../shared/Header";
import { Title, HomeWrapper } from "./Home.styled";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
export const Home = () => {
  const navigate = useNavigate();
  const handleNavigateTweets = () => {
    navigate("/tweets");
  };
  return (
    <>
      <HomeWrapper>
        <Header />
        <Title style={{ margin: "80px auto" }}>
          Welcome, user! To view tweets simply navigate to tweets page
        </Title>
        <IconButton>
          <TwitterIcon
            color="primary"
            fontSize="large"
            onClick={handleNavigateTweets}
          />
        </IconButton>
        <Title style={{ margin: "10px 0 60px 0"  }}>
          {" "}
          The page shows cards with users which were generated from backend.
          Presented activity on the page: if you would like to follow the user,
          you can click on FOLLOW button. If you need to recall which of the
          users you are subscribed to and which are not, reload the page once
          again in your browser. All data about your subscribtions is stored and
          will be immediately displayed on the page.
        </Title>
        <Title style={{ margin: "0" }}>
          When following or unfollowing the user, the button color and the text
          inside of it change. To implement the interactivity of the user with
          the app, Redux state manager was used. For better experience, user can
          filter the users by: 'All', 'Followed' and 'Unfollowed'. The
          pagination was used for better website performance.
        </Title>
      </HomeWrapper>
    </>
  );
};
