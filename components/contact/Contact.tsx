import clsx from "clsx";
import Iframe from "react-iframe";

const Contact = () => {
    return (
        <div className="w-full flex items-center flex-col mb-[100px]" id="contact">
            <div>
                <h1 className={clsx("md:text-[60px] md:font-bold p-5 text-[45px] font-semibold")}>Jak dojechać?</h1>
            </div>
            <div className="max-w-[1240px] flex md:flex-row justify-evenly gap-5 flex-col">
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795.3472591659777!2d18.583273452696154!3d54.337315839779535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd75c2fc30a42f%3A0xab408a8b58b12f9a!2sTrychologia%20i%20kosmetologia%20-%20Botricho!5e0!3m2!1spl!2spl!4v1689455219406!5m2!1spl!2spl"
                    className="md:w-[600px] md:h-[450px] w-[300px] h-[300px]"
                    display="block"
                    title="Nawigacja do salonu"
                />
                <div className="md:w-[500px] md:h-[500px] w-[310px] h-[310px] bg-slate-400"></div>
            </div>
        </div>
    );
};

export default Contact;
