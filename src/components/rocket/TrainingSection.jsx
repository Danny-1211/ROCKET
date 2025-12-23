export default function TrainingSection({ heading, content, list }) {
    return (
        <div>
            <h4 className="body-2 font-bold border-b-4 border-Neutral-700 inline-block mb-3">
                {heading}
            </h4>

            {content && <p>{content}</p>}

            {list && (
                <ol className="list-decimal ml-5">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}
