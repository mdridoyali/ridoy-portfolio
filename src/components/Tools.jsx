import Title from "./Title";

import vsc from "../assets/Tools/vsc-removebg-preview.png"
import figma from "../assets/Tools/figma-removebg-preview.png"
import git from "../assets/Tools/git-removebg-preview.png"
import github from "../assets/Tools/github-removebg-preview.png"
import surge from "../assets/Tools/surge-removebg-preview.png"
import vercel from "../assets/Tools/vercel-removebg-preview (1).png"


const Tools = () => {
    return (
        <div className="mb-20 ">
            <Title heading={'Tools Used'} />
            <div   data-aos="flip-left" className="flex flex-wrap justify-center gap-5 ">
                <div className="flex items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md  -rotate-12 ">
                    <p className="font-semibold text-xl">VS Code</p>
                    <img className="w-12 h-12" src={vsc} alt="" />
                </div>
                <div className="flex items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold  text-xl">Git</p>
                    <img className="w-12 h-12" src={git} alt="" />
                </div>
                <div className="flex items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Github</p>
                    <img className="w-12 h-12" src={github} alt="" />
                </div>
                <div className="flex items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Figma</p>
                    <img className="w-12 h-12" src={figma} alt="" />
                </div>
                <div className="flex items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Surge</p>
                    <img className="w-12 h-12" src={surge} alt="" />
                </div>
                <div className="flex items-center justify-center gap-3 border-2 hover:bg-cyan-200 transition border-blue-500 w-40 p-2 rounded-md   -rotate-12 ">
                    <p className="font-semibold text-xl">Vercel</p>
                    <img className="w-12 h-12" src={vercel} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Tools;