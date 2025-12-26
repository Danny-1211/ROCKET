
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



export const areas = [
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

export const services = [
    {
        id: "coffee",
        iconSm: serviceCoffeeSm,
        iconLg: serviceCoffeeLg,
        title: "咖啡、茶水",
        desc: "飲水機、冰箱、微波爐、果汁機、\n膠囊咖啡機 及不定時茶包及小餅乾零食",
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

export const slides = [
    { id: 1, sm: carousel1Sm, lg: carousel1Lg, alt: "carousel 1" },
    { id: 2, sm: carousel2Sm, lg: carousel2Lg, alt: "carousel 2" },
    { id: 3, sm: carousel3Sm, lg: carousel3Lg, alt: "carousel 3" },
    { id: 4, sm: carousel4Sm, lg: carousel4Lg, alt: "carousel 4" },
    { id: 5, sm: carousel5Sm, lg: carousel5Lg, alt: "carousel 5" },
    { id: 6, sm: carousel6Sm, lg: carousel6Lg, alt: "carousel 6" },
    { id: 7, sm: carousel7Sm, lg: carousel7Lg, alt: "carousel 7" },
    { id: 8, sm: carousel8Sm, lg: carousel8Lg, alt: "carousel 8" },
];

export const pricingPlans = [
    {
        idx: 0,
        title: "進駐者",
        titleClass: "",
        price: "$ 3,200 / Month",
        priceClass: "px-5 py-5 md:px-10 md:py-10",
        items: [
            { type: "highlight", text: "進駐區域" },
            { type: "time", time: "9:00-18:00", text: "可使用" },
            { type: "highlight", text: "固定座位" },
            { type: "highlight", text: "專屬置物櫃" },
            { type: "text", text: "免費無線網路" },
            { type: "text", text: "免費咖啡茶水" },
            { type: "oldPrice", prefix: "原價", value: "｜3,500 / Month" },
        ],
    },
    {
        idx: 1,
        title: "單日使用（暫不提供）",
        titleClass: "tracking-tight md:tracking-[0.02]",
        price: "$ 300 / Day",
        priceClass: "px-10 py-5 md:px-10 md:py-10",
        items: [
            { type: "text", text: "培訓區域" },
            { type: "time", time: "9:00-18:00", text: "可使用" },
            { type: "text", text: "非固定座位" },
            { type: "text", text: "共用置物櫃" },
            { type: "text", text: "免費無線網路" },
            { type: "text", text: "免費咖啡茶水" },
            { type: "oldPrice", prefix: "原價", value: "｜300 / Day" },
        ],
    },
];
