import { useEffect, useRef } from "react";

export default function TrainingBatch() {
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