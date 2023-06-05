import Header from "../shared/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../redux/operations";
export const Tweets = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers())
    })
    return (
        <Header />
    )
}