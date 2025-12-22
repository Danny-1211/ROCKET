import Q1 from "../../assets/imgs/icon/ic-no.1-lg.svg";
import Q1_SM from "../../assets/imgs/icon/ic-no.1-sm.svg";
import Q2 from "../../assets/imgs/icon/ic-no.2-lg.svg";
import Q2_SM from "../../assets/imgs/icon/ic-no.2-sm.svg";
import Q3 from "../../assets/imgs/icon/ic-no.3-lg.svg";
import Q3_SM from "../../assets/imgs/icon/ic-no.3-sm.svg";
import Q4 from "../../assets/imgs/icon/ic-no.4-lg.svg";
import Q4_SM from "../../assets/imgs/icon/ic-no.4-sm.svg";



function Listitem() {
  return (
    <div className={`flex gap-2.5 items-center justify-start p-5 border-b-2 border-Neutral-200`}>
      <div className="list-number hidden lg:flex lg:items-center lg:justify-centerx">
        <img src={Q1} alt="number1" />
      </div>
      <div className="list-number lg:hidden flex items-center justify-centerx">
        <img src={Q1_SM} alt="number1" />
      </div>
      <div className="list-desc flex flex-col items-start justify-start">
        <p className="font-bold">Q:請問參加培訓需要費用嗎？</p>
        <p className="">A:不會有任何費用，僅需要場地費 ( $1200 / Month )，其餘完全免費。</p>
      </div>
    </div>
  );
}

function QuestionsList({ title }) {
  return (
    <div className=" flex flex-col gap-1 justify-start items-start">
      <p className="h3  w-full border-b-2 border-Neutral-200">{title}</p>
      <Listitem />
      <Listitem />
      <Listitem />
    </div>
  );
}

function Questions() {
  return (
    <section className="w-full bg-Neutral-white flex items-center justify-center">
      <div className="list bg-Neutral-white">
        <QuestionsList title="培訓費用" />
        <QuestionsList title="培訓流程" />
      </div>
    </section>
  );
}

export default Questions;
