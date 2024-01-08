import React from "react";
import Maincarosel from "../../components/HomeCarosel/Maincarosel";
import SectionCarosel from "../../components/HomeSectionCarosel/SectionCarosel";
import { mens_kurta } from "../../Data/Men/men_kurta";

const HomePage = () => {
  return (
    <>
      <Maincarosel />
      <div
        className="space-y-5 py-20 flex flex-col justify-center px-10 lg:px-10"
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <SectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <SectionCarosel data={mens_kurta} sectionName={"Men's Shoes"} />
        <SectionCarosel data={mens_kurta} sectionName={"Men's Shirt"} />
        <SectionCarosel data={mens_kurta} sectionName={"Women's Saree"} />
        <SectionCarosel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </>
  );
};

export default HomePage;
