export default function TrainingCard({ title, bg, imageSm, imageLg, reverse = false, children }) {
    return (
        <div
            className="
                w-full pt-12.5 pb-8 px-12 bg-white border-2 border-Neutral-200
                relative md:pt-16 md:pb-10 md:pl-12 md:pr-20 md:r-md
            "
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h3 className="body-1 font-bold max-w-36.5 px-5 py-3 bg-white border-2 border-Neutral-700 shadow-[4px_4px_0_0_#363636] r-sm absolute inset-x-0 -top-8 left-12 whitespace-nowrap md:max-w-51 md:px-10 md:left-10">
                {title}
            </h3>

            <div className={`flex flex-col gap-7 md:gap-12 md:items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <picture className="mx-auto block flex-none">
                    <source media="(min-width: 768px)" srcSet={imageLg} />
                    <img src={imageSm} alt={title} />
                </picture>

                <div className="flex flex-col gap-8 md:gap-9">
                    {children}
                </div>
            </div>
        </div>
    );
}
