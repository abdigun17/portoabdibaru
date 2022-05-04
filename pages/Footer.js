import { AiTwotoneHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-gray-50 flex justify-center items-center">
      <h1 className="text-xl text-blue-900 mr-2">Made by</h1>
      <AiTwotoneHeart className="text-black" />
      <h1 className="text-xl text-blue-900 ml-2">
        Created by{" "}
        <span className="font-semibold text-indigo-900"> Abdi Production</span>
      </h1>
    </div>
  );
};

export default Footer;
