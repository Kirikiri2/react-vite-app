export default function CardText({ title, color }) {
    return (
        <div
            style={{ backgroundColor: color }} className="flex flex-col justify-center items-start w-1/3 p-8">
            <div className="w-[340px] h-px bg-white/60 mb-4 mt-[60px]"></div>

            <p className="font-abeezee italic text-2xl text-white pb-[280px] whitespace-pre-line">{title}</p>
        </div>
    );
}