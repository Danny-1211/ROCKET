import trainingBg from '../../assets/imgs/bg/training-bg.png';
import frontendSm from '../../assets/imgs/about-training/frontend-sm.png';
import frontendLg from '../../assets/imgs/about-training/frontend-lg.png';
import backendSm from '../../assets/imgs/about-training/backend-sm.png';
import backendLg from '../../assets/imgs/about-training/backend-lg.png';
import UISm from '../../assets/imgs/about-training/UI-sm.png';
import UILg from '../../assets/imgs/about-training/UI-lg.png';

function AboutTraining() {
    return (
        <>
            <section className="bg-Neutral-100">
                <div className="w-full mx-auto flex flex-col gap-20 md:max-w-269">
                    <div className="relative">
                        <h2 className="h2 text-center text-Neutral-700 absolute inset-x-0 -top-5 md:-top-7">關於培訓</h2>
                        <div className="max-w-83 w-full mt-7.5 mx-auto px-5 py-3 text-[14px] whitespace-nowrap bg-white shadow-[0_2px_4px_0_#E8E8E8] rounded-[50px] md:text-[16px] md:max-w-159 md:mt-9.5">
                            <div className="flex gap-3 overflow-x-hidden">
                                <p className="font-bold md:my-1.25">近期梯次</p>
                                <p className="border-2 border-Neutral-200"></p>
                                <p className="w-full md:my-1.25">第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="
                            w-full pt-12.5 pb-8 px-12 bg-white border-2 border-Neutral-200 relative md:pt-16 md:pb-10 md:pl-12 md:pr-20 md:r-md
                        "
                        style={{ backgroundImage: `url(${trainingBg})` }}
                    >
                        <h3 className="body-1 font-bold max-w-36.5 px-5 py-3 bg-white border-2 border-Neutral-700 shadow-[4px_4px_0_0_#363636] r-sm absolute inset-x-0 -top-8 left-12 whitespace-nowrap md:max-w-51 md:px-10 md:left-10">
                            前端工程師
                        </h3>
                        <div className="flex flex-col gap-7 md:gap-12 md:flex-row-reverse md:items-center">
                            <picture className="mx-auto block flex-none">
                                <source media="(min-width: 768px)" srcSet={frontendLg} />
                                <img src={frontendSm} alt="Frontend" />
                            </picture>
                            <div className="flex flex-col gap-8 md:gap-9">
                                <div>
                                    <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                                        關於前端
                                    </h4>
                                    <p>
                                        主要專精 JavaScript 前端 (65%)、後端 (35%)  開發，投入語言為 HTML、CSS、JavaScript，<span className="font-bold bg-[linear-gradient(transparent_calc(100%-12px),#FFEEA3_0)]">適合有一些 HTML、CSS、JS 基礎的學員報名</span>。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                                        應徵門檻
                                    </h4>
                                    <ol className="list-decimal ml-5">
                                        <li>
                                            會用 CSS Flexbox 排過網頁，有 RWD 響應式網頁概念，需提交 CSS 切版作品，<span className="font-bold bg-[linear-gradient(transparent_calc(100%-12px),#FFEEA3_0)]">請在履歷上需附網頁切版作品</span>，Codepen、GitHub Pages 皆可
                                        </li>
                                        <li>
                                            了解 JS 變數、陣列物件、DOM、監聽、AJAX 等知識，尚未熟練也沒關係。
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                                        你會學到
                                    </h4>
                                    <ol className="list-decimal ml-5">
                                        <li>
                                            網頁切版技能：HTML5、CSS3、SCSS、Bootsrap5、TailwindCSS
                                        </li>
                                        <li>
                                            前端開發技能：JavaScript、TypeScript、ES6、SPA、JS plugin 整合、API 介接、NPM
                                        </li>
                                        <li>
                                            後端開發技能：Node.js、MongoDB、heroku、express、JWT
                                        </li>
                                        <li>
                                            JS 框架：React(Hooks)、Vue3，會依照未來你想投入的公司進行調整
                                        </li>
                                        <li>
                                            程式版控：Git、GitHub、Git Flow 工作流程
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="
                            w-full pt-12.5 pb-8 px-12 bg-white border-2 border-Neutral-200 relative md:pt-16 md:pb-10 md:pl-12 md:pr-20 md:r-md
                        "
                        style={{ backgroundImage: `url(${trainingBg})` }}
                    >
                        <h3 className="body-1 font-bold max-w-36.5 px-5 py-3 bg-white border-2 border-Neutral-700 shadow-[4px_4px_0_0_#363636] r-sm absolute inset-x-0 -top-8 left-12 whitespace-nowrap md:max-w-51 md:px-10 md:left-10">
                            後端工程師
                        </h3>
                        <div className="flex flex-col gap-7 md:gap-12 md:flex-row md:items-center">
                            <picture className="mx-auto block flex-none">
                                <source media="(min-width: 768px)" srcSet={backendLg} />
                                <img className="mx-auto" src={backendSm} alt="Backend" />
                            </picture>
                            <div className="flex flex-col gap-8 md:gap-9">
                                <div>
                                    <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                                        關於後端
                                    </h4>
                                    <p>
                                        後端工程師組主要專注為後端開發，投入後端語言為 <span className="font-bold bg-[linear-gradient(transparent_calc(100%-12px),#FFEEA3_0)]">C#、.Net，適合無程式背景的學員報名</span>。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                                        你會學到
                                    </h4>
                                    <ol className="list-decimal ml-5">
                                        <li>
                                            後端語言：C#
                                        </li>
                                        <li>
                                            程式架構：ASP.NET Web Form、ASP.NET MVC、Web API
                                        </li>
                                        <li>
                                            資料庫與雲端主機：MSSQL、Microsoft Azure
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="
                            w-full pt-12.5 pb-8 px-12 bg-white border-2 border-Neutral-200 relative md:pt-16 md:pb-10 md:pl-12 md:pr-20 md:r-md
                        "
                        style={{ backgroundImage: `url(${trainingBg})` }}
                    >
                        <h3 className="body-1 font-bold max-w-36.5 px-5 py-3 bg-white border-2 border-Neutral-700 shadow-[4px_4px_0_0_#363636] r-sm absolute inset-x-0 -top-8 left-12 whitespace-nowrap md:max-w-51 md:px-10 md:left-10">
                            UI 設計師
                        </h3>
                        <div className="flex flex-col gap-7 md:gap-12 md:flex-row-reverse md:items-center">
                            <picture className="mx-auto block flex-none">
                                <source media="(min-width: 768px)" srcSet={UILg} />
                                <img className="mx-auto" src={UISm} alt="UI" />
                            </picture>
                            <div className="flex flex-col gap-8 md:gap-9">
                                <div>
                                    <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                                        關於設計
                                    </h4>
                                    <p>
                                        主要以網頁 UI 設計 50%、網頁前端 50% 的雙技能樹養成，<span className="font-bold bg-[linear-gradient(transparent_calc(100%-12px),#FFEEA3_0)]">適合具備視覺背景，操作過繪圖軟體尤佳，歡迎無工作經驗的學員報名</span>。
                                    </p>
                                </div>
                                <div>
                                    <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                                        你會學到
                                    </h4>
                                    <ol className="list-decimal ml-5">
                                        <li>
                                            網頁前置規劃：Logic Flow、Wireframe、網格系統、使用者體驗
                                        </li>
                                        <li>
                                            介面繪製流程：Figma 操作、Mockup、Prototype、標註文件
                                        </li>
                                        <li>
                                            網頁切版技能：HTML5、CSS、Bootstrap5
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default AboutTraining;