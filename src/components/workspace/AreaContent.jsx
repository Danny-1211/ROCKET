import restSm from "../../assets/imgs/intro/intro-rest-sm-3x.png";
import restLg from "../../assets/imgs/intro/intro-rest-lg-3x.png";
import disscusSm from "../../assets/imgs/intro/intro-discuss-sm-3x.png";
import disscusLg from "../../assets/imgs/intro/intro-discuss-lg-3x.png";
import resiSm from "../../assets/imgs/intro/intro-worksapce-sm-3x.png";
import resiLg from "../../assets/imgs/intro/intro-workspace-lg-3x.png";


const areas = [
  {
    id:"rest",
    title: "休憩區",
    subtitle: "\\ 很 chill 的休憩區 /",
    desc: [
    { text: "我們貼心提供 " },
    { text: "飲水機、冰箱、微波爐、果汁機、膠囊咖啡機", bold: true },
    { text: " 及不定時茶包及小餅乾零食，我們想讓在工作認真打拼之餘的你也是需要中場休息補充能量，然後再輕鬆泡上一杯咖啡坐在吧台或懶骨頭放空冥想，讓自己 chill 一下轉換心情！" },
    ],
    imgSm: restSm,
    imgLg: restLg,
    tag: "#硬體",
  },
  {
    id:"discussion",
    title: "discussion",
    subtitle: "\\ 舒適沙發討論區 /",
    desc: "如果你有想要與夥伴們討論事情這裡也很適合三、五人一起共同開會討論哦！",
    imgSm: disscusSm,
    imgLg: disscusLg,
    tag: "#硬體",
  },
  {
  id:"resident",
  title: "Resident",
  subtitle: "\\ 進駐者區域 / ",
  desc: "我們的目標是凝聚更多開發者，為他們提供一個充滿活力的交流空間。在這裡，開發者可以互相學習、分享，透過交流讓自己的技能和視野得到更快速的成長。我們相信，一個好的環境能夠激發創意，促進專業能力的提升。",
  imgSm: resiSm,
  imgLg: resiLg,
  tag: "#硬體",
  },
];
function ImageBlock({ title, imgSm, imgLg }) {
  return (
    <div className=" overflow-hidden">
      <picture>

        <source media="(min-width: 768px)" srcSet={imgLg} />
        <img
          src={imgSm}
          alt={title}
          className="w-full aspect-332/222 "
        />
      </picture>
    </div>
  );
}
function TextBlock({ subtitle, desc}) {
  return (
    <div className="max-w-123.5">


      <h3 className="body-1 text-Neutral-700eutral-700 font-bold mb-2 md:mb-5">
        {subtitle}
      </h3>

      <p className="text-Neutral-600  text-sm md:text-base leading-relaxed">
         {Array.isArray(desc)
            ? desc.map((seg, idx) => (
                <span key={idx} className={seg.bold ? "font-bold" : ""}>
                {seg.text}
                </span>
            ))
            : desc}
      </p>
    </div>
  );
}


function AreaContent() {
  return (
    
    <section className="max-w-274 mx-auto px-12 ">
        <h2 className="text-center h2 py-4 md:py-15">場域說明</h2>
        <span className="relative inline-block mb-4">
            <span className="relative z-10 font-bold text-xl md:text-[28px]">#硬體</span>
            <span className="absolute inset-x-0 -inset-y-0.2 bottom-0 h-1/2 bg-accent-orange z-0"></span>
        </span>
        <div className="space-y-10 md:space-y-9">
            {areas.map((area, i) => {
                const isOdd = i % 2 === 1;

                return (
                    <div
                    key={area.id}
                    className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 md:items-center "
                    >

                    <div className={isOdd ? "md:order-2" : "md:order-1"}>
                        <ImageBlock {...area} />
                    </div>


                    <div className={isOdd ? "md:order-1" : "md:order-2"}>
                        <TextBlock {...area} />
                    </div>
                    </div>
                );
            })}
        </div> 

    </section>
  );
}
	export default AreaContent;