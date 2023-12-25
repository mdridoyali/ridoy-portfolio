import Title from "./Title";
import img from "../assets/brand/certificate_page-0001.jpg"

const Achievement = () => {
    return (
        <>
            <Title heading={'Achievement'} />
            <div className=" mb-16 mx-auto">
                <img className="mx-auto  md:w-8/12 lg:w-6/12 text-center" src={img} alt="" />
                <p className="mx-auto  md:w-8/12 lg:w-6/12 pl-[10px]" >Certificate from Programming Hero for completing front-end web development course successfully.</p>
            </div>
        </>
    );
};

export default Achievement;
