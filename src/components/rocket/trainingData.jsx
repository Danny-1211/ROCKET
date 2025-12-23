import trainingBg from '../../assets/imgs/bg/training-bg.png';
import frontendSm from '../../assets/imgs/about-training/frontend-sm.png';
import frontendLg from '../../assets/imgs/about-training/frontend-lg.png';
import backendSm from '../../assets/imgs/about-training/backend-sm.png';
import backendLg from '../../assets/imgs/about-training/backend-lg.png';
import UISm from '../../assets/imgs/about-training/UI-sm.png';
import UILg from '../../assets/imgs/about-training/UI-lg.png';
import Highlight from './Highlight';

const trainingData = [
    {
        id: 'frontend',
        title: '前端工程師',
        bg: trainingBg,
        imageSm: frontendSm,
        imageLg: frontendLg,
        reverse: true,
        sections: [
            {
                heading: '關於前端',
                content: (
                    <>
                        主要專精 JavaScript 前端 (65%)、後端 (35%) 開發，投入語言為 HTML、CSS、JavaScript，
                        <Highlight>適合有一些 HTML、CSS、JS 基礎的學員報名</Highlight>。
                    </>
                )
            },
            {
                heading: '應徵門檻',
                list: [
                    <>
                        會用 CSS Flexbox 排過網頁，有 RWD 響應式網頁概念，需提交 CSS 切版作品，
                        <Highlight>請在履歷上需附網頁切版作品</Highlight>，Codepen、GitHub Pages 皆可
                    </>,
                    '了解 JS 變數、陣列物件、DOM、監聽、AJAX 等知識，尚未熟練也沒關係。'
                ]
            },
            {
                heading: '你會學到',
                list: [
                    '網頁切版技能：HTML5、CSS3、SCSS、Bootstrap5、Tailwind CSS',
                    '前端開發技能：JavaScript、TypeScript、ES6、SPA、API 介接、NPM',
                    '後端開發技能：Node.js、MongoDB、Express、JWT',
                    'JS 框架：React（Hooks）、Vue 3',
                    '程式版控：Git、GitHub、Git Flow 工作流程'
                ]
            }
        ]
    },
    {
        id: 'backend',
        title: '後端工程師',
        bg: trainingBg,
        imageSm: backendSm,
        imageLg: backendLg,
        reverse: false,
        sections: [
            {
                heading: '關於後端',
                content: (
                    <>
                        後端工程師組主要專注後端開發，投入後端語言為
                        <Highlight>C#、.NET，適合無程式背景的學員報名</Highlight>。
                    </>
                )
            },
            {
                heading: '你會學到',
                list: [
                    '後端語言：C#',
                    '程式架構：ASP.NET Web Form、ASP.NET MVC、Web API',
                    '資料庫與雲端主機：MSSQL、Microsoft Azure'
                ]
            }
        ]
    },
    {
        id: 'ui',
        title: 'UI 設計師',
        bg: trainingBg,
        imageSm: UISm,
        imageLg: UILg,
        reverse: true,
        sections: [
            {
                heading: '關於設計',
                content: (
                    <>
                        主要以網頁 UI 設計 50%、網頁前端 50% 的雙技能樹養成，
                        <Highlight>適合具備視覺背景，操作過繪圖軟體尤佳</Highlight>。
                    </>
                )
            },
            {
                heading: '你會學到',
                list: [
                    '網頁前置規劃：Logic Flow、Wireframe、網格系統、使用者體驗',
                    '介面繪製流程：Figma、Mockup、Prototype、標註文件',
                    '網頁切版技能：HTML5、CSS、Bootstrap5'
                ]
            }
        ]
    }
];

export default trainingData;
