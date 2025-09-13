export default function BlockText({ title, description }) {
    return (
        <div className="font-abeezee italic pt-8">
            <h2 className="text-4xl mb-14">{title}</h2>
            <p className="text-[24px] max-w-md">{description}</p>
        </div>
    );
}