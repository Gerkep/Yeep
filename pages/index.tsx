import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import PricingSection from "../components/PricingSection";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import ColorfulText from '../components/ColorfulText';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import AppearingTitle from '../components/animation/AppearingTitle';
import SlideLeft from '../components/animation/SlideLeft';
import { send } from "@emailjs/browser";
import codeIcon from '../public/img/codeIcon.png';
import safetyIcon from '../public/img/safetyIcon.png';
import contractIcon from '../public/img/contractIcon.png';
import findIcon from '../public/img/findIcon.png';
import victorLogo from '../public/img/victor.png';
import konkretLogo from '../public/img/konkretlogo.png';
import dataIcon from '../public/img/dataIcon.png';
import phoneIcon from '../public/img/phoneIcon.png';
import desktopIcon from '../public/img/desktopIcon.png';
import discountImage from '../public/img/yeppmacbook.png';
const Countdown = dynamic(() => import('../components/Countdown'), {ssr: false})
import Image from 'next/image';
import { showNotification } from '@mantine/notifications';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import background from "../public/img/background.png";
import mobileBackground from "../public/img/background-mobile.png";
import maingradient from "../public/img/background-gradient.png";
import maingradientmobile from "../public/img/background-gradient-mobile.png";
import { useRef } from 'react';

const Home: NextPage = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState(true);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if(window.innerWidth >= 768){
      setMobile(false);
    }
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      email: `${email}`,
      message: `${message}`,
      name: `${name}`,
    };

    send("service_frl23bb","template_0sqonfg", templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_KEY)
    .then(function(response) {
        showNotification({
          id: 'email sent',
          disallowClose: true,
          autoClose: 4000,
          title: "Email sent successfully!",
          message: 'We will reply as soon as possible. Thank you.',
          color: 'green',
      })
        setLoading(false);
    }, function(error) {
        console.log('FAILED...', error);
        setLoading(false);
    });  
  }

  const handleScroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <div className='w-full h-full relative'>
      <Navbar />
      {!mobile ? 
        <>
        <Image alt="background" layout='fill' objectFit='cover'  src={background}></Image> 
        <WorldBackground>
          <Image alt="background" layout='fill' objectFit='cover'  src={maingradient}></Image> 
        </WorldBackground>
        </>
      :
        <>
        <Image alt="background" layout='fill' objectFit='cover'  src={mobileBackground}></Image>
        <WorldBackground>
          <Image alt="background" layout='fill' objectFit='cover'  src={maingradientmobile}></Image> 
        </WorldBackground>
        </>
      }
      <AppearingTitle>
        <MainTitle>Build new web <ColorfulText>with Yepp.</ColorfulText></MainTitle>
      </AppearingTitle>
      <MainDescription>We make your wildest web3 dreams come true. <br /> Custom smart contracts, web design and legal agenda.</MainDescription>
      <ButtonsContainer>
        <Link href={'#contact'}>
          <ContactButton>Contact us</ContactButton>
        </Link>
          <LearnMoreButton onClick={handleScroll}><ColorfulText>Learn more</ColorfulText></LearnMoreButton>
      </ButtonsContainer>
      <ConsultationContainer>
        <ConsultationComponent href={'https://calendly.com/yeppstudios'}>
          <PhoneIcon>
            <Image alt="phoneIcon" layout='fill' objectFit='contain'  src={phoneIcon}></Image>
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
            <Image alt="logo" layout='fill' objectFit='contain'  src={konkretLogo}></Image>
          </TestimonialLogo>
          <Testimonial>
          Grupa Konkret invests in three segments of the real estate market: investments in land properties, revitalization of historic buildings and development of residential and commercial properties. 
          Moreover, we own many land properties in Poland, with a total area of 800 hectares, including the historic Modlin Fortress with the longest building in Europe. As a Polish Investor we endeavour to create smart and timeless destinations in Poland. 
          We are more than happy to start working with a dynamic and ambitious YEEP Team; therefore, we will be able to combine our experience in the traditional market since 1988 with a modern approach to the NFT market. 
          We believe it is part of real estate market’s future and it will be a bridge between tradition and innovation. 
          </Testimonial>
            <TestimonialRole>Paulina Prusiecka, Grupa Konkret</TestimonialRole>
        </TestimonialContainer>
        <TestimonialContainer>
          <TestimonialLogo>
            <Image alt="logo" layout='fill' objectFit='contain'  src={victorLogo}></Image>
          </TestimonialLogo>
          <Testimonial>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. 
            Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
          </Testimonial>
          <div style={{display: "flex", alignItems: "center"}}>
            <TestimonialRole>Wiktor Gaweł, Victor Gallery</TestimonialRole>
          </div>
        </TestimonialContainer>
      </Testimonials>
      <AppearingTitle>
        <Subtitle ref={ref}>Packed with advanced features</Subtitle>
        <Description>A complete suite of technological and legal features. Setting you up for success</Description>
      </AppearingTitle>
      <Features>
      <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={dataIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Tokenization & Nftcation</FeatureTitle>
          <FeatureDescription>Everything can be tokenized, stored on blockchain and monetized. From house to coffee you drink in the morning.</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
                <Image alt="icon" layout='fill' objectFit='contain'  src={codeIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Custom-made smart contracts</FeatureTitle>
          <FeatureDescription>Our team of professional web3 devs will develop for you smart contracts with latest technologies</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={desktopIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Modern, responsive, custom website</FeatureTitle>
          <FeatureDescription>Built with Next.js and serverside rendering. From Figma to code</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={safetyIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Enterprise-grade security</FeatureTitle>
          <FeatureDescription>Security built into code. Legal agreements to protect your liability</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={contractIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Make it legal</FeatureTitle>
          <FeatureDescription>Not everything about new generation of internet is regulated by law yet. Yepp studio will acknowledge you with latest legal documents regarding web3 world.</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon>
            <Image alt="icon" layout='fill' objectFit='contain'  src={findIcon}></Image>
          </FeatureIcon>
          <FeatureTitle>Market research</FeatureTitle>
          <FeatureDescription>Get to know what your competitors are cooking in web3 space. We will make sure you outpace them in this race</FeatureDescription>
        </Feature>
      </Features>
      <div style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "4vw"}}>
      </div>
      <PricingSection></PricingSection>
      <DiscountContainer>
        <SlideLeft>
          <DiscountText><DiscountColorfulText>Now 50% off</DiscountColorfulText><br /> for businesses new to web3! 
            <br/><CountdownText>Ends in: <Countdown targetDate={"Jan 01 2023 05:30:00"}/></CountdownText>
          </DiscountText>
        </SlideLeft>
        <DiscountImage>
          <Image alt="image" layout='fill' objectFit='contain'  src={discountImage}></Image>
        </DiscountImage>
      </DiscountContainer>
      <AppearingTitle>
        <Subtitle id='contact'>Contact us</Subtitle>
        <Description>No matter if you have an idea or not, we will find a way to take your business to another level.</Description>
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
    </div>
  )
}

export default Home

createGlobalStyle`
  body {
    color: black;
    background-image:  url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80');
    background-position: center;
    background-size: cover;

  } 
`

const WorldBackground = styled.div`
  width: 100%;
  height: 104vh;
  position: absolute;
  @media only screen and (min-width: 768px) {
    height: 110vh;
  }
`
const MainTitle = styled.h1`
  margin: 0 auto;
  line-height: 12vw;
  padding-top: 40vw;
  position: relative;
  z-index: 1;
  text-align: center;
  font-weight: 900;
  width: 90%;
  font-size: 12vw;
  @media only screen and (min-width: 768px) {
    line-height: 6.5vw;
    padding-top: 10vw;
    font-size: 6vw;
    width: 50vw;
  }
`
const MainDescription = styled.p`
  display: none;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    position: relative;
    z-index: 1;
    display: block;
    text-align: center;
    width: 45vw;
    margin-top: 3vw;
    font-size: 1.8vw;
    color: #1F1F1F;
  }
`
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 100;
  @media only screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
  font-weight: 600;
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
          font-weight: 600;
          width: 16vw;
          height: 4vw;
          font-size: 1.2vw;
          margin-top: 0vw;
        }
`

const LearnMoreButton = styled.a`
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
`
const Subtitle = styled.h2`
  width: 16vw;
  margin: 0 auto;
  margin-top: 40vw;
  text-align: center;
  position: relative;
  z-index: 1;
  color: black;
  font-weight: 900;
  width: 90%;
  font-size: 9vw;
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
  font-weight: 600;
  position: relative;
  z-index: 1;
  font-size: 4vw;
  color: #B7BACA;
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
  position: relative;
  z-index: 1;
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
    width: 8vw;
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
// const TestimonialProfileImage = styled.div`
//   width: 12vw;
//   height: 12vw;
//   border-radius: 50%;
//   background-color: gray;
//   margin-top: 6vw;
//   @media only screen and (min-width: 768px) {
//     width: 3vw;
//     height: 3vw;
//     margin-top: 2vw;
//   }
// `
const TestimonialRole = styled.div`
  color: #5F5F5F;
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
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 1;
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
const CountdownText = styled.div`
  font-size: 1.5vw;
  color: #5F5F5F;
  font-weight: 400;
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
    font-weight: 900;
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
    font-weight: 900;
    height: 1vw;
    width: 100%;
    @media only screen and (min-width: 768px) {
      font-size: 2.8vw;
      text-align: left;
      line-height: 4vw;
      margin-left: 3vw;
      margin-top: -5vw;
    }
`

const ContactForm = styled.form`
  width: 90vw;
  padding 7vw 8vw 7vw 8vw;
  background-color: black;
  position: relative;
  z-index: 1;
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
  color: white;
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
  color: white;
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
  font-weight: 500;
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