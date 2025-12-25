// import Q1 from "../../assets/imgs/icon/ic-no.1-lg.svg";
// import Q1_SM from "../../assets/imgs/icon/ic-no.1-sm.svg";
// import Q2 from "../../assets/imgs/icon/ic-no.2-lg.svg";
// import Q2_SM from "../../assets/imgs/icon/ic-no.2-sm.svg";
// import Q3 from "../../assets/imgs/icon/ic-no.3-lg.svg";
// import Q3_SM from "../../assets/imgs/icon/ic-no.3-sm.svg";
// import Q4 from "../../assets/imgs/icon/ic-no.4-lg.svg";
// import Q4_SM from "../../assets/imgs/icon/ic-no.4-sm.svg";
// import Q5 from "../../assets/imgs/icon/ic-no.5-lg.svg";
// import Q5_SM from "../../assets/imgs/icon/ic-no.5-sm.svg";

// // 對應 import 圖片檔名
// const questionIconsLg = [Q1, Q2, Q3, Q4, Q5];
// const questionIconsSm = [Q1_SM, Q2_SM, Q3_SM, Q4_SM, Q5_SM];

// // 重點提示標籤
// const BoldText = ({ children }) => <span className="font-bold">{children}</span>;
// // 外部連結標籤
// const ExternalLink = ({ href, children }) => (
//   <a href={href} target="_blank" rel="noreferrer" className="underline hover:text-Neutral-400">
//     {children}
//   </a>
// );

// // 培訓費用
// const trainingPayment = [
//   {
//     question: "Q：請問參加培訓需要費用嗎？",
//     answer: (
//       <span>A：不會有任何費用，僅需要場地費 ( $1,200 / Month )，其餘完全免費。</span>
//     )
//   },
//   {
//     question: "Q：你們不是直銷吧？",
//     answer: (
//       <span>A：不是，不會推銷任何東西。</span>
//     )
//   },
//   {
//     question: "Q：你們真的不是詐騙集團？台灣有其他單位做一樣的事了嗎？",
//     answer: (
//       <span>
//         A：其實在台灣已經有許多單位在做一樣的事了，但絕大部分都在中北部，例如<ExternalLink href="https://aiworks.tw/">AppWorks School</ExternalLink>、<ExternalLink href="https://www.programmer101.org/">CMoney</ExternalLink>，以及在台南的<ExternalLink href="https://www.facebook.com/GoodideasStudio/">好想工作室</ExternalLink>。一樣也是提供<BoldText>免費培訓</BoldText>。而在高雄上，我們是第一個單位舉辦此培訓營。
//       </span>
//     )
//   },
// ];
// // 培訓流程
// const trainingProcess = [
//   {
//     question: "Q：那培訓的時間是多久呢？",
//     answer: (
//       <span>
//         A：培訓時間為七個月，您可以選擇要投入前端工程師、後端工程師或 UI 設計師。
//       </span>
//     )
//   },
//   {
//     question: "Q：那如果七個月後，可以續留嗎？",
//     answer: (
//       <span>
//         A：當然可以，我們提供額外的進駐空間供您使用。在這裡，您可以與其他火箭隊夥伴保持緊密交流，分享心得，或者利用此空間接案和進行遠端工作，讓您的技能不斷精進。
//       </span>
//     )
//   },
//   {
//     question: "Q：你們和其他的培訓單位有什麼差異呢？",
//     answer: (
//       <span>
//         A：我們的培訓流程，主要是將學員培育成<BoldText>「擁有自我解決問題的工程師」</BoldText>，大部分的實體補習班都會給您一個完整課綱，您照著它走完就結束。但是不論任何工作，出社會才會發現，有很多事情都還是自己不懂的，您必須<BoldText>了解該如何找出問題癥結點，並解決問題</BoldText>。讓您有足夠的搜索與研究能力，自行打造火箭，航向您想去的星球。
//       </span>
//     )
//   },
//   {
//     question: "Q：這麼說來，你們沒有一個完整課綱？",
//     answer: (
//       <span>
//         A：是的，我們只會針對您當下的狀態，並觀察您需要什麼養分，提供給您<BoldText>「目標」</BoldText>，您再依照此目標去達成，而我們也會從您研究的過程中，觀察您還需要哪些技術，以達到其目標。舉例來說，您對 web layout 沒有從零到有的開發經驗，那教練就陪您跑過整個流程，甚至模擬自己是業主，與您討論網站建構流程。或是後端您沒有自己架過郵件伺服器，那教練就會給您建立一個最小可行性的郵件服務，以達成目標。
//       </span>
//     )
//   },
//   {
//     question: "Q：所以有很多的時間都是在自我研究技術？",
//     answer: (
//       <span>
//         A：是的，沒有錯，教練的存在是觀察您目前的狀態，並與您共同建立各階段性的目標，確保您方向沒有走歪，能順遂朝自己的方向邁進。
//       </span>
//     )
//   },
// ];

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
