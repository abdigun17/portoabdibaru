import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";

const homePage = () => {
  return (
    <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
      <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
        <Image
          src={heroImage}
          alt="heroImage"
          layout="fill"
          objectFit="cover"
          className="rounded-full cursor-pointer hidden md:block"
        />
      </div>
      <div className="flex flex-col md:ml-20 mx-10 mt-10">
        <h1 className="font-bold text-7xl text-left mb05">
          Hello, I am <span className="text-indigo-900">Justin</span>
        </h1>
        <p className="text-left font-normal mb-5 flex-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit viverra lacus. Morbi congue urna non lectus lobortis, a
          commodo purus lacinia. Donec at tempor nisi. Cras lobortis lacinia
          neque, id dignissim augue efficitur eget. Cras et interdum odio. Cras
          ullamcorper nisi quis neque sodales auctor. Donec eu libero vel quam
          rhoncus interdum. Donec id ex vitae ipsum imperdiet varius nec id
          ligula.
        </p>
        <a
          href="#"
          className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 hover:bg-black"
        >
          See my Portfolio
        </a>
      </div>
    </div>
  );
};

export default homePage;
