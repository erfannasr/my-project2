import About from "@/Components/Aboutme/About";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
// import resume from '../../public/resume.pdf'
import Link from "next/link";

function AbouMe() {
  const pdfHandler = () => {
    window.open("../../public/resume.pdf", "_blank");
  };
  return (
    <>
      <About />
      <p className="font-bold mt-7">
        توسعه دهنده فرانت اند (جونیور) توانا در ساخت وبسایت با html , css , js ,
        react.js,Next.js ,tailwindCss ارائه کد های با کیفیت و علاقمند به یادگیری
        و حل چالش
      </p>
      <span className="mt-2 flex ">
        <FaHome className="ml-3" />{" "}
        <span className="font-bold text-[#6666]">اصفهان , ورزنه</span>
      </span>
      <span className="flex mt-2">
        <IoSchool className="ml-3" />
        <span className="font-bold text-[#6666]"> دانشکده امام علی یزد</span>
      </span>
      
    </>
  );
}

export default AbouMe;
