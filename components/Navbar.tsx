import styled from 'styled-components';

const Navbar = () => {
    return(
        <Nav>
            <Logo></Logo>
            <ContactButton> Contact us</ContactButton>
            <div style={{position: "absolute", top: "0", right: "0", padding: "2vw"}}>
                
            </div>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    padding: 1vw 2vw 1vw 2vw;
`

const Logo = styled.div`
    width: 100%;
    height: 14vw;
    margin-top: 7vw;
    background-image: url("http://drive.google.com/uc?export=view&id=1vm-MC0iksCtLo9_72mDPKbIFtKz0OfOL");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    @media only screen and (min-width: 768px) {
        width: 14vw;
        height: 6vw;
        margin-top: 0;
    }
`

const ContactButton = styled.button`
        display: none;
        color: white;
        &:hover  {
            transform: scale(1.05);
        }
        @media only screen and (min-width: 768px) {
          display: block;
          position: absolute;
          right: 2vw;
          top: 2.5vw;
          width: 12vw;
          height: 3vw;
          border-radius: 10px;
            border: none;       
            background: linear-gradient(20deg, #5755F9, #69C0FF);
            background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
            font-weight: 800;
            cursor: pointer;
        }
`