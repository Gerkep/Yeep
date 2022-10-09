import { CheckIcon } from '@heroicons/react/24/outline'
import ColorfulText from './ColorfulText'
import Image from 'next/image'
import pear from "../public/img/pear.png";
import styled from 'styled-components';

const hobbyFeatures = ['Your own idea', 'Simple website', 'Free consultations']
const growthFeatures = ['Market research', 'Project based on research', 'Custom, responsive website', 'Free consultations', 'Social media presence']
const scaleFeatures = [
  'Everything from Growth plan',
  'Long term support',
  'Courses for staff',
]

export default function PricingSection() {
  return (
    <PricingBackground>
        <div className="text-center">
          <PreTitle>
          <Logo>
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={pear}></Image>
          </Logo>
          <h2>Pricing</h2>
          </PreTitle>
          <Title>
            The right <ColorfulText>price for you</ColorfulText>, whoever you are
          </Title>
          <Description>
            We are flexible and open for negotiations. Pitch to us your idea and get individual plan.
          </Description>
        </div>
        <div className='flex justify-center'>
          <ContactButton href='#contact'>Contact us!</ContactButton> 
        </div>
    </PricingBackground>
  )
}

const PricingBackground = styled.div`
  margin-top: 40vw;
  width: 100%;
  padding: 12vw 4vw 16vw 4vw;
  background-color: black;
  @media only screen and (min-width: 768px) {
    padding: 6vw 4vw 8vw 4vw;
    margin-top: 14vw;
  }
`

const PreTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10vw;
  color: #D9D7E6;
  font-weight: 800;
  font-size: 5vw;
  @media only screen and (min-width: 768px) {
    margin-bottom: 4vw;
    font-size: 2vw;
  }
`

const Title = styled.h2`
  color: white;
  font-size: 8vw;
  font-weight: 800;
  @media only screen and (min-width: 768px) {
    font-size: 3vw;
  }

`
const Logo = styled.div`
  position: relative;
  width: 8vw;
  height: 8vw;
  margin-right: 2vw;
  @media only screen and (min-width: 768px) {
    width: 4vw;
    height: 4vw;
    margin-right: 1.2vw;
  }
`

const Description = styled.p`
  font-size: 4vw;
  color: #D9D7E6;
  margin-top: 8vw;
  @media only screen and (min-width: 768px) {
    margin-top: 1vw;
    font-size: 1.4vw;
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
          margin-top: 7vw;
        }
`
