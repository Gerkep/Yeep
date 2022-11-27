import styled from 'styled-components';
import logo from "../public/img/logo-black.png";
import Image from 'next/image';

const Navbar = (props: {contactScroll: any}) => {
    return(
        <Nav>
            <Logo>
                <Image alt="stayImage" layout='fill' objectFit='contain'  src={logo}></Image>
            </Logo>
            <LinksContainer>
                <Link href='https://www.degendeeds.com'>Gm Counter</Link>
                <Link href='https://www.kenzopenthouse.com'>Kenzo Penthouse</Link>
                <ContactButton onClick={props.contactScroll}> Contact us</ContactButton>
            </LinksContainer>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    padding: 1vw 2vw 1vw 2vw;
    @media only screen and (min-width: 768px) {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
        ". ."; 
    }
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
const Link = styled.a`
    margin-right: 5vw;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover  {
        transform: scale(1.05);
      }
`

const LinksContainer = styled.div`
    display: none;
    @media only screen and (min-width: 768px) {
        position: absolute;
        top: 2vw;
        right: 2vw;
        display: flex;
        align-items: center;
        justify-content: end;
        z-index: 2;
      }
`
const ContactButton = styled.button`
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
          position: relative;

          width: 12vw;
          font-weight: 600;
          height: 3vw;
          border-radius: 10px;
            border: none;       
            background: linear-gradient(20deg, #5755F9, #69C0FF);
            background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover  {
                transform: scale(1.05);
                box-shadow: 1px 1px 45px #7297FC;
              }
        }
`