import BlockText from "../ui/BlockText";
import { HeroSectionText } from "../ui/data";
import dino from "/dino.png";
export default function HeroSection() {
    return (
        <div className="container text-[#22356F] mx-auto mt-3 grid grid-cols-2 p-4">
            <BlockText {...HeroSectionText[0]}/>
            <img src={dino} alt="" className="justify-self-end"></img>
        </div>
    );
}