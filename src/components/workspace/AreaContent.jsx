import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";



import restSm from "../../assets/imgs/intro/intro-rest-sm-3x.png";
import restLg from "../../assets/imgs/intro/intro-rest-lg-3x.png";
import disscusSm from "../../assets/imgs/intro/intro-discuss-sm-3x.png";
import disscusLg from "../../assets/imgs/intro/intro-discuss-lg-3x.png";
import resiSm from "../../assets/imgs/intro/intro-worksapce-sm-3x.png";
import resiLg from "../../assets/imgs/intro/intro-workspace-lg-3x.png";
import serviceCoffeeSm from "../../assets/imgs/icon/ic-coffee-sm.svg";
import serviceCoffeeLg from "../../assets/imgs/icon/ic-coffee-lg.svg";
import serviceWifiSm from "../../assets/imgs/icon/ic-wifi-sm.svg";
import serviceWifiLg from "../../assets/imgs/icon/ic-wifi-lg.svg";
import serviceChairSm from "../../assets/imgs/icon/ic-chair-sm.svg";
import serviceChairLg from "../../assets/imgs/icon/ic-chair-lg.svg";
import serviceChatSm from "../../assets/imgs/icon/ic-chat-sm.svg";
import serviceChatLg from "../../assets/imgs/icon/ic-chat-lg.svg";
import serviceTrafficSm from "../../assets/imgs/icon/ic-traffic-sm.svg";
import serviceTrafficLg from "../../assets/imgs/icon/ic-traffic-lg.svg";
import serviceFoodSm from "../../assets/imgs/icon/ic-food-sm.svg";
import serviceFoodLg from "../../assets/imgs/icon/ic-food-lg.svg";
import carousel1Sm from "../../assets/imgs/carousel/carousel1-sm.png"
import carousel1Lg from "../../assets/imgs/carousel/carousel1-lg.png"
import carousel2Sm from "../../assets/imgs/carousel/carousel2-sm.png"
import carousel2Lg from "../../assets/imgs/carousel/carousel2-lg.png"
import carousel3Sm from "../../assets/imgs/carousel/carousel3-sm.png"
import carousel3Lg from "../../assets/imgs/carousel/carousel3-lg.png"
import carousel4Sm from "../../assets/imgs/carousel/carousel4-sm.png"
import carousel4Lg from "../../assets/imgs/carousel/carousel4-lg.png"
import carousel5Sm from "../../assets/imgs/carousel/carousel5-sm.png"
import carousel5Lg from "../../assets/imgs/carousel/carousel5-lg.png"
import carousel6Sm from "../../assets/imgs/carousel/carousel6-sm.png"
import carousel6Lg from "../../assets/imgs/carousel/carousel6-lg.png"
import carousel7Sm from "../../assets/imgs/carousel/carousel7-sm.png"
import carousel7Lg from "../../assets/imgs/carousel/carousel7-lg.png"
import carousel8Sm from "../../assets/imgs/carousel/carousel8-sm.png"
import carousel8Lg from "../../assets/imgs/carousel/carousel8-lg.png"
import checkSm from "../../assets/imgs/icon/ic-check-sm.svg";

import goIcon from "../../assets/imgs/icon/ic-go-coworking.svg";


const areas = [
    {
        id: "rest",
        title: "休憩區",
        subtitle: "\\ 很 chill 的休憩區 /",
        desc: [
            { text: "我們貼心提供" },
            { text: "飲水機、冰箱、微波爐、果汁機、膠囊咖啡機", bold: true },
            { text: "及不定時茶包及小餅乾零食，我們想讓在工作認真打拼之餘的你也是需要中場休息補充能量，然後再輕鬆泡上一杯咖啡坐在吧台或懶骨頭放空冥想，讓自己 chill 一下轉換心情！" },],
        imgSm: restSm,
        imgLg: restLg,
        tag: "#硬體",
    },
    {
        id: "discussion",
        title: "discussion",
        subtitle: "\\ 舒適沙發討論區 /",
        desc: "如果你有想要與夥伴們討論事情這裡也很適合三、五人一起共同開會討論哦！",
        imgSm: disscusSm,
        imgLg: disscusLg,
        tag: "#硬體",
    },
    {
        id: "resident",
        title: "Resident",
        subtitle: "\\ 進駐者區域 / ",
        desc: [{ text: "我們的目標是凝聚更多開發者，為他們提供一個充滿活力的交流空間。在這裡，開發者可以互相學習、分享，透過交流讓自己的技能和視野得到更快速的成長。我們相信，一個好的環境能夠激發創意，促進專業能力的提升。" },
        { text: "我們希望將這樣的場域擴展至高雄，誠摯地邀請您加入我們，一起為開發者打造一個交流與學習的樂園，讓大家在這裡彼此成長，共同推動科技產業的進步。" },
        ],
        imgSm: resiSm,
        imgLg: resiLg,
        tag: "#硬體",
    },
];

const services = [
    {
        id: "coffee",
        iconSm: serviceCoffeeSm,
        iconLg: serviceCoffeeLg,
        title: "咖啡、茶水",
        desc: "飲水機、冰箱、微波爐、果汁機、\n膠囊咖啡機及不定時茶包及小餅乾零食",
    },
    {
        id: "wifi",
        iconSm: serviceWifiSm,
        iconLg: serviceWifiLg,
        title: "超快速網路",
        desc: "使用 Wifi Mesh，\n讓你在場域中都有順暢的網路",
    },
    {
        id: "chair",
        iconSm: serviceChairSm,
        iconLg: serviceChairLg,
        title: "舒服的桌椅",
        desc: "白色辦公桌設計簡潔大方，搭配上人體工學椅，\n讓您的身體在長時間辦公後仍能保持舒適",
    },
    {
        id: "community",
        iconSm: serviceChatSm,
        iconLg: serviceChatLg,
        title: "與火箭隊培訓營交流",
        desc: "進駐者能夠與開發團隊暢通無阻地交流，\n共同分享各自的專業知識和經驗。",
    },
    {
        id: "traffic",
        iconSm: serviceTrafficSm,
        iconLg: serviceTrafficLg,
        title: "便捷的交通",
        desc: "共享空間位於捷運信義國小站附近，\n為您提供極佳的交通便利性。",
    },
    {
        id: "food",
        iconSm: serviceFoodSm,
        iconLg: serviceFoodLg,
        title: "超多美食在附近",
        desc: "無論你要日式、西式、台式，\n各種美食應有盡有",
    },
];

const slides = [
    { id: 1, sm: carousel1Sm, lg: carousel1Lg, alt: "carousel 1" },
    { id: 2, sm: carousel2Sm, lg: carousel2Lg, alt: "carousel 2" },
    { id: 3, sm: carousel3Sm, lg: carousel3Lg, alt: "carousel 3" },
    { id: 4, sm: carousel4Sm, lg: carousel4Lg, alt: "carousel 4" },
    { id: 5, sm: carousel5Sm, lg: carousel5Lg, alt: "carousel 5" },
    { id: 6, sm: carousel6Sm, lg: carousel6Lg, alt: "carousel 6" },
    { id: 7, sm: carousel7Sm, lg: carousel7Lg, alt: "carousel 7" },
    { id: 8, sm: carousel8Sm, lg: carousel8Lg, alt: "carousel 8" },
];

function ImageBlock({ title, imgSm, imgLg }) {
    return (
        <div className=" overflow-hidden">
            <picture>

                <source media="(min-width: 768px)" srcSet={imgLg} />
                <img
                    src={imgSm}
                    alt={title}
                    className="w-full aspect-[332/222]"
                />
            </picture>
        </div>
    );
};
function TextBlock({ subtitle, desc }) {
    const isInline = Array.isArray(desc) && desc.some(seg => seg.bold);

    return (
        <div className="max-w-123.5">
            <h3 className="body-1 font-bold mb-2 md:mb-5">
                {subtitle}
            </h3>
            {isInline && (
                <p className="text-Neutral-600 text-sm md:text-base">
                    {desc.map((seg, idx) => (
                        <span
                            key={idx}
                            className={seg.bold ? "font-bold" : ""}
                        >
                            {seg.text}
                        </span>
                    ))}
                </p>
            )}

            {!isInline && Array.isArray(desc) && (
                <div className="space-y-4 text-Neutral-600 text-sm md:text-base">
                    {desc.map((seg, idx) => (
                        <p key={idx}>{seg.text}</p>
                    ))}
                </div>
            )}

            {!Array.isArray(desc) && (
                <p className="text-Neutral-600 text-sm md:text-base">
                    {desc}
                </p>
            )}
        </div>
    );
}

function ServiceIcon({ title, iconSm, iconLg, className = "" }) {
    return (
        <picture className={`block ${className}`.trim()}>
            <source media="(min-width: 768px)" srcSet={iconLg} />
            <img src={iconSm} alt={title} className="block w-full h-full" />
        </picture>
    );
}
//
function ServiceCard({ iconSm, iconLg, title, desc }) {
    return (
        <div className="flex gap-4 md:flex-col md:items-center md:gap-6 md:text-center">
            <div className="shrink-0 w-12 h-12 md:w-30 md:h-30">
                <ServiceIcon
                    title={title}
                    iconSm={iconSm}
                    iconLg={iconLg}
                    className="w-full h-full"
                />
            </div>
            <div className="space-y-1 md:space-y-2">
                <p className="body-3 font-bold md:body-2">{title}</p>
                <p className="text-sm  text-Neutral-600  whitespace-normal lg:whitespace-pre-line ">{desc}</p>
            </div>
        </div>
    );
}

function WorkspaceCarousel() {
    return (
        <div className="w-full overflow-hidden ">
            <Swiper
                modules={[Mousewheel, Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }} //換張秒數控制
                loop

                speed={600}
                spaceBetween={16}
                slidesPerView={1.3}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}

                centeredSlides
                breakpoints={{
                    768: { slidesPerView: 2.24, spaceBetween: 24 },
                    1024: { slidesPerView: 2.24, spaceBetween: 24 },
                    1440: { slidesPerView: 2.5, spaceBetween: 24 },
                }}
            >
                {slides.map((s) => (
                    <SwiperSlide key={s.id}>
                        <div className="r-sm overflow-hidden">
                            <picture>
                                <source media="(min-width: 768px)" srcSet={s.lg} />
                                <img
                                    src={s.sm}
                                    alt={s.alt}
                                    className="block w-full aspect-332/240 md:aspect-636/424 object-center"
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


function AreaContent() {
    const [activeIdx, setActiveIdx] = useState(0);
    return (
        <>
            <section className="max-w-293 mx-auto px-12 ">
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



                <div className="mt-12 md:mt-19">
                    <span className="relative inline-block mb-6 md:mb-7">
                        <span className="relative z-10 font-bold text-xl md:text-[28px]">#服務</span>
                        <span className="absolute inset-x-0 -inset-y-0.2 bottom-0 h-1/2 bg-accent-orange z-0"></span>
                    </span>

                    <div className="space-y-7 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-7 md:gap-y-12">
                        {services.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </div>
                </div>


            </section>
            <div className="mt-10 mb-12 md:mt-20 md:mb-20">
                <WorkspaceCarousel />
            </div>


            <section className="w-full bg-Primary-Violet-200">
                <div className=" mx-auto px-12 py-9 pb-12 md:py-15 md:mt-0 md:pb-20 max-w-293">

                    <div className="inline-block relative mb-7.25 md:mb-6.25 md:pl-20">
                        <p className="r-sm outline-2 outline-Neutral-700  bg-white px-2.5 py-3 text-sm md:px-4 md:text-base">
                            <span className="font-bold">2023</span>
                            <span> 年為試營運階段，進駐可享有</span>
                            <span className="font-bold">限定優惠價！</span>
                        </p>


                        <span
                            className="
                        absolute left-5.5 md:left-23 -bottom-3.75
                        h-0 w-0
                        border-l-13 border-l-transparent
                        border-r-12 border-r-transparent
                        border-t-15 border-t-Neutral-700"/>
                        <span
                            className="
                        absolute left-6 md:left-23.5 -bottom-3
                        h-0 w-0
                        border-l-11 border-l-transparent md:border-l-11
                        border-r-10 border-r-transparent md:border-r-10 
                        border-t-13 border-t-white"/>
                    </div>


                    <h2 className="h2 mb-3 md:mb-2">進駐費用</h2>
                    <p className="text-base md:text-xl  mb-5 md:mb-9">
                        進駐區域共分兩區塊：<span className="font-bold">培訓區域</span> 及{" "}
                        <span className="font-bold">進駐區域</span>，目前僅接受租期 1 個月以上，
                        單日暫不開放。
                    </p>

                    <div className="-mr-12 xl:mr-0">
                        <Swiper
                            modules={[Mousewheel]}
                            slidesPerView={1.1}
                            spaceBetween={20}
                            centeredSlides={false}
                            mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
                            className="w-full  pr-12 md:pr-0"
                            breakpoints={{
                                600: { slidesPerView: 1.4, spaceBetween: 24 },
                                768: { slidesPerView: 1.5, spaceBetween: 24 },
                                1024: { slidesPerView: 2, spaceBetween: 24 },
                            }}
                        >
                            <SwiperSlide className="h-auto -mr-12">
                                <div className="mb-8 xl:mb-10">
                                    <div
                                        onClick={() => setActiveIdx(0)}
                                        className={[
                                            "bg-Neutral-white r-md p-8 border-2 cursor-pointer xl:px-20 lg:pt-9 lg:pb-14",
                                            activeIdx === 0 ? "border-Neutral-700" : "border-transparent",
                                            "hover:border-Neutral-700",
                                        ].join(" ")}
                                    >
                                        <h3 className="h3 text-center  mb-4">進駐者</h3>
                                        <p className="bg-Neutral-200 text-center text-2xl font-bold px-5 py-5  md:px-10 md:py-10 md:text-4xl ">$ 3,200 / Month</p>

                                        <div className="flex flex-col gap-3 mt-4 md:mt-7 md:gap-4 ">
                                            <p className="flex items-center gap-3">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                <span className="relative inline-block ">
                                                    <span className="relative z-10 text-base">進駐區域</span>
                                                    <span className="absolute -inset-y-0.1  inset-x-0 bottom-0.5 h-2/5 bg-accent-orange z-0" />
                                                </span>
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                <span className="translate-y-0.5 text-base ">9:00-18:00</span>
                                                可使用
                                            </p>

                                            <p className="flex items-center gap-3">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                <span className="relative inline-block ">
                                                    <span className="relative z-10 text-base">固定座位</span>
                                                    <span className="absolute -inset-y-0.1  inset-x-0 bottom-0.5 h-2/5 bg-accent-orange z-0" />
                                                </span>
                                            </p>

                                            <p className="flex items-center gap-3">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                <span className="relative inline-block ">
                                                    <span className="relative z-10 text-base">專屬置物櫃</span>
                                                    <span className="absolute -inset-y-0.1  inset-x-0 bottom-0.5 h-2/5 bg-accent-orange z-0" />
                                                </span>
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                免費無線網路
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                免費咖啡茶水
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                原價
                                                <span className="translate-y-0.5 text-base ">｜3,500 / Month</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="h-auto group">
                                <div className="mb-8 xl:mb-10">
                                    <div
                                        onClick={() => setActiveIdx(1)}
                                        className={[
                                            "bg-Neutral-white r-md p-8 border-2 cursor-pointer xl:px-20 lg:pt-9 lg:pb-14",
                                            activeIdx === 0 ? "border-Neutral-700" : "border-transparent",
                                            "hover:border-Neutral-700",
                                        ].join(" ")}
                                    >
                                        <h3 className="h3 text-center tracking-tight md:tracking-[0.02] mb-4">單日使用（暫不提供）</h3>
                                        <p className="bg-Neutral-200 text-center text-2xl font-bold px-10 py-5 md:px-10 md:py-10 md:text-4xl ">$ 300 / Day</p>

                                        <div className="flex flex-col gap-3 mt-4 md:gap-4 md:mt-7">
                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                培訓區域
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                <span className="translate-y-0.5 text-base ">9:00-18:00</span>
                                                可使用
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                非固定座位
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                共用置物櫃
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                免費無線網路
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                免費咖啡茶水
                                            </p>

                                            <p className="flex items-center gap-3 text-base">
                                                <img className="w-4.5 shrink-0" src={checkSm} alt="checkIcon" />
                                                原價
                                                <span className="translate-y-0.5 text-base  ">｜300 / Day</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScEUjtPalxIGn0dVgO_1VLFxuq7is_0VUYROiGzktwze5QARw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        group flex items-center justify-center
                        h3 bg-violet-100 border-2 border-Neutral-700
                        r-md p-4 md:py-6 md:text-8
                    "
                    >
                        <span className="relative inline-flex items-center">
                            <span className="transition-transform duration-700 group-hover:-translate-x-5">
                                馬上填表單！
                            </span>

                            <img
                                src={goIcon}
                                alt="goIcon"
                                aria-hidden="true"
                                className="
                            absolute left-full top-1/2 -translate-y-1/2
                            ml-2
                            w-16 h-16
                            opacity-0 scale-30
                            transition-[opacity,transform] duration-1000 ease-out
                            group-hover:opacity-100 group-hover:scale-100
                        "
                            />
                        </span>
                    </a>
                </div>



            </section>

        </>
    );
}
export default AreaContent;