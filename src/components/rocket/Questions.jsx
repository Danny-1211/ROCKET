import {
  questionIconsLg,
  questionIconsSm,
  trainingPayment,
  trainingProcess,
} from "../../data/rocket/questions.jsx";

// 問題列表項目
function Listitem({ content }) {
  return content.map((item, index) => {
    return (
      <div
        className={` w-full flex gap-4  items-start justify-start  py-5  border-b-2 border-Neutral-200 md:p-5 md:gap-8 `}
        key={index}
      >
        <div className="list-number hidden md:flex md:items-start md:justify-start">
          <img
            className="object-cover max-w-6 h-6"
            src={questionIconsLg[index]}
            alt={`number${index + 1}`}
          />
        </div>
        <div className="list-number md:hidden flex items-center justify-center">
          <img
            className="object-cover max-w-5 h-5"
            src={questionIconsSm[index]}
            alt={`number${index + 1}`}
          />
        </div>
        <div className="list-desc w-full flex flex-col items-start justify-start gap-2">
          <p className="font-bold">{item.question}</p>
          {item.answer}
        </div>
      </div>
    );
  });
}

// 問題列表
function QuestionsList({ title }) {
  return (
    <div className=" flex flex-col gap-1 justify-start items-start">
      <p className="h3  w-full border-b-2 border-Neutral-200">{title}</p>
      {title == "培訓費用" ? (
        <Listitem content={trainingPayment} />
      ) : (
        <Listitem content={trainingProcess} />
      )}
    </div>
  );
}

// 整個問題區塊
function Questions() {
  return (
    <section className="w-full bg-Neutral-white flex items-center justify-center">
      <div className="list w-full px-12 bg-Neutral-white flex flex-col items-center justify-center gap-12 md:max-w-214 md:gap-15">
        <QuestionsList title="培訓費用" />
        <QuestionsList title="培訓流程" />
      </div>
    </section>
  );
}

export default Questions;
