import Image from "next/image";
import photo from "../../../public/images/photo.jpg";
function About() {
  return (
    <div className="mt-[80px] flex justify-evenly">
      <div>
        <p className=" break-words text-[30px] font-bold">
          <span className="about-text text-[30px] font-bold">سلام</span> 👋
          <br />
          <span className="about-text text-[30px] font-bold">
            عرفان نصرالهی هستم
          </span>
          <br />
          
          <span className="about-text text-[30px] font-bold">
            {" "}
            فرانت اند دولوپر{" "}
          </span>
            👨‍💻
        </p>
        <p className="word  font-bold "> جویای کار در یزد </p>
      </div>
      <div className="border-transparent ">
        <Image
          src={photo}
          width={200}
          height={200}
          className="rounded-[100%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
