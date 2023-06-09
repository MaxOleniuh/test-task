import Header from "../../shared/Header";
import { Title } from "./Home.styled";
export const Home = () => {
    return (
        <>
            <Header />
                <Title style={{margin:'100px auto'}}>Welcome, user!</Title>
        </>
    )
}