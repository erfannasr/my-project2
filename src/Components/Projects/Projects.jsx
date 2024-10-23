import React from "react";
import Card from "../Template/Card";

function Projects() {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-col text-center">
        <span className="font-bold text-[30px] mb-3">پروژه ها</span>
        <span className="font-normal text-[20px] text-[#666666]">پروژه هایی که ساختم</span>
      </div>
      <div className="mt-[60px]">
         <Card />
      </div>
    </div>
  );
}

export default Projects;
