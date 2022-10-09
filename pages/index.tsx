import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import PricingSection from "../components/PricingSection";
import styled from 'styled-components';
import ColorfulText from '../components/ColorfulText';
import { useState } from 'react';
import Footer from '../components/Footer';
import { HiPhone } from 'react-icons/hi';
import AppearingTitle from '../components/animation/AppearingTitle';
import SlideLeft from '../components/animation/SlideLeft';
import { send } from "@emailjs/browser";
import codeIcon from '../public/img/codeIcon.png';
import safetyIcon from '../public/img/safetyIcon.png';
import contractIcon from '../public/img/contractIcon.png';
import findIcon from '../public/img/findIcon.png';
import ubraniaLogo from '../public/img/ubrania.png';
import cityParkLogo from '../public/img/citypark.png';
import dataIcon from '../public/img/dataIcon.png';
import phoneIcon from '../public/img/phoneIcon.png';
import desktopIcon from '../public/img/desktopIcon.png';
import discountImage from '../public/img/macbookpanels.png';
import Image from 'next/image';

const Home: NextPage = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // const templateParams = {
    //   email: `${email}`,
    //   maessage: `${message}`,
    //   name: `${name}`,
    // };

    // send('service_8wes2jm', 'template_7dw9y3i', templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_KEY)
    // .then(function(response) {
    //     console.log('SUCCESS!', response.status);
    //     setLoading(false);
    // }, function(error) {
    //     console.log('FAILED...', error);
    //     setLoading(false);
    // });  
  }
  return (
    <>
      <Navbar />
      <AppearingTitle>
        <MainTitle>Revamp your business with <ColorfulText>web3 technology.</ColorfulText></MainTitle>
      </AppearingTitle>
      <MainDescription>A software house implementing web3 from start to finish. Custom smart contracts, web design and legal agenda.</MainDescription>
      <ButtonsContainer>
        <ContactButton href='#contact'>Contact us</ContactButton>
        <LearnMoreButton><ColorfulText>Learn more</ColorfulText></LearnMoreButton>
      </ButtonsContainer>
      <ConsultationContainer>
        <ConsultationComponent href='https://calendly.com/'>
          <PhoneIcon>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={phoneIcon}></Image>
          </PhoneIcon>
          <ConsultationTitle className='consultationText'>Book 1h consultation now!</ConsultationTitle>
          <ConsultationPrice className='consultationPrice'><p style={{textDecoration: "line-through", display: "inline"}}>$30</p> <ColorfulText>Free!</ColorfulText></ConsultationPrice>
        </ConsultationComponent>
      </ConsultationContainer>
      <AppearingTitle>
        <Subtitle>Solutions for all industries</Subtitle>
        <Description>Tested and recommended by leaders of major brands from diverse industries.</Description>
      </AppearingTitle>
      <Testimonials>
        <TestimonialContainer>
          <TestimonialLogo>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={cityParkLogo}></Image>
          </TestimonialLogo>
          <Testimonial>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. 
            Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
          </Testimonial>
          <div style={{display: "flex", alignItems: "center"}}>
            <TestimonialProfileImage></TestimonialProfileImage>
            <TestimonialRole>CEO, City Park</TestimonialRole>
          </div>
        </TestimonialContainer>
        <TestimonialContainer>
          <TestimonialLogo>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={ubraniaLogo}></Image>
          </TestimonialLogo>
          <Testimonial>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. 
            Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
          </Testimonial>
          <div style={{display: "flex", alignItems: "center"}}>
            <TestimonialProfileImage></TestimonialProfileImage>
            <TestimonialRole>CEO, Ubrania.co</TestimonialRole>
          </div>
        </TestimonialContainer>
      </Testimonials>
      <AppearingTitle>
        <Subtitle>Packed with advanced features</Subtitle>
        <Description>A complete suite of technological and legal features. Setting you up for success</Description>
      </AppearingTitle>
      <Features>
        <Feature>
          <FeatureIcon>
                <Image alt="stayImage" layout='fill' objectFit='contain'  src={codeIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Custom-made smart contracts</FeatureTitle>
          <FeatureDescription>Our team of professional web3 devs will develop for you smart contracts with latest technologies</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={desktopIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Modern, responsive, custom website</FeatureTitle>
          <FeatureDescription>Built with Next.js and serverside rendering. From Figma to code</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={safetyIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Enterprise-grade security</FeatureTitle>
          <FeatureDescription>Security built into code. Legal agreements to protect your liability</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={contractIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Make it legal</FeatureTitle>
          <FeatureDescription>Not everything in web3 is regulated yet. We will make sure your business is 100% legal</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={findIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Market research</FeatureTitle>
          <FeatureDescription>Get to know what your competitors are cooking in web3 space. We will make sure you outpace them in this race</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={dataIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Tokenization & Nftcation</FeatureTitle>
          <FeatureDescription>Everything can be tokenized, stored on blockchain and monetized. From house to coffee you drink in the morning.</FeatureDescription>
        </Feature>
      </Features>
      <div style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "4vw"}}>
      </div>
      <PricingSection></PricingSection>
      <DiscountContainer>
        <SlideLeft>
          <DiscountText style={{}}><DiscountColorfulText>Now 50% off</DiscountColorfulText><br /> for businesses new to web3!</DiscountText>
        </SlideLeft>
        <DiscountImage>
          <Image alt="stayImage" layout='fill' objectFit='contain'  src={discountImage}></Image>
        </DiscountImage>
      </DiscountContainer>
      <AppearingTitle>
        <Subtitle id='contact'>Contact us</Subtitle>
        <Description>No matter if you already have an idea or not, we will find a way to take your business to another level.</Description>
      </AppearingTitle>
      <ContactForm onSubmit={(e) => sendEmail(e)}>
        <ContactInput placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} type="text" required></ContactInput>
        <ContactInput placeholder='your@email.com' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required></ContactInput>
        <ContactTextField placeholder='Your message to us...' value={message} onChange={(e) => setMessage(e.target.value)} required></ContactTextField>
        <SubmitButton>
        {!loading ?
          <p>Send</p>
          : 
          <p className='spinner-white'></p>
          }
        </SubmitButton>
      </ContactForm>
      <Footer />
    </>
  )
}

export default Home

const MainTitle = styled.h1`
  margin: 0 auto;
  line-height: 12vw;
  margin-top: 40vw;
  text-align: center;
  font-weight: 700;
  width: 90%;
  font-size: 10vw;
  @media only screen and (min-width: 768px) {
    line-height: 5vw;
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
  @media only screen and (min-width: 768px) {
    margin-top: 6vw;
  }
`
const ConsultationContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 100;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: end;
    position: sticky;
    top: -1.5vw;
    margin-top: 2vw;
  }
`
const ConsultationComponent = styled.a`
  width: 70vw;
  padding: 4vw;
  background-color: #16151B;
  cursor: pointer;
  margin-right: 1vw;
  border-radius: 10px;
  margin-top: 10vw;
  position: relative;
  display: grid; 
  grid-template-columns: 10% 90%; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "phoneIcon consultationText"
    "phoneIcon consultationPrice"; 
    align-items: center;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px; 
    padding: 3px; 
    background:linear-gradient(20deg, #5755F9, #69C0FF); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0vw;
    transition: all 0.3s ease;
    border-radius: 20px;
    grid-template-columns: 15% 85%; 
    width: 20vw;
    padding: 1.5vw;
    position: relative;
    &:hover  {
      transform: scale(1.05);
      box-shadow: 1px 1px 45px #7297FC;
    }
    top: 2vw;
    &:before {
      border-radius: 20px; 
    }
  }
`

const ConsultationPrice = styled.div`
  color: white; 
  grid-area: consultationPrice; 
  font-size: 5vw; 
  text-align: right;
  @media only screen and (min-width: 768px) {
    font-size: 1.5vw; 
  }
`

const PhoneIcon = styled.div`
  width: 8vw;
  height: 8vw;
  grid-area: phoneIcon;
  position: relative;
  @media only screen and (min-width: 768px) {
    width: 2.5vw;
    height: 2.5vw;
  }
`

const ConsultationTitle = styled.h3`
  color: white; 
  font-size: 4vw;
  grid-area: consultationText;
  text-align: right;
  font-weight: 500;
  margin-top: -2vw;
  @media only screen and (min-width: 768px) {
    font-size: 1.1vw; 
    margin-top: -1vw;
  }
`

const ContactButton = styled.a`
        border-radius: 10px; 
        background: linear-gradient(20deg, #5755F9, #69C0FF);
        background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
        font-weight: 700;
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
          font-weight: 500;
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
  font-weight: 500;
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
const Subtitle = styled.h2`
  width: 16vw;
  margin: 0 auto;
  margin-top: 40vw;
  text-align: center;
  color: black;
  font-weight: 800;
  width: 90%;
  font-size: 7vw;
  @media only screen and (min-width: 768px) {
    margin-top: 14vw;
    font-size: 3vw;
    width: 50vw;
  }
`

const Description = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 80vw;
  margin-top: 5vw;
  font-size: 4vw;
  color: #5F5F5F;
  @media only screen and (min-width: 768px) {
    width: 32vw;
    margin-top: 1.5vw;
    font-size: 1.4vw;
  }
`

const Testimonials = styled.div`
  background-color: black;
  margin: 0 auto;
  margin-top: 16vw;
  border-radius: 10px;
  width: 90vw;
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "."
    "."; 
    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr; 
      grid-template-rows: 1fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        ". ."; 
      width: 80vw;
      border-radius: 20px;
      margin-top: 5vw;
    }
`

const TestimonialContainer = styled.div`
  padding: 12vw 8vw 12vw 8vw;
  border-radius: 10px;
  border-top: 1px solid rgb(70, 70, 70);
  @media only screen and (min-width: 768px) {
    border-radius: 20px;
    border-left: 1px solid rgb(70, 70, 70);
    border-top: none;
    padding: 4vw 3vw 3vw 3vw;
  }
`

const TestimonialLogo = styled.div`
  width: 40vw;
  height: 12vw;
  position: relative;
  border-radius: 10px;
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    width: 10vw;
    height: 3vw;
  }
`

const Testimonial = styled.div`
  color: #5F5F5F;
  margin-top: 6vw;
  font-size: 4vw;
  @media only screen and (min-width: 768px) {
    margin-top: 2vw;
    font-size: 1.2vw;
  }
`
const TestimonialProfileImage = styled.div`
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
  background-color: gray;
  margin-top: 6vw;
  @media only screen and (min-width: 768px) {
    width: 3vw;
    height: 3vw;
    margin-top: 2vw;
  }
`
const TestimonialRole = styled.div`
  color: #5F5F5F;
  margin-left: 4vw;
  margin-top: 6vw;
  @media only screen and (min-width: 768px) {
    margin-top: 2vw;
  }
`

const Features = styled.div`
  width: 100%;
  margin-top: 8vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 5vw;
  }
`

const Feature = styled.div`
  padding: 12vw 8vw 10vw 8vw;
  width: 90vw;
  border-radius: 10px;
  background-color: black;
  margin-top: 8vw;
  @media only screen and (min-width: 768px) {
    width: 25vw;
    height: 18vw;
    padding: 3vw 2vw 2vw 2vw;
    margin: 1vw;
    border-radius: 20px;
  }
`

const FeatureIcon = styled.div`
  width: 12vw;
  height: 12vw;
  position: relative;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    width: 3vw;
    height: 3vw;
  }
`

const FeatureTitle = styled.h3`
  color: white;
  font-size: 5vw;
  margin-top: 6vw;
  font-weight: 500;
  @media only screen and (min-width: 768px) {
    font-size: 1.5vw;
    margin-top: 1.5vw;
  }
`

const FeatureDescription = styled.p`
  color: white;
  font-size: 4vw;
  margin-top: 4vw;
  color: #5F5F5F;
  @media only screen and (min-width: 768px) {
    font-size: 1vw;
    margin-top: 0.5vw;
  }
`

const DiscountContainer = styled.div`
  margin-top: 30vw;
  width: 100%;
  display: none;
  gap: 0px 0px; 
  @media only screen and (min-width: 768px) {
    padding: 0 0vw 0 4vw;
    margin-top: 12vw;
    display: grid;
    grid-template-columns: 45% 50%; 
    grid-template-rows: 1fr; 
    grid-template-areas: 
      ". ."; 
    align-items: center;
  }
`

const DiscountImage = styled.div`
  width: 100%;
  height: 60vw;
  position: relative;
  display: none;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: 40vw;
  }

`

const DiscountColorfulText = styled.p`
    font-size: 10vw;
    font-weight: 800;
    display: inline;
    background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media only screen and (min-width: 768px) {
      font-size: 5vw;
    }
`

const DiscountText = styled.div`
    font-size: 5vw;
    text-align: center;
    height: 1vw;
    width: 100%;
    @media only screen and (min-width: 768px) {
      font-size: 2.8vw;
      text-align: left;
      margin-left: 3vw;
      margin-top: -5vw;
    }
`

const ContactForm = styled.form`
  width: 90vw;
  padding 7vw 8vw 7vw 8vw;
  background-color: black;
  margin: 0 auto;
  margin-top: 8vw;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    margin-top: 5vw;
    border-radius: 20px;
    padding: 4vw 3vw 3vw 3vw;
    justify-content: left;
  }
`

const ContactInput = styled.input`
  width: 100%;
  border-radius: 10px;
  margin: 5vw 0vw 5vw 0vw;
  border: none;
  height: 15vw;
  padding: 0 3vw 0 3vw;
  font-size: 4vw;
  background-color: #25222B;
  @media only screen and (min-width: 768px) {
    width: 46%;
    height: 4vw;
    font-size: 1.2vw;
    padding: 0 1vw 0 1vw;
    margin: 0vw 2vw 0vw 0vw;
  }
`

const ContactTextField = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 35vw;
  padding: 3vw 3vw 0 3vw;
  font-size: 4vw;
  background-color: #25222B;
  margin: 5vw 0 5vw 0;
  @media only screen and (min-width: 768px) {
    margin: 2vw 0 1vw 0;
    height: 10vw;
    font-size: 1.2vw;
    padding: 1vw 1vw 0 1vw;
  }
`

const SubmitButton = styled.button`
  width: 80%;
  border-radius: 10px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vw;
  font-size: 4vw;
  background: linear-gradient(20deg, #5755F9, #69C0FF);
  background: -webkit-linear-gradient(20deg, #5755F9, #69C0FF);
  font-weight: 500;
  cursor: pointer;
  margin: 5vw 0 5vw 0;
  @media only screen and (min-width: 768px) {
    height: 4vw;
    font-size: 1.2vw;
    width: 20%;
    margin: 2vw 0vw 0vw 0;
    transition: all 0.3s ease;
    &:hover  {
      transform: scale(1.05);
    }
  }
`