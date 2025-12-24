import weijie from '../../assets/imgs/coach/coach-weijie.png';
import yinmin from '../../assets/imgs/coach/coach-yinmin.png';
import justin from '../../assets/imgs/coach/coach-justin.png';
import casper from '../../assets/imgs/coach/coach-casper.png';
import go from '../../assets/imgs/coach/go.png';
import { useState, useRef, useEffect } from 'react';

function LinkItem({ href, children }) {
    return (
        <a
            className="underline decoration-Neutral-700 underline-offset-4 hover:text-Neutral-500"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}

const coachData = [
    {
        id: 'weijie',
        name: '廖 洧 杰',
        image: weijie,
        title: "前端教練 | 廖洧杰",
        list: [
            <>
                2016-2022 過往經歷：<LinkItem href="https://www.hexschool.com/">六角學院校長</LinkItem>、<LinkItem href="https://www.facebook.com/people/%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F/100039975056467/#">高雄火箭隊</LinkItem>前端教練
            </>,
            "2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位",
            "2013-2019 授課人數：線上+線下授課學員超過 25,000 位",
            <>
                2014-2019 線下授課：<LinkItem href="https://www.im.nuk.edu.tw/?page_id=95">高雄大學前端領域兼任講師</LinkItem>
            </>,
            "2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統"
        ]
    },
    {
        id: 'yinmin',
        name: '穎 旻',
        image: yinmin,
        title: "前端教練 | 穎旻",
        list: [
            "六角學院前端工程師",
            "六角學院前端講師",
            "金龍國小教育訓練講師",
            "國泰產險教育訓練講師"
        ]
    },
    {
        id: 'justin',
        name: '賈 斯 汀',
        image: justin,
        title: "後端教練 | 賈斯汀",
        list: [
            "高雄市警察局縣市合併內外部整合",
            "嘉義縣警察局全球資訊網與內部知識網",
            "總統府全球資訊網系統維護及開發",
            "總統府 APP 新聞即時通系統開發",
            "金管會 EIP SSO 整合",
            "經濟部工業局電子書包加值應用計畫系統規劃、設計開發",
            "國立海生館活動與報名系統規劃開發",
            "國立海生館海洋教育網規劃開發",
            "台灣淨水器材百科商務平台規劃開發",
            "高雄市小學電子書包試行計畫",
            "屏東國立海生館活動與報名系統",
            "屏東國立海生館海洋教育網",
            "威錦水器材百科補助計畫",
            "supermediastore（美國購物網站）",
            "高雄捷運網站",
            "高雄世運志工服務系統",
            "高雄市 85 大樓招商網",
            "高雄市國稅局稅務宣導活動網站",
            "高雄市民政局業務資訊化委外作業",
            "高雄市國稅局全球資訊網",
            "高雄市府衛生局中英全球資訊網",
            "高雄市新聞處圖文影像管理系統",
            "高雄市政府文化局中英文網站",
            "屏東縣政府旅遊網",
            "屏東縣政府招商網",
            "行政院南區服務中心網站",
            "經濟部水利署南區水資源局 105 年度業務及全球資訊網站維護及功能擴充計畫"
        ]
    },
    {
        id: 'casper',
        name: '卡 斯 伯',
        image: casper,
        title: "UI 教練 | 卡斯伯",
        list: [
            <>
                2016-2022 過往經歷：<LinkItem href="https://www.hexschool.com/">六角學院</LinkItem>共同創辦人
            </>,
            <>
                2016-2022 近期授課經驗：<LinkItem href="https://www.hexschool.com/courses/vue-training.html">Vue 3 直播班講師</LinkItem>、<LinkItem href="https://www.youtube.com/watch?v=qRZLtIcPdls&list=RDCMUC-b2nGm0xLzic38Byti0VjA&start_radio=1">從 Figma 到 VSCode，設計做到網頁切版</LinkItem>
            </>,
            "2013-2016 實務經驗：鴻海軟體工程師，設計師轉職前端工程師，擅長將複雜觀念用圖形化方式呈現",
            "六屆 IT 鐵人邦獲選紀錄",
            "Modern Web 研討會講者",
            "線上課程超過萬人註冊",
            "研討會經驗-經驗豐富的技術開發者 2017 Modern Web 技術講者",
            "2021 {Laravel x Vue} Conf 技術講者",
            "五屆 IT 鐵人賽優選",
            "技術 Blog - 卡斯伯前端"
        ]
    },
];

function useDragScroll() {
    const ref = useRef(null);
    const state = useRef({
        isDown: false,
        startX: 0,
        scrollLeft: 0,
        cardWidth: 0,
        maxScroll: 0,
    });

    const updateDimensions = () => {
        const el = ref.current;
        if (!el) return;
        const firstCard = el.querySelector('li');
        const ul = el.querySelector('ul');
        if (!firstCard || !ul) return;

        const style = window.getComputedStyle(firstCard);
        const marginRight = parseFloat(style.marginRight);
        state.current.cardWidth = firstCard.offsetWidth + marginRight;
        state.current.maxScroll = Math.max(0, ul.scrollWidth - el.clientWidth);
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const onMouseDown = (e) => {
        const el = ref.current;
        if (!el) return;
        state.current.isDown = true;
        state.current.startX = e.pageX - el.offsetLeft;
        state.current.scrollLeft = el.scrollLeft;
    };

    const stopDrag = () => {
        state.current.isDown = false;
    };

    const onMouseMove = (e) => {
        if (!state.current.isDown) return;
        e.preventDefault();
        const el = ref.current;
        const x = e.pageX - el.offsetLeft;
        const walk = x - state.current.startX;
        let newScroll = state.current.scrollLeft - walk;

        const { maxScroll } = state.current;
        if (newScroll < 0) newScroll = 0;
        if (newScroll > maxScroll) newScroll = maxScroll;

        el.scrollLeft = newScroll;
    };

    const onDragStart = (e) => e.preventDefault();

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleWheel = (e) => {
            e.preventDefault();
            const { cardWidth, maxScroll } = state.current;
            let newScroll = el.scrollLeft + (e.deltaY > 0 ? cardWidth : -cardWidth);
            if (newScroll < 0) newScroll = 0;
            if (newScroll > maxScroll) newScroll = maxScroll;
            el.scrollLeft = newScroll;
        };

        el.addEventListener('wheel', handleWheel, { passive: false });
        return () => el.removeEventListener('wheel', handleWheel);
    }, []);

    return {
        ref,
        handlers: {
            onMouseDown,
            onMouseUp: stopDrag,
            onMouseLeave: stopDrag,
            onMouseMove,
            onDragStart,
        },
    };
}

function CoachCard({ id, name, image, isActive, onClick }) {
    return (
        <li
            onClick={onClick}
            className={`
                group relative w-83 h-50 flex-none cursor-pointer
                border-2 border-Neutral-700 r-lg
                transition-colors duration-200

                ${isActive ? 'bg-Primary-Blue-100' : 'bg-white'}

                md:w-62.75 md:h-40 md:r-md
            `}
        >
            <img
                src={image}
                alt={name}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="
                    absolute -top-5.75 w-55 h-55 md:w-45 md:h-45
                    pointer-events-none select-none
                "
            />
            <p className="
                text-[18px] font-bold text-vertical
                px-4 pl-3 pr-4
                absolute -top-6 right-8
                bg-white border-2 border-Neutral-700 r-sm
                shadow-[4px_4px_0_0_#363636]
                group-hover:-top-10
                md:text-[16px] md:right-4
            ">
                {name}
            </p>
        </li>
    );
}

function Coaches() {
    const [activeCoachId, setActiveCoachId] = useState(coachData[0].id);
    const drag = useDragScroll();

    const activeCoach = coachData.find(
        (coach) => coach.id === activeCoachId
    );

    return (
        <>
            <div className="w-full mx-auto pt-10 px-12 md:max-w-269 md:pt-16 md:px-0">
                <h3 className="h3">教練團</h3>
                <div className="w-full flex-none mt-3">
                    <div
                        ref={drag.ref}
                        {...drag.handlers}
                        className="
                            w-full mt-3 overflow-x-auto
                            scrollbar-hide cursor-grab active:cursor-grabbing
                            select-none
                        "
                    >
                        <ul className="w-max flex gap-7 pt-10 md:gap-6">
                            {coachData.map((coach) => (
                                <CoachCard
                                    key={coach.id}
                                    id={coach.id}
                                    name={coach.name}
                                    image={coach.image}
                                    isActive={coach.id === activeCoachId}
                                    onClick={() => setActiveCoachId(coach.id)}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-7">
                        <h4 className="body-1 font-bold">{activeCoach.title}</h4>

                        <ul className="list-disc ml-5 mt-2 md:mt-3 space-y-1">
                            {activeCoach.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <a
                    href='https://register.rocket-coding.com/'
                    target='_blank'
                    className={`
                        h3 h-20 bg-Primary-Blue-100 border-2 border-Neutral-700 r-md flex justify-center items-center gap-5 translate-y-[50%]
                        md:h-24
                        group
                    `}
                >
                    <h3 className="h3 translate-x-10.5 transform transition-all duration-500 group-hover:translate-x-0">馬上報名！</h3>
                    <img
                        src={go}
                        alt="馬上報名"
                        className="
                            opacity-0 scale-50 transform transition-all duration-500
                            group-hover:opacity-100 group-hover:scale-100
                            origin-center
                        "
                    />
                </a>
            </div>
        </>
    )
}

export default Coaches;