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
        // Delete class
        sliderEls[i].classList.remove(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
        sliderEls[i].classList.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        sliderEls[i].classList.remove("animate-slide-left2", "order-2", "z-10");

        // Hide or show
        list.some((item) => item === i)
          ? (sliderEls[i].style.cssText = "display: block")
          : (sliderEls[i].style.cssText = "display: none");
      }

      // Add animation by adding className
      list.forEach((item) => {
        if (item === max) {
          sliderEls[item].classList.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === min) {
          sliderEls[item].classList.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          sliderEls[item].classList.add(
            "animate-slide-left2",
            "order-2",
            "z-10"
          );
        }
      });
      sliderEls[max].classList.add("animate-slide-right");

      min = min === sliderElsLength ? 0 : min + 1;
      max = max === sliderElsLength ? 0 : max + 1;
    }, 3000);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex gap-8 w-full overflow-hidden px-[59px] pt-8">
      {banner?.map((item, index) => (
        <img
          key={item?.encodeId}
          src={item?.banner}
          className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${
            index <= 2 ? "block" : "hidden"
          }`}
        />
      ))}
    </div>
  );
};

export default Slider;
