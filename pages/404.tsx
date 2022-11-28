import Link from "next/link";
import styled from "styled-components";
import ColorfulText from "../components/ColorfulText";

const Error = () => {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center"}}>
         <ErrorCode><ColorfulText>404</ColorfulText></ErrorCode>
         <ErrorText>Ooops! Page not found...</ErrorText>
         <Link href={"/"}><HomeButton>Back to homepage</HomeButton></Link>
        </div>
    )
}

export default Error;

const ErrorCode = styled.div`
    font-size: 30vw;
    font-weight: 900;
    text-align: center;
    width: 100vw;
    margin-top: 40vw;
    @media only screen and (min-width: 768px) {
        margin-top: 4vw;
        font-size: 16vw;
    }
`

const ErrorText = styled.h1`
    font-size: 6vw;
    font-weight: 900;
    text-align: center;
    width: 100vw;
    @media only screen and (min-width: 768px) {
        font-size: 3vw;
    }
`

const HomeButton = styled.button`
    margin: 0 auto;
    font-size: 1.5vw;
    font-weight: 900;
    text-align: center;
    margin-top: 5vw;
    border-radius: 10px; 
    background: linear-gradient(20deg, #5755F9, #69C0FF);
    background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
    font-weight: 700;
    color: white;
    cursor: pointer;
    width: 70vw;
    height: 15vw;
    font-size: 4vw;
    transition: all 0.3s ease;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: 18vw;
    color: white;
    &:hover  {
        transform: scale(1.05);
        box-shadow: 1px 1px 45px #7297FC;
    }
    @media only screen and (min-width: 768px) {
      background: black;
      font-weight: 600;
      width: 20vw;
      height: 4vw;
      font-size: 1.2vw;
      margin-top: 4vw;
    }
`