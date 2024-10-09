import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"


export default function Skills() {
    const { translation } = useContext(LanguageContext)
    return(
        <>
        <section className = "px-64">
            <h2 className = "text-6xl mb-8 text-gray-800 dark:text-[#AEBCCF] font-semibold">{translation.skills}</h2>
            <div className = "skill-cards flex justify-between">
                <div className = " mr-14">
                    <h3 className = "text-3xl mb-4 font-medium text-indigo-700 dark:text-indigo-300 dark:text-gray-100">Java Script</h3>
                    <p className = "flex text-wrap text-sm">
                        {translation.javascript}
                    </p>
                </div>
                <div className = "mx-14">
                    <h3 className = "text-3xl mb-4 font-medium text-indigo-700 dark:text-indigo-300 dark:text-gray-100">React.Js</h3>
                    <p className = "flex text-wrap text-sm">
                    {translation.react}
                    </p>
                </div>
                <div className = "ml-14">
                    <h3 className = "text-3xl mb-4 font-medium text-indigo-700 dark:text-indigo-300 dark:text-gray-100">Node.Js</h3>
                    <p className = "flex text-wrap text-sm">
                    {translation.nodejs}
                    </p>
                </div>
            </div>
        </section>
        <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-400"></hr>
        </>
    )
}