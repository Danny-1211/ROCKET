import case1 from '../../assets/imgs/case/case1.png'
import case2 from '../../assets/imgs/case/case2.png'
import case3 from '../../assets/imgs/case/case3.png'
import case4 from '../../assets/imgs/case/case4.png'
import case5 from '../../assets/imgs/case/case5.png'
import case6 from '../../assets/imgs/case/case6.png'
import case7 from '../../assets/imgs/case/case7.png'
import case8 from '../../assets/imgs/case/case8.png'
import useDragScroll from '../hooks/useDragScroll'

const caseImages = [
    [case1, case2, case3, case4],
    [case5, case6, case7, case8]
];

function DragRow({ images }) {
    return (
        <ul className="flex gap-6 flex-nowrap">
            {images.map((img, index) => (
                <li
                    key={index}
                    className="flex-none w-60 h-40 md:w-76.5 md:h-50"
                >
                    <img
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                        className="object-cover w-full h-full select-none"
                        src={img}
                        alt="成功案例"
                    />
                </li>
            ))}
        </ul>
    );
}

function SuccessCases() {
    const drag = useDragScroll();

    return (
        <section className="pt-12 pb-23 md:pt-23 md:pb-25.5 md:px-3">
            <div className="flex flex-col gap-4 md:gap-7 md:mx-auto md:max-w-324">
                <h2 className="h2 text-center">成功案例</h2>

                <div
                    ref={drag.ref}
                    {...drag.handlers}
                    className="
                        overflow-x-auto
                        cursor-grab active:cursor-grabbing
                        select-none
                        w-full
                        scrollbar-hide
                    "
                >
                    <div className="flex flex-col items-center gap-7 min-w-max px-12 md:px-0 md:mx-auto">
                        {caseImages.map((row, index) => (
                            <DragRow key={index} images={row} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SuccessCases;