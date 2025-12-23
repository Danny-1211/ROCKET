import weijie from '../../assets/imgs/coach/coach-weijie.png';
import yinmin from '../../assets/imgs/coach/coach-yinmin.png';
import justin from '../../assets/imgs/coach/coach-justin.png';
import casper from '../../assets/imgs/coach/coach-casper.png';

const coachData = [
    {
        id: 'weijie',
        name: '廖 洧 杰',
        image: weijie,
        title: "前端教練 | 廖洧杰",
        list: [
            <>
                2016-2022 過往經歷：<a>六角學院校長</a>、<a>高雄火箭隊</a>前端教練
            </>,
            "2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位",
            "2013-2019 授課人數：線上+線下授課學員超過 25,000 位",
            <>
                2014-2019 線下授課：<a>高雄大學前端領域兼任講師</a>
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
                2016-2022 過往經歷：<a>六角學院</a>共同創辦人
            </>,
            <>
                2016-2022 近期授課經驗：<a>Vue 3 直播班講師</a>、<a>從 Figma 到 VSCode，設計做到網頁切版</a>
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

function CoachCard({ name, image }) {
    return (
        <li className="
            group relative w-83 h-50 flex-none
            bg-white border-2 border-Neutral-700 r-lg

            md:w-62.75 md:h-40 md:r-md
        ">
            <img
                className="absolute -top-5.5 w-55 h-55 md:w-45 md:h-45"
                src={image}
                alt={name}
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
    return (
        <>
            <div className="w-full mx-auto pt-10 pb-16.5 px-12 md:max-w-269 md:pt-16 md:pb-32 md:px-0">
                <h3 className="h3">教練團</h3>
                <div className="w-full flex-none mt-3">
                    <div className="w-full mt-3 overflow-x-auto scrollbar-hide">
                        <ul className="w-full flex gap-7 pt-10 md:gap-6">
                            {coachData.map((coach) => (
                                <CoachCard
                                    key={coach.id}
                                    name={coach.name}
                                    image={coach.image}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 md:mt-7">
                        <h4 className="body-1 font-bold">前端教練 | 廖洧杰</h4>
                        <ul className="list-disc ml-5 mt-2 md:mt-3">
                            <li>
                                2016-2022 過往經歷：<a>六角學院校長</a>、<a>高雄火箭隊</a>前端教練
                            </li>
                            <li>
                                2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位
                            </li>
                            <li>
                                2013-2019 授課人數：線上+線下授課學員超過 25,000 位
                            </li>
                            <li>
                                2014-2019 線下授課：<a>高雄大學前端領域兼任講師</a>
                            </li>
                            <li>
                                2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coaches;