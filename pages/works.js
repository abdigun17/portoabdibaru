import { Element } from "react-scroll/modules";
import Image from "next/image";
import One from "../public/images/1.png";
import Two from "../public/images/2.jpg";
import Three from "../public/images/3.jpg";
import Four from "../public/images/4.jpg";
import Five from "../public/images/5.jpg";
import Six from "../public/images/6.jpg";

const works = () => {
  return (
    <div>
      <Element id="work" name="work">
        <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
          <p className="text-sm uppercase text-gray-400">Portfolio</p>
          <h2 className="text-indigo-900 text-6xl font-bold text-center">
            All Creative Work
          </h2>
          <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-20">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={One}
                alt="one"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Two}
                alt="one"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Three}
                alt="one"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
          </div>
          <div className="md:flex sm:flex-col md:flex-row justify-center items-center items-start md:gap-10 sm:pb-10 mt-20">
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Four}
                alt="one"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Five}
                alt="one"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
            <div className="rounded w-80 h-60 shadow-xl relative">
              <Image
                src={Six}
                alt="one"
                layout="fill"
                objectFit="cover"
                className="p-2 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default works;
