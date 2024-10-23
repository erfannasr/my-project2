import Image from "next/image";
import reactIMG from "../../../public/images/logos_react.png";
import gitIMG from "../../../public/images/logos_git-icon.png";
import next_jsIMG from "../../../public/images/Next.js.png";
import vsCodeIMG from "../../../public/images/vscode-icons_file-type-vscode.png";
import JS_IMG from "../../../public/images/vscode-icons_file-type-js-official.png";
import CSSIMG from "../../../public/images/vscode-icons_file-type-css.png";
import TailwindIMG from "../../../public/images/vscode-icons_file-type-tailwind.png";
import GitHubIMG from "../../../public/images/akar-icons_github-fill.png";
import HtmlIMG from "../../../public/images/vscode-icons_file-type-html.png";

function Technology() {
  return (
    <div className="mt-[100px]">
      <div className="text-center flex flex-col">
        <span className="font-bold text-[30px] mb-3"> فناوری های من </span>
        <span className="font-normal text-[20px] text-[#666666]">
          فناوری هایی که تجربه کار با آنها را دارم
        </span>
      </div>
      <div>
        <div className="mt-[50px] flex justify-between">
          <Image src={HtmlIMG} width={80} height={80} alt="" />
          <Image src={CSSIMG} width={80} height={80} alt=""/>
          <Image src={JS_IMG} width={80} height={80} alt=""/>
          <Image src={reactIMG} width={80} height={80} alt=""/>
          <Image src={next_jsIMG} width={80} height={80} alt=""/>
        </div>
        <div className="flex mt-[30px] mr-[10px] justify-evenly">
          <Image src={TailwindIMG} width={80} height={80} alt=""/>
          <Image src={vsCodeIMG} width={70} height={70} alt=""/>
          <Image src={gitIMG} width={80} height={80} alt=""/>
          <Image src={GitHubIMG} width={80} height={80} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Technology;
