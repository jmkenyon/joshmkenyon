import { assets } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
        <div className="flex w-max items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="logo" className="w-6" />
          joshmkenyon1@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>
          © 2025 Joshua Kenyon. All rights reserved.
          </p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a href="https://github.com/jmkenyon" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joshmkenyon/"
                target="_blank"
                rel="noopener noreferrer"
              >LinkedIn</a>
              
            </li>
          </ul>
       
      </div>
    </div>
  );
};

export default Footer;
