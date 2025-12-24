import TrainingBatch from './TrainingBatch';

export default function TrainingIntro() {
    return (
        <div className="relative">
            <h2 className="h2 text-center absolute inset-x-0 -top-5 md:-top-7">
                關於培訓
            </h2>

            <div className="max-w-83 w-full mt-7.5 mx-auto px-5 py-3 text-[14px] whitespace-nowrap bg-white shadow-[0_2px_4px_0_#E8E8E8] rounded-[50px] md:text-[16px] md:max-w-159 md:mt-9.5">
                <div className="flex gap-3 overflow-x-hidden">
                    <div className="font-bold md:my-1.25">近期梯次</div>
                    <div className="border-2 border-Neutral-200"></div>
                    <div className="w-full md:my-1.25">
                        <TrainingBatch />
                    </div>
                </div>
            </div>
        </div>
    );
}
