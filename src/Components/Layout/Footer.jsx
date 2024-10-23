import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import logo from "../../../public/images/Logo-website.png";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="mt-[100px] pb-4">
      <div className="footer-box  border-b-2">
        <div className="icon flex">
          <span>
            <Link
              href={"https://www.linkedin.com/in/erfan-nasrollahi-b5557627a/"}
            >
              <FaLinkedin size={20} />
            </Link>
          </span>
          <span>
            <Link href={"https://github.com/erfannasr"}>
              <FaGithub size={20} />
            </Link>
          </span>
          <span>
            <Link href={"https://t.me/Erfan_nasrr"}>
              <FaTelegram size={20} />
            </Link>
          </span>
          <span className="mr-[15px] flex">
            09162910917 <FaPhone className="mr-[2px]" />
          </span>
          <span className="flex">
            erfannasrolahi8@gmail.com <MdEmail className="mr-[2px]" />
          </span>
        </div>
        <div>
          <Image src={logo} width={150} height={80} alt=""/>
        </div>
      </div>

      <div className="mt-[20px] flex justify-between items-center">
        <div>
          طراحی و ساخت با{" "}
          <span className="about-text font-bold">عرفان نصرالهی</span>
        </div>
        <div>
          <div className="center-div">
            <Link href={"/"}>
              <span className="cursor-pointer">خانه </span>
            </Link>
            <Link href={"/project"}>
              <span className="cursor-pointer">پروژه ها </span>
            </Link>

            <Link href={"/technology"}>
              <span className="cursor-pointer">تکنولوژی ها</span>
            </Link>
            <Link href={"/about"}>
              <span className="cursor-pointer">درباره ما</span>
            </Link>
            <Link href={"/contact"}>
              <span className="cursor-pointer">تماس با ما</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
