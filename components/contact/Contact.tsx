import clsx from "clsx";

const Contact = () => {
    return (
        <div className="w-full flex items-center flex-col mb-[100px]" id="contact">
            <div>
                <h1 className={clsx("md:text-[60px] md:font-bold p-5 text-[45px] font-semibold")}>Jak dojechać?</h1>
            </div>
            <div className="max-w-[1240px] flex md:flex-row justify-evenly gap-5 flex-col">
                <div className="md:w-[500px] md:h-[500px] w-[310px] h-[310px] bg-slate-400"></div>
                <div className="md:w-[500px] md:h-[500px] w-[310px] h-[310px] bg-slate-400"></div>
            </div>
        </div>
    );
};

export default Contact;
