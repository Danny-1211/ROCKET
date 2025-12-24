import TrainingIntro from './TrainingIntro';
import TrainingCard from './TrainingCard';
import TrainingSection from './TrainingSection';
import trainingData from './trainingData';
import Coaches from './Coaches';

export default function AboutTraining() {
    return (
        <section className="bg-Neutral-100 mb-22.5 md:mb-32 md:px-3">
            <div className="w-full mx-auto flex flex-col gap-20 md:max-w-269">
                <TrainingIntro />
                {trainingData.map((item) => (
                    <TrainingCard
                        key={item.id}
                        title={item.title}
                        bg={item.bg}
                        imageSm={item.imageSm}
                        imageLg={item.imageLg}
                        reverse={item.reverse}
                    >
                        {item.sections.map((section, index) => (
                            <TrainingSection
                                key={index}
                                heading={section.heading}
                                content={section.content}
                                list={section.list}
                            />
                        ))}
                    </TrainingCard>
                ))}
            </div>
            <Coaches />
        </section>
    );
}
