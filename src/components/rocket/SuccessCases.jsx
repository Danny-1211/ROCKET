import { useRef, useEffect } from "react";

function useDragScroll() {
    const ref = useRef(null);
    const state = useRef({
        isDown: false,
        startX: 0,
        scrollLeft: 0
    });

    const onMouseDown = (e) => {
        const el = ref.current;
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

        el.scrollLeft = state.current.scrollLeft - walk;
    };

    return {
        ref,
        handlers: {
            onMouseDown,
            onMouseUp: stopDrag,
            onMouseLeave: stopDrag,
            onMouseMove
        }
    };
}

function DragRow({ images }) {
    const drag = useDragScroll();

    useEffect(() => {
        const el = drag.ref.current;
        if (!el) return;

        const handleWheel = (e) => {
            const newScrollLeft = el.scrollLeft + e.deltaY * 0.3;

            if (newScrollLeft < 0) {
                el.scrollLeft = 0;
                return;
            }
            if (newScrollLeft > el.scrollWidth - el.clientWidth) {
                el.scrollLeft = el.scrollWidth - el.clientWidth;
                return;
            }

            el.scrollLeft = newScrollLeft;
            e.preventDefault();
        };

        el.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            el.removeEventListener("wheel", handleWheel);
        };
    }, [drag.ref]);

    return (
        <ul
            ref={drag.ref}
            {...drag.handlers}
            className="
                max-w-258 w-full pr-12 flex gap-6 overflow-x-auto
                md:max-w-none md:pr-0
                scrollbar-hide drag-scroll
            "
        >
            {images.map((img) => (
                <li
                    key={img}
                    className="block flex-none w-60 h-40 md:w-76.5 md:h-50"
                >
                    <img
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                        className="object-cover w-full h-full select-none"
                        src={`./src/assets/imgs/case/${img}.png`}
                        alt={img}
                    />
                </li>
            ))}
        </ul>
    );
}

const caseImages = [
    ["case1", "case2", "case3", "case4"],
    ["case5", "case6", "case7", "case8"]
];

function SuccessCases() {
    return (
        <>
            <section className="pt-12 pb-23 md:pt-23 md:pb-25.5 md:px-18">
                <div className="flex flex-col gap-4 md:gap-7 md:mx-auto">
                    <h2 className="h2 text-center text-Neutral-700">
                        成功案例
                    </h2>
                    <div className="w-full pl-12 flex flex-col gap-7 md:max-w-324 md:pl-0 md:mx-auto">
                        {caseImages.map((row, index) => (
                            <DragRow key={index} images={row} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SuccessCases;