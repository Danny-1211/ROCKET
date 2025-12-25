// import rocket_lg from "../../assets/imgs/partners/organizer-rocket-lg.png";
// import rocket_sm from "../../assets/imgs/partners/organizer-rocket-sm.png";
// import hexSchool_lg from "../../assets/imgs/partners/organizer-hexschool-lg.png";
// import hexSchool_sm from "../../assets/imgs/partners/organizer-hexschool-sm.png";
// import goodIdea_lg from "../../assets/imgs/partners/organizer-goodidea-lg.png";
// import goodIdea_sm from "../../assets/imgs/partners/organizer-goodidea-sm.png";
// import kdan_lg from "../../assets/imgs/partners/organizer-kdan-lg.png";
// import kdan_sm from "../../assets/imgs/partners/organizer-kdan-sm.png";
// import titan_lg from "../../assets/imgs/partners/organizer-titan-lg.png";
// import titan_sm from "../../assets/imgs/partners/organizer-titan-sm.png";
// import skw_lg from "../../assets/imgs/partners/organizer-skw-lg.png";
// import skw_sm from "../../assets/imgs/partners/organizer-skw-sm.png";
// import wistron_lg from "../../assets/imgs/partners/organizer-wistron-lg.png";
// import wistron_sm from "../../assets/imgs/partners/organizer-wistron-sm.png";
import { compony } from "../../data/rocket/HostData";
import useDragScroll from '../hooks/useDragScroll'

// const compony = [
//   {
//     name: "火箭隊",
//     unit: "主辦單位",
//     imgUrl_lg: rocket_lg,
//     imgUrl_sm: rocket_sm,
//   },
//   {
//     name: "六角學院",
//     unit: "協辦單位",
//     imgUrl_lg: hexSchool_lg,
//     imgUrl_sm: hexSchool_sm,
//   },
//   {
//     name: "好想工作室",
//     unit: "協辦單位",
//     imgUrl_lg: goodIdea_lg,
//     imgUrl_sm: goodIdea_sm,
//   },
//   {
//     name: "凱鈿科技",
//     unit: "合作招募廠商",
//     imgUrl_lg: kdan_lg,
//     imgUrl_sm: kdan_sm,
//   },
//   {
//     name: "鈦坦科技",
//     unit: "合作招募廠商",
//     imgUrl_lg: titan_lg,
//     imgUrl_sm: titan_sm,
//   },
//   {
//     name: "坂和企業",
//     unit: "合作招募廠商",
//     imgUrl_lg: skw_lg,
//     imgUrl_sm: skw_sm,
//   },
//   {
//     name: "緯創資通",
//     unit: "合作招募廠商",
//     imgUrl_lg: wistron_lg,
//     imgUrl_sm: wistron_sm,
//   },
// ];

function Host() {
  const drag = useDragScroll();

  return (
    <section className="bg-Neutral-200 relative mt-19 md:mt-31 ">
      <div className="w-full  flex flex-col items-start justify-start flex-nowrap pt-9 pb-4 pl-12 md:pl-3 md:pt-14 md:mx-auto md:max-w-324">
        <p className="h3 absolute top-2 -translate-y-1/2">
          主辦、協辦單位
        </p>
        <div
          ref={drag.ref}
          {...drag.handlers}
          className="
            w-full pr-12
            overflow-x-auto
            cursor-grab active:cursor-grabbing
            select-none
            scrollbar-hide
            md:pr-3
          "
        >
          <ul className="flex gap-5 md:gap-6 w-max">
            {compony.map((item, index) => {
              return (
                <li
                  className=" flex flex-col items-start justify-start gap-4 shrink-0"
                  key={index}
                >
                  <div className="  r-sm bg-Neutral-white flex items-center justify-center w-39 h-30 md:w-49 md:h-37 md:p-4">
                    <img
                      className="hidden md:block w-full h-full object-contain  "
                      src={item.imgUrl_lg}
                      alt={item.name}
                    />
                    <img
                      className="block w-25 h-full object-contain md:hidden "
                      src={item.imgUrl_sm}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start md:gap-1">
                    <p className="font-bold">{item.unit}</p>
                    <p>{item.name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Host;
