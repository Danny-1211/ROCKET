import { useState } from "react";
import { areas, services, slides } from "../../data/workspace/workspaceData";
import PricingPlansCard from "./PricingPlan";
import { ImageBlock, ServiceCard, TextBlock } from "./SpaceDescription";
import WorkspaceCarousel from "./WorkspaceCarousel";

import checkSm from "../../assets/imgs/icon/ic-check-sm.svg";
import goIcon from "../../assets/imgs/icon/ic-go-coworking.svg";

function AreaContent() {
    const [activeIdx, setActiveIdx] = useState(0);
    return (
        <>
            <section className="max-w-293 mx-auto px-12 mt-9 md:mt-5">
                <h2 className="text-center h2 py-4 md:py-15">場域說明</h2>
                <span className="relative inline-block mb-4 md:mb-7">
                    <span className="relative z-10 font-bold text-[20px] md:text-[28px]">#硬體</span>
                    <span className="absolute inset-x-0 -inset-y-0.2 bottom-0 h-1/2 bg-accent-orange z-0"></span>
                </span>
                <div className="space-y-10 md:space-y-9">
                    {areas.map((area, i) => {
                        const isOdd = i % 2 === 1;

                        return (
                            <article
                                key={area.id}
                                className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 md:items-center "
                            >

                                <div className={isOdd ? "md:order-2" : "md:order-1"}>
                                    <ImageBlock {...area} />
                                </div>


                                <div className={isOdd ? "md:order-1" : "md:order-2"}>
                                    <TextBlock {...area} />
                                </div>
                            </article>
                        );
                    })}
                </div>



                <div className="mt-12 md:mt-19">
                    <span className="relative inline-block mb-7 md:mb-8">
                        <span className="relative z-10 font-bold text-[20px] md:text-[28px]">#服務</span>
                        <span className="absolute inset-x-0 -inset-y-0.2 bottom-0 h-1/2 bg-accent-orange z-0"></span>
                    </span>

                    <ul className="space-y-7 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-7 md:gap-y-12">
                        {services.map((service) => (
                            <li key={service.id}>
                                <ServiceCard {...service} />
                            </li>
                        ))}
                    </ul>
                </div>


            </section>
            <div className="mt-10 mb-12 md:mt-20 md:mb-20">
                <WorkspaceCarousel slides={slides} />
            </div>


            <section className="w-full bg-Primary-Violet-200">
                <div className=" mx-auto px-12 py-9 pb-12 md:py-15 md:mt-0 md:pb-20 max-w-293">

                    <div className="inline-block relative mb-7.25 md:mb-6.25 md:pl-20">
                        <p className="r-sm outline-2 outline-Neutral-700  bg-white px-2.5 py-3 text-[14px] md:px-4 md:text-[16px]">
                            <span className="font-bold">2023</span>
                            <span>年為試營運階段，進駐可享有</span>
                            <span className="font-bold" >限定優惠價！</span>
                        </p>


                        <span
                            className="
                                absolute left-5.5 md:left-23 -bottom-3.75
                                h-0 w-0
                                border-l-13 border-l-transparent
                                border-r-12 border-r-transparent
                                border-t-15 border-t-Neutral-700"
                        />
                        <span
                            className="
                                absolute left-6 md:left-23.5 -bottom-3
                                h-0 w-0
                                border-l-11 border-l-transparent md:border-l-11
                                border-r-10 border-r-transparent md:border-r-10
                                border-t-13 border-t-white"
                        />
                    </div>


                    <h2 className="h2 mb-3 md:mb-2">進駐費用</h2>
                    <p className="text-[16px] md:text-[20px]  mb-5 md:mb-9">
                        進駐區域共分兩區塊：<span className="font-bold">培訓區域</span> 及{" "}
                        <span className="font-bold">進駐區域</span>，目前僅接受租期 1 個月以上，
                        單日暫不開放。
                    </p>

                    <PricingPlansCard
                        activeIdx={activeIdx}
                        setActiveIdx={setActiveIdx}
                        checkIcon={checkSm}
                    />
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScEUjtPalxIGn0dVgO_1VLFxuq7is_0VUYROiGzktwze5QARw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            h3 h-18.25 bg-Primary-Violet-100 border-2 border-Neutral-700 r-md flex justify-center items-center gap-5
                            md:h-24 active:bg-Primary-Violet-200
                            group
                        "
                    >
                        <span className="translate-x-10.5 transform transition-all duration-500 group-hover:translate-x-0">
                            馬上填表單！
                        </span>

                        <img
                            src={goIcon}
                            alt="goIcon"
                            aria-hidden="true"
                            className="
                                w-16 h-16
                                opacity-0 scale-30
                                transition-[opacity,transform] duration-500 ease-out
                                group-hover:opacity-100 group-hover:scale-100
                            "
                        />
                    </a>
                </div>
            </section>

        </>
    );
}
export default AreaContent;