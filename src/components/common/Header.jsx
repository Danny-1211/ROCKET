import { useRef, useEffect, useState } from "react";
const marqueeSet = [
  "Let's join",
  "- 火箭隊培訓營 Rocket -",
  "- 共同空間 Co-working space -",
];

const Content = () => (
  <div className="flex shrink-0">
    {marqueeSet.map((text, index) => (
      <span
        key={index}
        className="px-4 py-3 font-bold emphasis whitespace-nowrap"
      >
        {text}
      </span>
    ))}
  </div>
);

function Header() {
  const contentRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const singleSetWidth = contentRef.current.offsetWidth;
      const speed = 10 * 10; // 0.1 秒移動 10 px, 等於 1 秒 移動 100 px
      setDuration(singleSetWidth / speed);
    }
  }, []);

  return (
    <header className="fixed w-full overflow-hidden bg-Neutral-white z-20">
      {/* tailwind 只能用靜態寫死的方式寫秒數所以這裡用 style 計算 */}
      <div
        className={`w-max flex py-2 marquee bg-Neutral-white animate-[marquee_linear_infinite]`}
        style={{ animationDuration: duration > 0 ? `${duration}s` : "0s" }}
      >
        <div ref={contentRef}>
          <Content />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </header>
  );
}
export default Header;
