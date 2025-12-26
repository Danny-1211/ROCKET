import trainingData from '../../data/rocket/trainingData';
import Coaches from './Coaches';
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

        offsetRef.current -= 1; // 每幀移動 1px
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

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            stopMarquee();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="overflow-hidden w-full">
            <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
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

function TrainingIntro() {
    return (
        <div className="relative">
            <h2 className="h2 text-center absolute inset-x-0 -top-5 md:-top-7">
                關於培訓
            </h2>

            <div className="max-w-83 w-full mt-7.5 mx-auto px-5 py-3 text-[14px] whitespace-nowrap bg-white shadow-[0_2px_4px_0_#E8E8E8] rounded-[50px] md:text-[16px] md:max-w-159 md:mt-9.5">
                <div className="flex gap-3 overflow-x-hidden">
                    <div className="emphasis md:my-1.25">近期梯次</div>
                    <div className="border-2 border-Neutral-200"></div>
                    <div className="w-full md:my-1.25">
                        <TrainingBatch />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TrainingCard({ title, bg, imageSm, imageLg, reverse = false, children }) {
    return (
        <div
            className="
                w-full pt-12.5 pb-8 px-12 bg-white border-2 border-Neutral-200
                relative md:pt-16 md:pb-10 md:pl-12 md:pr-20 md:r-md
            "
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h3 className="body-1 max-w-36.5 px-5 py-3 bg-white border-2 border-Neutral-700 shadow-[4px_4px_0_0_#363636] r-sm absolute inset-x-0 -top-8 left-12 whitespace-nowrap md:max-w-51 md:px-10 md:left-10">
                {title}
            </h3>

            <div className={`flex flex-col gap-7 md:gap-12 md:items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
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

function TrainingSection({ heading, content, list }) {
    return (
        <div>
            <h4 className="body-2 border-b-4 border-Neutral-700 inline-block mb-3">
                {heading}
            </h4>

            {content && <p>{content}</p>}

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

export default function AboutTraining() {
    return (
        <section className="bg-Neutral-100 mb-22.5 md:mb-32 md:px-3">
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
            <Coaches />
        </section>
    );
}
