
export function ImageBlock({ title, imgSm, imgLg }) {
    return (
        <div className=" overflow-hidden">
            <picture>

                <source media="(min-width: 768px)" srcSet={imgLg} />
                <img
                    src={imgSm}
                    alt={title}
                    className="w-full aspect-332/222"
                />
            </picture>
        </div>
    );
};

export function TextBlock({ subtitle, desc }) {
    const isInline = Array.isArray(desc) && desc.some(seg => seg.bold);

    return (
        <div className="max-w-123.5">
            <h3 className="body-1 mb-2 md:mb-5">
                {subtitle}
            </h3>
            {isInline && (
                <p className="text-Neutral-600 text-[14px] md:text-[16px]">
                    {desc.map((seg, idx) => (
                        <span
                            key={idx}
                            className={seg.bold ? "emphasis" : ""}
                        >
                            {seg.text}
                        </span>
                    ))}
                </p>
            )}

            {!isInline && Array.isArray(desc) && (
                <div className="space-y-4 text-Neutral-600 text-[14px] md:text-[16px]">
                    {desc.map((seg, idx) => (
                        <p key={idx}>{seg.text}</p>
                    ))}
                </div>
            )}

            {!Array.isArray(desc) && (
                <p className="text-Neutral-600 text-[14px] md:text-[16px]">
                    {desc}
                </p>
            )}
        </div>
    );
}

function ServiceIcon({ title, iconSm, iconLg, className = "" }) {
    return (
        <picture className={`block ${className}`.trim()}>
            <source media="(min-width: 768px)" srcSet={iconLg} />
            <img src={iconSm} alt={title} className="block w-full h-full" />
        </picture>
    );
}
//
export function ServiceCard({ iconSm, iconLg, title, desc }) {
    return (
        <div className="flex gap-4 md:flex-col md:items-center md:gap-6 md:text-center">
            <div className="shrink-0 w-12 h-12 md:w-30 md:h-30">
                <ServiceIcon
                    title={title}
                    iconSm={iconSm}
                    iconLg={iconLg}
                    className="w-full h-full"
                />
            </div>
            <div className="space-y-1 md:space-y-2">
                <p className="body-3 md:body-2">{title}</p>
                <p className="text-[14px]  text-Neutral-600  whitespace-normal lg:whitespace-pre-line ">{desc}</p>
            </div>
        </div>
    );
}