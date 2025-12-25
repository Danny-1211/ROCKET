import { compony } from "../../data/rocket/HostData";
import useDragScroll from '../hooks/useDragScroll'

function Host() {
  const drag = useDragScroll();

  return (
    <section className="bg-Neutral-200 relative mt-19 md:mt-31 ">
      <div className="w-full  flex flex-col items-start justify-start flex-nowrap pt-9 pb-4 pl-12 md:pl-3 md:pt-14 md:mx-auto md:max-w-324">
        <p className="h3 absolute top-2 -translate-y-1/2">
          主辦、協辦單位
        </p>
        <div
          ref={drag.ref}
          {...drag.handlers}
          className="
            w-full pr-12
            overflow-x-auto
            cursor-grab active:cursor-grabbing
            select-none
            scrollbar-hide
            md:pr-3
          "
        >
          <ul className="flex gap-5 md:gap-6 w-max">
            {compony.map((item, index) => {
              return (
                <li
                  className=" flex flex-col items-start justify-start gap-4 shrink-0"
                  key={index}
                >
                  <div className="  r-sm bg-Neutral-white flex items-center justify-center w-39 h-30 md:w-49 md:h-37 md:p-4">
                    <img
                      className="hidden md:block w-full h-full object-contain  "
                      src={item.imgUrl_lg}
                      alt={item.name}
                    />
                    <img
                      className="block w-25 h-full object-contain md:hidden "
                      src={item.imgUrl_sm}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start md:gap-1">
                    <p className="font-bold">{item.unit}</p>
                    <p>{item.name}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Host;
