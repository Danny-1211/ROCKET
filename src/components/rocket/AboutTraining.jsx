import trainingBg from '../../assets/imgs/bg/training-bg.png';
import frontendSm from '../../assets/imgs/about-training/frontend-sm.png';
import frontendLg from '../../assets/imgs/about-training/frontend-lg.png';
import backendSm from '../../assets/imgs/about-training/backend-sm.png';
import backendLg from '../../assets/imgs/about-training/backend-lg.png';
import UISm from '../../assets/imgs/about-training/UI-sm.png';
import UILg from '../../assets/imgs/about-training/UI-lg.png';
import { useEffect, useRef } from "react";

function TrainingBatch() {
    const trackRef = useRef(null);
    const contentRef = useRef(null);
    const animationRef = useRef(null);
    const totalWidthRef = useRef(0);
    const offsetRef = useRef(0);

    const step = () => {
        const track = trackRef.current;
        if (!track) return;

        offsetRef.current -= 1; // 每幀移動 1px，可調整速度
        if (Math.abs(offsetRef.current) >= totalWidthRef.current) {
            offsetRef.current = 0;
        }

        track.style.transform = `translateX(${offsetRef.current}px)`;
        animationRef.current = requestAnimationFrame(step);
    };

    const startMarquee = () => {
        if (animationRef.current) return;

        const content = contentRef.current;
        if (!content) return;

        // 計算 totalWidth = 內容寬 + margin
        const style = getComputedStyle(content);
        const marginRight = parseFloat(style.marginRight || 0);
        totalWidthRef.current = content.getBoundingClientRect().width + marginRight;

        animationRef.current = requestAnimationFrame(step);
    };

    const stopMarquee = () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
        if (trackRef.current) {
            trackRef.current.style.transform = "translateX(0)";
            offsetRef.current = 0;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            stopMarquee();
            if (window.innerWidth < 768) {
                startMarquee();
            }
        };

        // 初始判斷
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            stopMarquee();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="overflow-hidden w-full">
            <div
                ref={trackRef}
                className="flex whitespace-nowrap will-change-transform"
            >
                <span ref={contentRef} className="mr-8">
                    第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)
                </span>
                <span className="mr-8">
                    第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)
                </span>
            </div>
        </div>
    );
}

function Highlight({ children }) {
    return (
        <span
            className="
                font-bold
                relative z-0 inline-block
                after:content-['']
                after:absolute
                after:left-0
                after:top-2
                after:w-full
                after:h-3
                after:bg-accent-yellow
                after:-z-10
            "
        >
            {children}
        </span>
    );
}

const trainingData = [
    {
        id: 'frontend',
        title: '前端工程師',
        bg: trainingBg,
        imageSm: frontendSm,
        imageLg: frontendLg,
        reverse: true,
        sections: [
            {
                heading: '關於前端',
                content: (
                    <>
                        主要專精 JavaScript 前端 (65%)、後端 (35%) 開發，投入語言為 HTML、CSS、JavaScript，
                        <Highlight>
                            適合有一些 HTML、CSS、JS 基礎的學員報名
                        </Highlight>。
                    </>
                )
            },
            {
                heading: '應徵門檻',
                list: [
                    <>會用 CSS Flexbox 排過網頁，有 RWD 響應式網頁概念，需提交 CSS 切版作品，<Highlight>請在履歷上需附網頁切版作品</Highlight>，Codepen、GitHub Pages 皆可</>,
                    '了解 JS 變數、陣列物件、DOM、監聽、AJAX 等知識，尚未熟練也沒關係。'
                ]
            },
            {
                heading: '你會學到',
                list: [
                    '網頁切版技能：HTML5、CSS3、SCSS、Bootstrap5、Tailwind CSS',
                    '前端開發技能：JavaScript、TypeScript、ES6、SPA、API 介接、NPM',
                    '後端開發技能：Node.js、MongoDB、Express、JWT',
                    'JS 框架：React（Hooks）、Vue 3',
                    '程式版控：Git、GitHub、Git Flow 工作流程'
                ]
            }
        ]
    },

    {
        id: 'backend',
        title: '後端工程師',
        bg: trainingBg,
        imageSm: backendSm,
        imageLg: backendLg,
        reverse: false,
        sections: [
            {
                heading: '關於後端',
                content: (
                    <>
                        後端工程師組主要專注後端開發，投入後端語言為
                        <Highlight>
                            C#、.NET，適合無程式背景的學員報名
                        </Highlight>。
                    </>
                )
            },
            {
                heading: '你會學到',
                list: [
                    '後端語言：C#',
                    '程式架構：ASP.NET Web Form、ASP.NET MVC、Web API',
                    '資料庫與雲端主機：MSSQL、Microsoft Azure'
                ]
            }
        ]
    },

    {
        id: 'ui',
        title: 'UI 設計師',
        bg: trainingBg,
        imageSm: UISm,
        imageLg: UILg,
        reverse: true,
        sections: [
            {
                heading: '關於設計',
                content: (
                    <>
                        主要以網頁 UI 設計 50%、網頁前端 50% 的雙技能樹養成，
                        <Highlight>
                            適合具備視覺背景，操作過繪圖軟體尤佳
                        </Highlight>。
                    </>
                )
            },
            {
                heading: '你會學到',
                list: [
                    '網頁前置規劃：Logic Flow、Wireframe、網格系統、使用者體驗',
                    '介面繪製流程：Figma、Mockup、Prototype、標註文件',
                    '網頁切版技能：HTML5、CSS、Bootstrap5'
                ]
            }
        ]
    }
];

function TrainingIntro() {
    return (
        <div className="relative">
            <h2 className="h2 text-center text-Neutral-700 absolute inset-x-0 -top-5 md:-top-7">
                關於培訓
            </h2>

            <div className="max-w-83 w-full mt-7.5 mx-auto px-5 py-3 text-[14px] whitespace-nowrap bg-white shadow-[0_2px_4px_0_#E8E8E8] rounded-[50px] md:text-[16px] md:max-w-159 md:mt-9.5">
                <div className="flex gap-3 overflow-x-hidden">
                    <div className="font-bold md:my-1.25">近期梯次</div>
                    <div className="border-2 border-Neutral-200"></div>
                    <div className="w-full md:my-1.25">
                        <TrainingBatch />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TrainingSection({ heading, content, list }) {
    return (
        <div>
            <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                {heading}
            </h4>

            {content && (
                <p>
                    {content}
                </p>
            )}

            {list && (
                <ol className="list-decimal ml-5">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}

function TrainingCard({
    title,
    bg,
    imageSm,
    imageLg,
    reverse = false,
    children
}) {
    return (
        <div
            className="
                w-full pt-12.5 pb-8 px-12 bg-white border-2 border-Neutral-200
                relative md:pt-16 md:pb-10 md:pl-12 md:pr-20 md:r-md
            "
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h3 className="body-1 font-bold max-w-36.5 px-5 py-3 bg-white border-2 border-Neutral-700 shadow-[4px_4px_0_0_#363636] r-sm absolute inset-x-0 -top-8 left-12 whitespace-nowrap md:max-w-51 md:px-10 md:left-10">
                {title}
            </h3>

            <div
                className={`
                    flex flex-col gap-7 md:gap-12 md:items-center
                    ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
                `}
            >
                <picture className="mx-auto block flex-none">
                    <source media="(min-width: 768px)" srcSet={imageLg} />
                    <img src={imageSm} alt={title} />
                </picture>

                <div className="flex flex-col gap-8 md:gap-9">
                    {children}
                </div>
            </div>
        </div>
    );
}

function AboutTraining() {
    return (
        <section className="bg-Neutral-100 mb-10 md:mb-16">
            <div className="w-full mx-auto flex flex-col gap-20 md:max-w-269">
                <TrainingIntro />

                {trainingData.map((item) => (
                    <TrainingCard
                        key={item.id}
                        title={item.title}
                        bg={item.bg}
                        imageSm={item.imageSm}
                        imageLg={item.imageLg}
                        reverse={item.reverse}
                    >
                        {item.sections.map((section, index) => (
                            <TrainingSection
                                key={index}
                                heading={section.heading}
                                content={section.content}
                                list={section.list}
                            />
                        ))}
                    </TrainingCard>
                ))}
            </div>
        </section>
    );
}

export default AboutTraining;