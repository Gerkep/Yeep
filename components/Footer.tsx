import type { NextPage } from 'next'
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import logo from "../public/img/logo.png";
import Image from 'next/image';

const Footer: NextPage = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-logo-container">
          <div className="footer-logo">
            <Image alt="stayImage" layout='fill' objectFit='contain'  src={logo}></Image>
          </div>
        </div>
        <div className="footer-section" id="customer-service-section">
          <h4 className="footer-section-header">Customer Service</h4>
          <div className="footer-links">
            <a
              href="https://www.victorgallery.pl/static/docs/privacy.39fe4d89656b.pdf"
              className="footer-link"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.victorgallery.pl/static/docs/terms.0f6bf7412160.pdf"
              className="footer-link"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
        <div className="footer-section" id="connect-section">
          <h4 className="footer-section-header">Connect With Us</h4>
          <div className="footer-links">
            <a href="#contact" className="footer-link">
              Contact Form
            </a>
            <a href="https://www.twitter.com/yeppstudios" className="footer-link">
              Twitter
            </a>
            <a href="https://www.instagram.com/yeppstudios/" className="footer-link">
              Instagram
            </a>
          </div>
        </div>
        <div className="contact">
          <div className="contact-container">
            <HiPhone className="contact-illustration"/>
            <p className="telephone">+48 608 830 369</p>
          </div>
          <div className="contact-container">
          <HiMail className="contact-illustration"/>
            <p className="email">victorgallery.oneart@gmail.com</p>
          </div>
          <div className="contact-container">
          <HiLocationMarker className="contact-illustration"/>
            <p className="address">Regatowa 31, 60-480 Poznań</p>
          </div>
        </div>
        <div className="contribution">
          <p>Copyright © 2021 Victor Gallery. All rights reserved.</p>
          <br /> <br className="mobile" />
          <p className="designer">Designed & Developed by Piotr Gerke.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer