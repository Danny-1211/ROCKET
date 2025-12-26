import frontend from '../../assets/imgs/about-rocket/frontend.png';
import backend from '../../assets/imgs/about-rocket/backend.png';
import UI from '../../assets/imgs/about-rocket/ui.png';

const jobCardData = [
    {
        id: 1,
        title: "前端工程師",
        tags: ["HTML", "CSS", "JavaScript"],
        img_src: frontend,
        img_alt: "Front-end engineer"
    },
    {
        id: 2,
        title: "後端工程師",
        tags: ["C#", ".NET"],
        img_src: backend,
        img_alt: "Back-end engineer"
    },
    {
        id: 3,
        title: "UI 設計師",
        tags: ["Figma", "HTML", "CSS"],
        img_src: UI,
        img_alt: "UI designer"
    }
];

export default jobCardData;