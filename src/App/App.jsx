import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../redux/operations";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Tweets } from "../pages/Tweets";

export const App = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUsers());
  }, [dispatch]);
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
