import React, { useState, useRef } from "react";
import "./Footer.css";
// import Aos from "aos";
// import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import pic from "../images/ALI3N_LOGO2-1 1.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaAngleRight,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
// import db from "./firebase";
// import firebase from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

import app from "./firebase";

// import { getDatabase } from "firebase/database";

function Footer() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const formI = useRef();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("clicked");

    const database = getDatabase(app);
    const postEmailRef = ref(database, "posts");
    const newEmailRef = push(postEmailRef);
    set(newEmailRef, {
      email: input,
    })
      .then(() => {
        //Data saved successfully
        console.log("worked");
        formI.current.reset();
        setMessage("Thank You for Subscribing!!!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      })

      .catch((error) => {
        //the write failed...
        console.log(error);
        formI.current.reset();
      });
  };

  return (
    <div className="footerSection">
      <div className="first-section">
        <div className="footerImg">
          <img src={pic} alt="" />
        </div>
        <div className="footerEmail">
          <p>
            Subscribe Our Newsletter To Get <br /> Our Latest Updated News!
          </p>
          <div className="emailSending">
            <form method="POST" id="thisForm" ref={formI}>
              <input
                type="email"
                placeholder="Your Email"
                onChange={inputHandler}
              />
            </form>
            <div className="fiSend" onClick={submitHandler}>
              <FiSend />
            </div>
          </div>
          {message && <span>{message}</span>}
        </div>
        <div className="followUs">
          <p>Follow us</p>
          <div className="facebook">
            <FaFacebook />
          </div>
          <div className="instagram">
            <FaInstagram />
          </div>
          <div className="twitter">
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="footerHeading">
          <h3>Academic Service</h3>
        </div>
        <div className="topics">
          <p>
            {" "}
            <FaAngleRight /> Web Development
          </p>
          <p>
            {" "}
            <FaAngleRight /> Forex Trading
          </p>
          <p>
            {" "}
            <FaAngleRight /> Digital Marketing
          </p>
          <p>
            {" "}
            <FaAngleRight /> CryptoCurrency
          </p>
          <p>
            {" "}
            <FaAngleRight /> Marketing
          </p>
        </div>
      </div>

      <div className="second-section">
        <div className="footerHeading">
          <h3>Entertainment Service</h3>
        </div>
        <div className="topics">
          <p>
            {" "}
            <FaAngleRight /> Artist Promotion
          </p>
          <p>
            {" "}
            <FaAngleRight /> Music Distribution
          </p>
          <p>
            {" "}
            <FaAngleRight /> Artist Recognision
          </p>
          <p>
            {" "}
            <FaAngleRight /> Event Planning
          </p>
          <p>
            {" "}
            <FaAngleRight /> Event Hosting
          </p>
        </div>
      </div>

      <div className="second-section">
        <div className="footerHeading">
          <h3>Contact us</h3>
        </div>
        <div className="contactTopics">
          {" "}
          <div className="lastPart">
            <div className="icons">
              <HiOutlineMail />
            </div>{" "}
            <p>Email: Ali3n.initiative.ng@gmail.com</p>{" "}
          </div>
          <div className="lastPart">
            <div className="icons">
              <FaPhoneAlt />
            </div>{" "}
            <p>Phone: +2349152033235</p>{" "}
          </div>
          <div className="lastPart">
            <div className="icons">
              <FaLocationArrow />
            </div>{" "}
            <p>Location: Everywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
