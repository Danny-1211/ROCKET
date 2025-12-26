import { useNavigate, useLocation } from "react-router-dom";
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
import bannerBgImg from "../../assets/imgs/bg/banner-bg.png";

function Switch() {
  const navigate = useNavigate();
  const location = useLocation();

  const isRocket = 1;
  const isWorkspace = 2;

  // 根據路徑判斷當前選中的是哪一個
  // 預設是火箭隊 (isRocket)
  // 若路徑包含 /workspace 則是共同空間 (isWorkspace)
  let isSelected = isRocket;
  if (location.pathname.includes("/workspace")) {
    isSelected = isWorkspace;
  }

  const handleRocketClick = () => {
    navigate("/rocket");
  };

  const handleWorkspaceClick = () => {
    navigate("/workspace");
  };

  // 未選中時淡化 60% ，Hover時恢復 100%
  const unselectedStyle =
    "opacity-60 group-hover:opacity-100 transition-opacity duration-300";

  return (
    <>
      {/* Mobile Version  */}
      <section
        className={`w-full  pt-31 pb-15 px-10 md:hidden lg:hidden`}
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="btn-group-mobile flex flex-col items-center justify-center gap-11.5">
          <div
            className={`rocket-btn-mobile relative bg-Neutral-white border-2 border-Neutral-300 r-md px-6 py-6 w-73.5 h-33.5
            ${isSelected === isRocket
                ? "shadow-[8px_8px_#BFC9F0]"
                : "drop-shadow-none"
              }`}
            onClick={handleRocketClick}
          >
            {isSelected !== isRocket && (
              <div className="absolute inset-0 bg-Neutral-white/60 z-20" />
            )}
            <img
              src={rocket_card_highlight_sm}
              alt="highlight"
              className={`absolute w-9 h-10 object-contain -top-5 -left-5 z-10 ${isSelected === isRocket ? "block" : "hidden"
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
                        ${isSelected === isWorkspace
                ? "shadow-[8px_8px_#EEE5FF]"
                : "drop-shadow-none"
              }`}
            onClick={handleWorkspaceClick}
          >
            {isSelected !== isWorkspace && (
              <div className="absolute inset-0 bg-Neutral-white/60 z-20" />
            )}
            <img
              src={coworkin_card_highlight_sm}
              alt="highlight"
              className={`absolute w-9 h-10 object-contain -top-5 -left-5 z-10 ${isSelected === isWorkspace ? "block" : "hidden"
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

      {/* Desktop Version  */}
      <section
        className={`hidden w-full bg-repeat md:flex md:items-center md:justify-center   pt-39 pb-25 lg:flex lg:items-center lg:justify-center overflow-hidden`}
        style={{ backgroundImage: `url(${bannerBgImg})` }}
      >
        <div className="btn-group-desktop flex items-center justify-center w-full gap-10  transition-transform duration-300 origin-center md:scale-[0.65] lg:scale-100 xl:scale-100">
          <div
            className={`group-rocket-desktop group flex flex-col cursor-pointer transform-all duration-300 ${isSelected !== isRocket ? "hover:-translate-y-3" : ""
              }`}
          >
            <div
              className={`rocket-btn-desktop relative bg-Neutral-white border-2 border-Neutral-300 r-md flex flex-col justify-center items-center w-110 h-112
                    ${isSelected === isRocket
                  ? "shadow-[8px_8px_#BFC9F0]"
                  : "drop-shadow-none"
                }
                `}
              onClick={handleRocketClick}
            >
              {isSelected !== isRocket && (
                <div className="absolute inset-0 bg-Neutral-white/60 z-20 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
              )}

              <img
                src={rocket_card_highlight_lg}
                alt="highlight"
                className={`absolute w-9 h-10 object-contain -top-10 -right-5 z-10 ${isSelected === isRocket ? "block" : "hidden"
                  }`}
              />

              <div
                className={`rocket-title-desktop flex flex-col items-center justify-center -mt-33 z-30
                ${!(isSelected === isRocket) ? unselectedStyle : ""}`}
              >
                <p className="h1">火箭隊</p>
                <p className=" h4 text-Neutral-500 ">Bootcamp Rocket</p>
              </div>

              <div
                className={`rocket-icon-desktop pt-6 pb-4 ${!(isSelected === isRocket) ? unselectedStyle : ""
                  }`}
              >
                <img className="object-contain" src={rocket_lg} alt="rocket" />
              </div>

              <div
                className={`rocket-tag-desktop flex flex-col justify-center items-center ${!(isSelected === isRocket) ? unselectedStyle : ""
                  }`}
              >
                <p className="body-2"># 軟體工程師培訓營</p>
                <p className="body-2"># 全程免費的扎實訓練</p>
                <p className="body-2"># 帶你翻轉人生！</p>
              </div>
            </div>

            <div className="w-30 h-35.75 relative flex items-center justify-center shrink-0 -mt-21 ml-40">
              <div
                className={`absolute shrink-0 w-30 h-15 bg-Primary-Blue-200 rounded-b-full bottom-0`}
              >
                {!(isSelected === isRocket) && (
                  <div className="absolute inset-0 bg-white/60 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
                )}
              </div>
              <img
                src={rocket_card_btn_lg}
                alt="rocket"
                className={`w-25 h-27 object-cover z-30 ${!(isSelected === isRocket)
                  ? "opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  : ""
                  }`}
              />
            </div>
          </div>

          <div className="btn-and px-4">
            <p className="h1">X</p>
          </div>

          <div
            className={`group-workspace-desktop group flex flex-col cursor-pointer transform-all duration-300 ${isSelected !== isWorkspace ? "hover:-translate-y-3" : ""
              }`}
          >
            <div
              className={`workspace-btn-desktop relative bg-Neutral-white border-2 border-Neutral-300 r-md flex flex-col justify-center items-center w-110 h-112
                    ${isSelected === isWorkspace
                  ? "shadow-[8px_8px_#EEE5FF]"
                  : "drop-shadow-none"
                }
                `}
              onClick={handleWorkspaceClick}
            >
              {isSelected !== isWorkspace && (
                <div className="absolute inset-0 bg-Neutral-white/60 z-20 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
              )}

              <img
                src={coworkin_card_highlight_lg}
                alt="highlight"
                className={`absolute w-9 h-10 object-contain -top-10 -right-5 z-10 ${isSelected === isWorkspace ? "block" : "hidden"
                  }`}
              />

              <div
                className={`workspace-title-desktop flex flex-col items-center justify-center -mt-33 z-30
                ${!(isSelected === isWorkspace) ? unselectedStyle : ""} `}
              >
                <p className="h1">共同空間</p>
                <p className=" h4 text-Neutral-500 ">Co-working Space</p>
              </div>
              <div
                className={`workspace-icon-desktop pt-6 pb-4 ${!(isSelected === isWorkspace) ? unselectedStyle : ""
                  }`}
              >
                <img
                  className="object-contain"
                  src={coworkin_lg}
                  alt="workspace"
                />
              </div>

              <div
                className={`workspace-tag-desktop flex flex-col justify-center items-center ${!(isSelected === isWorkspace) ? unselectedStyle : ""
                  }`}
              >
                <p className="body-2"># 超 chill 的共同工作場域</p>
                <p className="body-2"># 餅乾、零食、咖啡應有盡有</p>
                <p className="body-2"># 等你來一同交流成長</p>
              </div>
            </div>

            <div className="w-30 h-35.75 relative flex items-center justify-center shrink-0 -mt-21 ml-40">
              <div
                className={`absolute shrink-0 w-30 h-15 bg-Primary-Violet-200 rounded-b-full bottom-0`}
              >
                {!(isSelected === isWorkspace) && (
                  <div className="absolute inset-0 bg-white/60 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
                )}
              </div>
              <img
                src={coworkin_card_btn_lg}
                alt="workspace"
                className={`w-25 h-27 object-cover z-30 ${!(isSelected === isWorkspace)
                  ? "opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  : ""
                  }`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Switch;
