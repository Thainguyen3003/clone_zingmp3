import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArrSlider } from "../ultis/fn";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);

  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    let sliderElsLength = sliderEls.length - 1;
    let min = 0;
    let max = 2;
    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderElsLength);

      for (let i = 0; i < sliderEls.length; i++) {
        list.some((item) => item === i)
          ? (sliderEls[i].style.cssText = "display: block")
          : (sliderEls[i].style.cssText = "display: none");
      }

      if (min === sliderElsLength) {
        min = 0;
      } else {
        min += 1;
      }
      if (max === sliderElsLength) {
        max = 0;
      } else {
        max += 1;
      }
    }, 1000);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex gap-4 w-full overflow-hidden px-[59px] pt-8">
      {banner?.map((item) => (
        <img
          key={item?.encodeId}
          src={item?.banner}
          className="slider-item flex-1 object-contain w-1/3 rounded-lg"
        />
      ))}
    </div>
  );
};

export default Slider;
