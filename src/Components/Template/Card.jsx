import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import alibaba from "../../../public/images/alibaba.png";
import mobonew from "../../../public/images/moboNews.png";
import Link from "next/link";
function Card() {
  return (
    <div className="flex w-auto justify-evenly ">
      <div className="shodow-box flex flex-col h-[471px]  w-[25%] rounded-[20px] border">
        <div>
          <Image
            src={alibaba}
            width={180}
            height={180}
            className="w-full rounded-[20px]"
            alt=""
          />
        </div>
        <div className="flex flex-col p-[15px] justify-center ">
          <span className="font-medium mt-4">پروژه علی بابا</span>
          <p className="text-[0.8rem] font-medium mt-2 h-[115px] leading-[20px]">
            وبسایت مشابه علی بابا بر پایه vite و از هوک ها و کتابخانه هایی مثل :
            react-router-dom | swiper | react-icons | react-date-range |
            useState | useEffect | وبسایت دارای صفحاتی مانند :home | iranout |
            helpCenter | profile استایل دهی شده با tailwindCss
          </p>
        </div>
        <div className="link-card flex justify-evenly  ">
          <Link
            href={"https://github.com/erfannasr/Alibaba_project"}
            className="flex text-[#666666] items-center border-b-[2px]"
          >
            {" "}
            گیت هاب <FaGithub className="mr-1" size={15} />{" "}
          </Link>
          <Link
            href={
              "https://alibaba-project-c6smi1i7v-erfans-projects-4fdb0829.vercel.app"
            }
            className="flex text-[#666666] items-center border-b-[2px]"
          >
            {" "}
            دیدن پروژه <FaLink className="mr-1" />{" "}
          </Link>
        </div>
      </div>

      <div className="shodow-box h-[471px] flex flex-col w-[25%] rounded-[20px] border">
        <div>
          <Image
            src={mobonew}
            width={180}
            height={180}
            className="w-full rounded-[20px]"
            alt=""
          />
        </div>
        <div className="flex flex-col p-[15px] justify-center ">
          <span className="font-medium mt-4">پروژه موبونیوز</span>
          <p className="text-[0.8rem] font-medium mt-2 h-[125px] leading-[20px] ">
             وبسایتی مثل موبونیوز در این پروژه از :  React-scroll |
            Swiper | validation | React-Router-Dom | استفاده شده وبسایت دارای
            صفحات : Home , login
          </p>
        </div>
        <div className="link-card flex justify-evenly mb-0 ">
          <Link
            href={""}
            className="flex text-[#666666] items-center border-b-[2px]"
          >
            {" "}
            گیت هاب <FaGithub className="mr-1" size={15} />{" "}
          </Link>
          <Link
            href={
              "curious-douhua-1e0f83.netlify.app"
            }
            className="flex text-[#666666] items-center border-b-[2px]"
          >
            {" "}
            دیدن پروژه <FaLink className="mr-1" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
