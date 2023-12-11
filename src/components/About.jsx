import img from "../assets/Ridoy.jpg"
import Title from "./Title";

const About = () => {
    return (
        <div id="about" className="h-96 my-16 text-center pt-10 bg-orange-50">
            <div className="container mx-auto">
                <Title heading={'About Me'} />
                <div className="flex items-center">
                    <p className="text-gray-700">
                        Hi, I'm Md Ridoy Ali, a passionate and creative Frontend Web Developer.
                        I enjoy turning complex problems into
                        simple, beautiful, and intuitive designs. My goal is to create
                        meaningful and user-friendly web experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;