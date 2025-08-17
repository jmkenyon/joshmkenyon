import { assets, blogData } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

const Blogs = () => {
  return (
    <div id="blogs" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">
        Browse through my latest posts and reflections.
      </h4>
      <h2 className="text-center text-5xl">My blogs</h2>
      <div className="grid grid-cols-auto gap-6 my-10">
        {blogData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="
            border border-gray-400 rounded-lg px-8 py-12 
            cursor-pointer 
            transition duration-500
            hover:bg-lightHover
           hover:shadow-black 
            hover:-translate-y-1
          "
          >
           
            {/* <Image src={icon} alt="image from blog" className="w-16 "/> */}
            
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                src={assets.right_arrow}
                alt="arrow icon for read more"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
      <a href="https://joshmkenyon.substack.com/" 
      className="w-max flex items-center justify-center gap-2
       text-gray-700 border-[0.5px] border-gray-700 rounded-full 
       py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500">
        Show more <Image src={assets.right_arrow} alt="right arrow" className="w-4"/>
      </a>
    </div>
  );
};

export default Blogs;
