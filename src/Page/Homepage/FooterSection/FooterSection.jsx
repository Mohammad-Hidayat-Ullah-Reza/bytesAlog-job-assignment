import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer>
      <div className="footer p-10 bg-base-200 text-base-content">
        <div className="max-w-sm">
          <h3 className="text-4xl font-bold">About Company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            earum odit consequuntur magni at natus. Sunt perspiciatis accusamus,
            omnis at praesentium voluptatum sit possimus et assumenda obcaecati
            officiis nesciunt illum!
          </p>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover text-black">Home</a>
          <a className="link link-hover text-black">Product</a>
          <a className="link link-hover text-black">Pricing</a>
          <a className="link link-hover text-black">Contact</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <p className="">info@company.com</p>
          <p className="">+91 009 000000000</p>
          <div className="flex justify-start items-center">
            <a href="https://www.fb.com">
              <FaFacebookF className="text-xl mr-2 text-black"></FaFacebookF>
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter className="text-xl mr-2 text-black"></FaTwitter>
            </a>
            <a href="https://www.google.com">
              <FaGooglePlusG className="text-2xl mr-2 text-black"></FaGooglePlusG>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-white bg-black font-bold p-5">
        Copyright © 2023 - All right reserved by Company Ltd
      </div>
    </footer>
  );
};

export default FooterSection;
