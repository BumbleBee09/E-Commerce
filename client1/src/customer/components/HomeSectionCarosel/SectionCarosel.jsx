import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const SectionCarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 2 },
    720: { items: 4 },
    1024: { items: 6 },
    1570: { items: 8 },
  };

  const slidePrev = () => {
    console.log("Prev button clcked");
    setActiveIndex(activeIndex - 1);
  }
  const slideNext = () => {
    console.log("Next button clcked");
    setActiveIndex(activeIndex + 1);
  } 

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0,10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <>
      <div>
      <h2 className="text-2xl font-extrabold text-gray-800 py-5"> {sectionName} </h2>
        <div className="relative p-5">
          <AliceCarousel
            items={items}
            disableButtonsControls
            responsive={responsive}
            disableDotsControls
            onSlideChanged={syncActiveIndex}
            // both activeInex and key must be {activeIndex}
            activeIndex={activeIndex}
            key={activeIndex}
          />
          {activeIndex !== items.length - 5 && (
            <Button
              variant="contained"
              className="z-50"
              onClick={slideNext}
              sx={{
                position: "absolute",
                top: "8rem",
                right: "0rem",
                transform: "translateX(50%) rotate(90deg)",
                bgcolor: "white"
              }}
              aria-label="next"
            >
              <KeyboardArrowRightIcon
                sx={{ transform: "rotate(-90deg)", color: "black" }}
              />
            </Button>
          )}
          {activeIndex !== 0 && (
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slidePrev}
              sx={{
                position: "absolute",
                top: "8rem",
                left: "0rem",
                transform: "translateX(-50%) rotate(90deg)",
                bgcolor: "white"
              }}
              aria-label="previos"
            >
              <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black"  }} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionCarosel;
