import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return(
        <>
        <div className = "dark:bg-zinc-900 bg-slate-50 h-footer">
        <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-400"></hr>
        <div>
            <h2 className = "ml-64 w-work-together pt-16 text-6xl mb-8 text-gray-800 dark:text-[#AEBCCF] font-semibold">{"Let's work together on your next product."}</h2>
        </div>
        <div className = "flex justify-between mt-24 mb-32">
            <div className = "flex">
                <FontAwesomeIcon className = "ml-64 mt-2 text-2xl" icon={faHandPointRight} />
                <p className = "dark:text-indigo-200 dark:border-indigo-200 ml-3 text-2xl w-mail border-b-2 border-red-600 text-red-600 font-semibold">berkb.akgunes@gmail.com</p>
            </div>
            <div className = "">
                <a className = "text-2xl dark:border-indigo-300 mr-5 font-medium text-grey-800 py-1 px-3" href="">Personal Blog</a>
                <a target="_blank" className = "text-2xl dark:border-indigo-300 mr-5 font-medium text-green-500 py-1 px-3" href="https://github.com/berkbogac-akgunes">Github</a>
                <a target="_blank" className = "mr-64 text-2xl dark:border-indigo-300 mr-5 font-medium text-blue-500 py-1 px-3" href="https://www.linkedin.com/in/berk-bo%C4%9Fa%C3%A7-akg%C3%BCne%C5%9F-565727331/">Linkedin</a>
            </div>
        </div>
        </div>
        </>
    )
}