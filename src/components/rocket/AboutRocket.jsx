function AboutRocket() {
    return (
        <>
            <section className="bg-Primary-Blue-100 w-screen r-lg px-12 py-9 flex flex-col items-center gap-6 md:px-18 md:py-15 md:flex-row md:max-w-432">
                <div className="max-w-83 w-full flex flex-col gap-4 md:max-w-132 md:gap-10">
                    <div>
                        <h2 className="body-2 font-en text-Neutral-700 font-bold">
                            About Rocket
                        </h2>
                        <h2 className="h1 text-Neutral-700">
                            什麼是火箭隊
                        </h2>
                    </div>
                    <p className="text-Neutral-700 md:text-xl">
                        火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI 設計師職缺而設。為期<span className="font-bold">七個月的免費課程</span>，學員全程參與，<span className="font-bold">僅需支付場地費</span>。
                    </p>
                    <p className="text-Neutral-700 md:text-xl">
                        火箭隊培育具備問題解決能力的專業人才，滿足企業需求。透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
                    </p>
                </div>
                <div className="max-w-83 w-full flex flex-col gap-6 md:max-w-159 md:gap-8">
                    <div className="bg-white r-lg px-5 py-4 flex flex-col gap-34">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <h3 className="h3 text-Neutral-700">
                                    前端工程師
                                </h3>
                                <p className="text-xs flex gap-2">
                                    <span className="font-en font-bold text-Primary-Blue-400 px-4 py-2 border-2 border-Primary-Blue-300 rounded-[20px]">HTML</span>
                                    <span className="font-en font-bold text-Primary-Blue-400 px-4 py-2 border-2 border-Primary-Blue-300 rounded-[20px]">CSS</span>
                                    <span className="font-en font-bold text-Primary-Blue-400 px-4 py-2 border-2 border-Primary-Blue-300 rounded-[20px]">JavaScript</span>
                                </p>
                            </div>
                            <p className="font-en font-bold text-Neutral-500 text-xl">Front-end engineer</p>
                        </div>
                        <div className="w-full h-15 bg-Neutral-200 r-sm relative flex justify-center">
                            <img className="h-40 absolute bottom-2" src="./src/assets/imgs/icon/about-rocket-frontend.svg" alt="about-rocket-frontend" />
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </section >
        </>
    );
}

export default AboutRocket;