import styled from 'styled-components';
import logo from "../public/img/logo-black.png";
import Image from 'next/image';

const Navbar = () => {
    return(
        <Nav>
            <Logo>
                <Image alt="stayImage" layout='fill' objectFit='contain'  src={logo}></Image>
            </Logo>
            <ContactButton href='#contact'> Contact us</ContactButton>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    padding: 1vw 2vw 1vw 2vw;
`

const Logo = styled.div`
    width: 100%;
    height: 18vw;
    margin-top: 7vw;
    z-index: 1;
    position: relative;
    @media only screen and (min-width: 768px) {
        width: 14vw;
        height: 6vw;
        margin-top: 0;
    }
`

const ContactButton = styled.a`
        display: none;
        color: white;
        position: relative;
        z-index: 1;
        &:hover  {
            transform: scale(1.05);
        }
        @media only screen and (min-width: 768px) {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 2vw;
          top: 2.5vw;
          width: 12vw;
          height: 3vw;
          border-radius: 10px;
            border: none;       
            background: linear-gradient(20deg, #5755F9, #69C0FF);
            background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover  {
                transform: scale(1.05);
                box-shadow: 1px 1px 45px #7297FC;
              }
        }
`