import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import { slides } from "../../data/workspace/workspaceData";
import "swiper/css";



function WorkspaceCarousel() {
    return (
        <div className="w-full overflow-hidden  ">
            <Swiper
                modules={[Mousewheel, Autoplay]}
                autoplay={{ delay: 2000, disableOnInteraction: false }} //換張秒數控制
                loop

                speed={600}
                spaceBetween={16}
                slidesPerView={1.275}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                }}

                centeredSlides
                breakpoints={{
                    768: { slidesPerView: 1.7, spaceBetween: 24 },
                    1024: { slidesPerView: 2, spaceBetween: 24 },
                    1440: { slidesPerView: 2.223, spaceBetween: 24 },
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

export default WorkspaceCarousel;