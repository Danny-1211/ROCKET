import go from '../../assets/imgs/coach/go.png';
import useDragScroll from '../hooks/useDragScroll'
import coachData from '../../data/rocket/coachData'
import { useState } from 'react';

function CoachCard({ id, name, image, isActive, onClick }) {
    return (
        <li
            onClick={onClick}
            className={`
                group relative w-83 h-50 flex-none cursor-pointer
                border-2 border-Neutral-700 r-lg
                transition-colors duration-200

                ${isActive ? 'bg-Primary-Blue-100' : 'bg-white'}

                md:w-62.75 md:h-40 md:r-md
            `}
        >
            <img
                src={image}
                alt={name}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="
                    absolute -top-5.75 w-55 h-55 md:w-45 md:h-45
                    pointer-events-none select-none
                "
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
    const [activeCoachId, setActiveCoachId] = useState(coachData[0].id);
    const drag = useDragScroll();

    const activeCoach = coachData.find(
        (coach) => coach.id === activeCoachId
    );

    return (
        <>
            <div className="w-full mx-auto pt-10 pl-12 md:max-w-269 md:pt-16 md:pl-0">
                <h3 className="h3">教練團</h3>
                <div className="w-full flex-none mt-3">
                    <div
                        ref={drag.ref}
                        {...drag.handlers}
                        className="
                            w-full mt-3 overflow-x-auto
                            scrollbar-hide cursor-grab active:cursor-grabbing
                            select-none
                            pr-12 md:pr-0
                        "
                    >
                        <ul className="w-max flex gap-7 pt-10 md:gap-6">
                            {coachData.map((coach) => (
                                <CoachCard
                                    key={coach.id}
                                    id={coach.id}
                                    name={coach.name}
                                    image={coach.image}
                                    isActive={coach.id === activeCoachId}
                                    onClick={() => setActiveCoachId(coach.id)}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 mr-12 md:mr-0 md:mt-7">
                        <h4 className="body-1">{activeCoach.title}</h4>

                        <ul className="list-disc ml-5 mt-2 md:mt-3 space-y-1">
                            {activeCoach.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <a
                    href='https://register.rocket-coding.com/'
                    target='_blank'
                    rel="noopener noreferrer"
                    className={`
                        h3 h-20 bg-Primary-Blue-100 border-2 border-Neutral-700 r-md flex justify-center items-center gap-5 translate-y-[50%] mr-12 md:mr-0
                        md:h-24 active:bg-Primary-Blue-200
                        group
                    `}
                >
                    <h3 className="h3 translate-x-10.5 transform transition-all duration-500 group-hover:translate-x-0">
                        馬上報名！
                    </h3>
                    <img
                        src={go}
                        alt="馬上報名"
                        aria-hidden="true"
                        className="
                            opacity-0 scale-30 transform transition-all duration-500
                            group-hover:opacity-100 group-hover:scale-100
                            origin-center
                        "
                    />
                </a>
            </div>
        </>
    )
}

export default Coaches;