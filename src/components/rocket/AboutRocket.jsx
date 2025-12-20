const SKILLS = {
    html: { id: "html", label: "HTML" },
    css: { id: "css", label: "CSS" },
    js: { id: "js", label: "JavaScript" },
    csharp: { id: "csharp", label: "C#" },
    dotnet: { id: "dotnet", label: ".NET" },
    figma: { id: "figma", label: "Figma" }
};

const jobCards = [
    {
        id: 1,
        title: "前端工程師",
        tag: ["html", "css", "js"],
        img_src: "./src/assets/imgs/about-rocket/frontend.png",
        img_alt: "Front-end engineer"
    },
    {
        id: 2,
        title: "後端工程師",
        tag: ["csharp", "dotnet"],
        img_src: "./src/assets/imgs/about-rocket/backend.png",
        img_alt: "Back-end engineer"
    },
    {
        id: 3,
        title: "UI 設計師",
        tag: ["figma", "html", "css"],
        img_src: "./src/assets/imgs/about-rocket/ui.png",
        img_alt: "UI designer"
    }
];

function JobCard({ card }) {
    const { title, tag, img_src, img_alt } = card;

    return (
        <div
            className="
                bg-white r-lg px-5 py-4
                flex flex-col gap-34
                md:min-w-105 md:flex-row md:justify-between md:p-9 md:max-w-159 md:gap-0
            "
        >
            <div className="flex flex-col gap-3 md:justify-between">
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="h3 text-Neutral-700">{title}</h3>

                    <ul className="text-xs flex gap-2 flex-wrap">
                        {tag.map(skillId => {
                            const skill = SKILLS[skillId];

                            return (
                                <li
                                    key={skill.id}
                                    className="
                                        font-en font-bold text-xs
                                        text-Primary-Blue-400
                                        px-4 py-2
                                        border-2 border-Primary-Blue-300
                                        rounded-[20px]
                                        md:text-base
                                    "
                                >
                                    {skill.label}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <p className="font-en font-bold text-Neutral-500 text-xl md:text-2xl">
                    {img_alt}
                </p>
            </div>

            <div className="w-full h-15 bg-Neutral-200 r-sm md:w-42 md:h-52">
                <img
                    className="block h-40 -mt-27 mx-auto md:-ml-13 md:my-6"
                    src={img_src}
                    alt={img_alt}
                />
            </div>
        </div>
    );
}

function AboutRocket() {
    return (
        <>
            <section className="bg-Primary-Blue-100 r-lg md:px-18">
                <div
                    className="
                        w-full px-12 py-9 mx-auto
                        flex flex-col items-center gap-6
                        md:px-0 md:py-15 md:flex-row
                        md:max-w-324 md:justify-between md:items-start
                    "
                >
                    <div className="max-w-83 w-full flex flex-col gap-4 md:max-w-132 md:gap-10">
                        <div>
                            <h2 className="body-2 font-en text-Neutral-700 font-bold">
                                About Rocket
                            </h2>
                            <h2 className="h1 text-Neutral-700">什麼是火箭隊</h2>
                        </div>

                        <p className="text-Neutral-700 md:text-xl">
                            火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI 設計師職缺而設。為期
                            <span className="font-bold">七個月的免費課程</span>，學員全程參與，
                            <span className="font-bold">僅需支付場地費</span>。
                        </p>

                        <p className="text-Neutral-700 md:text-xl">
                            火箭隊培育具備問題解決能力的專業人才，滿足企業需求。透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
                        </p>
                    </div>

                    <div className="max-w-83 w-full flex flex-col gap-6 md:max-w-163 md:gap-8 md:h-148 md:overflow-y-scroll md:overflow-x-hidden">
                        {jobCards.map(card => (
                            <JobCard key={card.id} card={card} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutRocket;