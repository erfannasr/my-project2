import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
function contact() {
  return (
    <div>
      <h1 className="text-[20px] font-bold"> راه های ارتباطی :</h1>
      <span className="flex mt-3">
        <MdEmail className="ml-3 " />{" "}
        <span className="font-medium ">erfannasrolahi8@gmail.com</span>
      </span>
      <Link href={"https://t.me/Erfan_nasrr"} className="flex">
        {" "}
        <FaTelegram className="ml-3 " />{" "}
        <span className="font-medium ">تلگرام</span>{" "}
      </Link>
      <Link href={"erfan._.nasr"} className="flex mt-1">
        {" "}
        <FaInstagram className="ml-3 " />{" "}
        <span className="font-medium "> اینستاگرام </span>{" "}
      </Link>
      <Link
        href={"https://www.linkedin.com/in/erfan-nasrollahi-b5557627a/"}
      ></Link>
      <Link href={"https://www.linkedin.com/in/erfan-nasrollahi-b5557627a/"} className="flex mt-1"><FaLinkedin className="ml-3 " /> <span className="font-medium ">لینکدین</span> </Link>
    </div>
  );
}

export default contact;
