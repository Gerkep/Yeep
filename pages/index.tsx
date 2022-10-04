import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import ColorfulText from '../components/ColorfulText';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <MainTitle>Revamp your business with <ColorfulText>web3 technology.</ColorfulText></MainTitle>
      <MainDescription>A software house implementing web3 from start to finish. Custom smart contracts, web design and legal agenda.</MainDescription>
      <ButtonsContainer>
        <ContactButton>Contact us</ContactButton>
        <LearnMoreButton><ColorfulText>Learn more</ColorfulText></LearnMoreButton>
      </ButtonsContainer>
    </>
  )
}

export default Home

const MainTitle = styled.h1`
  margin: 0 auto;
  margin-top: 40vw;
  text-align: center;
  width: 90%;
  font-size: 8vw;
  @media only screen and (min-width: 768px) {
    margin-top: 12vw;
    font-size: 4vw;
    width: 50vw;
  }
`
const MainDescription = styled.p`
  display: none;
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    display: block;
    text-align: center;
    width: 45vw;
    margin-top: 3vw;
    font-size: 1.8vw;
    color: #5F5F5F;
  }
`
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8vw;
`

const ContactButton = styled.button`
        border-radius: 10px; 
        background: linear-gradient(20deg, #5755F9, #69C0FF);
        font-weight:800;
        cursor: pointer;
        width: 60vw;
        height: 12vw;
        font-size: 3vw;
        transition: all 0.3s ease;
        border: none;
        margin-top: 24vw;
        &:hover  {
            transform: scale(1.05);
            box-shadow: 1px 1px 45px #7297FC;
        }
        @media only screen and (min-width: 768px) {
          width: 16vw;
          height: 4vw;
          font-size: 1.2vw;
          margin-top: 0vw;
        }
`

const LearnMoreButton = styled.button`
  width: 16vw;
  height: 4vw;
  border-radius: 10px;
  border: none;
  margin-left: 5vw;
  font-size: 1.2vw;
  font-weight: 800;
  display: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: #ECECEC;
  &:hover  {
    transform: scale(1.05);
    box-shadow: 1px 1px 45px #7297FC;
  }
  @media only screen and (min-width: 768px) {
    display: block
  }
`