import rocket_lg from "../../assets/imgs/partners/organizer-rocket-lg.png";
import rocket_sm from "../../assets/imgs/partners/organizer-rocket-sm.png";
import hexSchool_lg from "../../assets/imgs/partners/organizer-hexschool-lg.png";
import hexSchool_sm from "../../assets/imgs/partners/organizer-hexschool-sm.png";
import goodIdea_lg from "../../assets/imgs/partners/organizer-goodidea-lg.png";
import goodIdea_sm from "../../assets/imgs/partners/organizer-goodidea-sm.png";
import kdan_lg from "../../assets/imgs/partners/organizer-kdan-lg.png";
import kdan_sm from "../../assets/imgs/partners/organizer-kdan-sm.png";
import titan_lg from "../../assets/imgs/partners/organizer-titan-lg.png";
import titan_sm from "../../assets/imgs/partners/organizer-titan-sm.png";
import skw_lg from "../../assets/imgs/partners/organizer-skw-lg.png";
import skw_sm from "../../assets/imgs/partners/organizer-skw-sm.png";
import wistron_lg from "../../assets/imgs/partners/organizer-wistron-lg.png";
import wistron_sm from "../../assets/imgs/partners/organizer-wistron-sm.png";

const compony = [
  {
    name: "火箭隊",
    imgUrl_lg: rocket_lg,
    imgUrl_sm: rocket_sm,
  },
  {
    name: "六角學院",
    imgUrl_lg: hexSchool_lg,
    imgUrl_sm: hexSchool_sm,
  },
  {
    name: "好想工作室",
    imgUrl_lg: goodIdea_lg,
    imgUrl_sm: goodIdea_sm,
  },
  {
    name: "凱鈿科技",
    imgUrl_lg: kdan_lg,
    imgUrl_sm: kdan_sm,
  },
  {
    name: "鈦坦科技",
    imgUrl_lg: titan_lg,
    imgUrl_sm: titan_sm,
  },
  {
    name: "坂和企業",
    imgUrl_lg: skw_lg,
    imgUrl_sm: skw_sm,
  },
  {
    name: "緯創資通",
    imgUrl_lg: wistron_lg,
    imgUrl_sm: wistron_sm,
  },
];

function Host() {
  return (
    <div className="w-full  bg-Neutral-200">
      <p>主辦、協辦單位</p>
      <div className=" flex lg:max-w-324">
        {compony.map((item) => {
          return (
            <div className="">
              <div className=" r-sm bg-Neutral-white ">
                <img
                  className="hidden lg:block object-cover w-full max-w-20 h-20"
                  src={item.imgUrl_lg}
                  alt={item.name}
                />
                <img
                  className="lg:hidden"
                  src={item.imgUrl_sm}
                  alt={item.name}
                />
              </div>
              <p className="font-bold">主辦單位</p>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Host;
