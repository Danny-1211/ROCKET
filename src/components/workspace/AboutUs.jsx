function AboutUs() {
    return (
        <>
            {/* 有做往上偏移與上方section重合，組合後測試 */}
            <section className="w-full bg-Primary-Violet-200 py-9 r-lg px-12  min-[1440px]:rounded-none md:px-18 md:py-15 -translate-y-4">
                <div className="md:flex md:flex-row-reverse  md:gap-6 xl:gap-24 max-w-324 mx-auto">
                    <div className="md:flex-1">
                        <p className="md:text-[20px] font-bold md:ml-1">About Us</p>
                        <h2 className="h1 mb-4 md:mb-10">共同空間簡介</h2>
                        <p className="mb-5 md:text-[20px] md:max-w-125 ">共同空間有近 100 坪的空間，在開放式的公共區域中有
                            <span className="emphasis">休憩區以及舒適沙發討論區</span>，在設計上盡量讓空間規劃簡單俐落，沒有多餘的裝修，我們營運空間的理念很簡單，希望藉由這裡能與更多「人」締結關係，並凝聚更多熱愛分享程式的進駐培訓者，讓這裡打造實現開發能量的集聚地。</p>
                    </div>
                    <div className="aspect-square border-white r-sm border-12 md:flex-1 md:aspect-636/420">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6906377524565!2d120.30563928280417!3d22.628024777974037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0491b7febacd%3A0x24542bac2726199b!2z5a-25oiQ5LiW57SA5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1766132839534!5m2!1szh-TW!2stw"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;