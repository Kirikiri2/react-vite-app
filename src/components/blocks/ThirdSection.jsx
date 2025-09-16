import Text from "../ui/Text";
import { ThirdSectionText } from "../ui/data"
export default function ThirdSection() {
    return (
        <div className='bg-white'>
            <div className="container pt-[250px] pb-[140px] mx-auto flex flex-col gap-6 items-center">
                <Text {...ThirdSectionText[0]} />
                <Text {...ThirdSectionText[1]} />
            </div>
        </div>
    );
};