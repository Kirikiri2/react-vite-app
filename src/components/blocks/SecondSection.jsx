import byke from "/byke1.png";
import BlockText from "../ui/BlockText";
import { HeroSectionText } from "../ui/data";
export default function SecondSection() {
  return (
      <div className="bg-[#62D0DF] text-[#FFFFFF] flex justify-between items-center">
          <div className=" ml-23 mr-auto">
              <BlockText {...HeroSectionText[1]} />
          </div>
      <div className="ml-auto justify-self-end object-cover">
        <img src={byke} alt="" />
      </div>
    </div>
  );
}
