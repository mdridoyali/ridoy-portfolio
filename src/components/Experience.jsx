import Title from "./Title";

const Experience = () => {
    return (
        <div id="experience" className="mb-16">
            <Title heading={'My experience'} />
            <div   data-aos="zoom-out" className="flex lg:w-6/12 mx-auto border-b-2 border-blue-300">
                <div className="flex-1 border-r-2 border-blue-300 pr-5">
                    <p className="text-justify">
                        Although I lack prior experience in a professional setting, I have dedicated the past six months to honing my skills through practical learning and hands-on experience with Programming Hero. During this period, I have successfully completed around 30 practical projects, showcasing my commitment to continuous improvement and proficiency in programming.
                    </p>
                </div>
                <div className="flex-1 space-y-9 pl-5">
                    <div className="text-center border-2 text-white p-5 rounded-2xl transition hover:bg-cyan-500 bg-blue-500">
                        <h2 className="text-4xl font-bold " >6 Month</h2>
                        <p>Of Experience</p>
                    </div>
                    <div className="text-center border-2 text-white p-5 rounded-2xl transition hover:bg-cyan-500 bg-blue-500">
                        <h2 className="text-4xl font-bold " >30 +</h2>
                        <p>Practical Project</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;