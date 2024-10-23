import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import logo from "../../../public/images/Logo-website.png";
import Link from "next/link";
function Header() {
  return (
    <div className="w-full items-center flex justify-between">
      <div className="icon flex">
        <span>
          <Link
            href={"https://www.linkedin.com/in/erfan-nasrollahi-b5557627a/"}
          >
            <FaLinkedin size={25} />
          </Link>
        </span>
        <span>
          <Link href={"https://github.com/erfannasr"}>
            <FaGithub size={25} />
          </Link>
        </span>
        <span>
          <Link href={"https://t.me/Erfan_nasrr"}>
            <FaTelegram size={25} />
          </Link>
        </span>
      </div>
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
      <div>
        <span>
          <Image src={logo} width={150} height={80} alt="" className="m-auto" />
        </span>
      </div>
    </div>
  );
}

export default Header;
