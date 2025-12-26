import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { pricingPlans } from "../../data/workspace/workspaceData";


function PricingPlansCard({ activeIdx, setActiveIdx, checkIcon }) {

    return (
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
                {pricingPlans.map((plan) => (
                    <SwiperSlide
                        key={plan.idx}
                        className={plan.idx === 0 ? "h-auto -mr-12" : "h-auto group"}
                    >
                        <div className="mb-8 xl:mb-10">
                            <div
                                onClick={() => setActiveIdx(plan.idx)}
                                className={[
                                    "bg-Neutral-white r-md p-8 border-2 cursor-pointer xl:px-20 lg:pt-9 lg:pb-14",
                                    activeIdx === plan.idx
                                        ? "border-Neutral-700"
                                        : "border-transparent hover:border-Neutral-700",
                                ].join(" ")}
                            >
                                <h3
                                    className={[
                                        "h3 text-center mb-4",
                                        plan.titleClass,
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                >
                                    {plan.title}
                                </h3>
                                <p
                                    className={[
                                        "bg-Neutral-200 text-center text-2xl font-bold",
                                        plan.priceClass,
                                    ].join(" ")}
                                >
                                    {plan.price}
                                </p>

                                <div className="flex flex-col gap-3 mt-4 md:mt-7 md:gap-4 ">
                                    {plan.items.map((item, i) => (
                                        <p key={i} className="flex items-center gap-3 text-base">
                                            <img
                                                className="w-4.5 shrink-0"
                                                src={checkIcon}
                                                alt="checkIcon"
                                            />

                                            {item.type === "highlight" ? (
                                                <span className="relative inline-block ">
                                                    <span className="relative z-10 text-base">
                                                        {item.text}
                                                    </span>
                                                    <span className="absolute -inset-y-0.1  inset-x-0 bottom-0.5 h-2/5 bg-accent-orange z-0" />
                                                </span>
                                            ) : item.type === "time" ? (
                                                <>
                                                    <span className="translate-y-0.5 text-base ">
                                                        {item.time}
                                                    </span>
                                                    {item.text}
                                                </>
                                            ) : item.type === "oldPrice" ? (
                                                <>
                                                    {item.prefix}
                                                    <span className="translate-y-0.5 text-base ">
                                                        {item.value}
                                                    </span>
                                                </>
                                            ) : (
                                                item.text
                                            )}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default PricingPlansCard;