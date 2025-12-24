import { useState } from "react";
import rocket_sm from "../../assets/imgs/icon/banner-logo-rocket-sm.svg";
import rocket_card_btn_sm from "../../assets/imgs/icon/banner-btn-rocket-sm.svg";
import rocket_card_highlight_sm from "../../assets/imgs/icon/ic-highlight-coworking-sm.svg";
import coworkin_sm from "../../assets/imgs/icon/banner-logo-coworking-sm.svg";
import coworkin_card_btn_sm from "../../assets/imgs/icon/banner-btn-coworking-sm.svg";
import coworkin_card_highlight_sm from "../../assets/imgs/icon/ic-highlight-rocket-sm.svg";
import rocket_lg from "../../assets/imgs/icon/banner-logo-rocket-lg.svg";
import rocket_card_btn_lg from "../../assets/imgs/icon/banner-btn-rocket-lg.svg";
import rocket_card_highlight_lg from "../../assets/imgs/icon/ic-highlight-coworking-lg.svg";
import coworkin_lg from "../../assets/imgs/icon/banner-logo-coworking-lg.svg";
import coworkin_card_btn_lg from "../../assets/imgs/icon/banner-btn-coworking-lg.svg";
import coworkin_card_highlight_lg from "../../assets/imgs/icon/ic-highlight-rocket-lg.svg";

function Switch() {
  const banner_bg = `bg-[url('../assets/imgs/bg/banner-bg.png')]`;
  const isRocket = 1;
  const isWorkspace = 2;
  const [isSelected, setIsSelected] = useState(isRocket);
  return (
    <section
      className={` w-full ${banner_bg} bg-repeat py-30 px-10  lg:hidden`}
    >
      <div className="btn-group-mobile flex flex-col items-center justify-center gap-11.5  ">
        <div
          className={`rocket-btn-mobile relative bg-Neutral-white border-2 border-Neutral-300 r-md px-6 py-6 w-73.5 h-33.5 
            ${
              isSelected === isRocket
                ? "shadow-[8px_8px_#BFC9F0]"
                : "drop-shadow-none"
            }`}
          onClick={() => setIsSelected(isRocket)}
        >
          {isSelected  !== isRocket && <div className="absolute inset-0 bg-Neutral-white/60 z-20" />}
          <img
            src={rocket_card_highlight_sm}
            alt="highlight"
            className={`absolute w-9 h-10 object-contain -top-5 -left-5 z-10 ${
              isSelected === isRocket ? "block" : "hidden"
            }`}
          />
          <div className="rocket-title-mobile flex items-center justify-start gap-2">
            <img src={rocket_sm} alt="rocket" />
            <p className="h1 pt-2">火箭隊</p>
          </div>
          <div className="rocket-subtitle-mobile">
            <p className=" text-Neutral-500 h4">Bootcamp Rocket</p>
          </div>
          <div className="w-18 h-20 relative flex items-center justify-center shrink-0 ml-58 -mt-18">
            <div
              className={`absolute shrink-0 w-9.5 h-20 bg-Primary-Blue-200 rounded-r-full right-0`}
            ></div>
            <img
              src={rocket_card_btn_sm}
              alt="rocket"
              className="absolute z-10 w-15 h-15 aspect-square object-contain left-0"
            />
          </div>
        </div>
        <div
          className={`workspace-btn-mobile relative bg-Neutral-white border-2 border-Neutral-300 r-md px-6 py-6 w-73.5 h-33.5 
                        ${
                          isSelected === isWorkspace
                            ? "shadow-[8px_8px_#EEE5FF]"
                            : "drop-shadow-none"
                        }`}
          onClick={() => setIsSelected(isWorkspace)}
        >
          {isSelected  !== isWorkspace && <div className="absolute inset-0 bg-Neutral-white/60 z-20" />}
          <img
            src={coworkin_card_highlight_sm}
            alt="highlight"
            className={`absolute w-9 h-10 object-contain -top-5 -left-5 z-10 ${
              isSelected === isWorkspace ? "block" : "hidden"
            }`}
          />
          <div className="rocket-title-mobile flex items-center justify-start gap-2">
            <img src={coworkin_sm} alt="coworkin" />
            <p className="h1 pt-2">共同空間</p>
          </div>
          <div className="rocket-subtitle-mobile ">
            <p className="text-Neutral-500 h4">Co-working Space</p>
          </div>
          <div className="w-18 h-20 relative flex items-center justify-center shrink-0 ml-58 -mt-18">
            <div
              className={`absolute shrink-0 w-9.5 h-20 bg-Primary-Violet-200 rounded-r-full right-0`}
            ></div>
            <img
              src={coworkin_card_btn_sm}
              alt="rocket"
              className="absolute z-10 w-15 h-15 aspect-square object-contain left-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Switch;
