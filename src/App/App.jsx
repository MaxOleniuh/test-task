import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Tweets } from "../pages/Tweets";

export const App = () => {
    console.log(1)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tweets' element={<Tweets/>}/>
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
};
