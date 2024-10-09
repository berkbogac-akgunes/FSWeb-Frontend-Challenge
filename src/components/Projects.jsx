import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"

export default function Projects() {
  const { translation } = useContext(LanguageContext)
    return(
        <>
          <section className = "px-64">
            <h2 className = "text-6xl mb-8 text-gray-800 dark:text-[#AEBCCF] font-semibold">{translation.projects}</h2>
            <div className = "flex justify-between">
              <div>
                <img className = "project-image" title = "minimalism" src = "https://github.com/berkbogac-akgunes/fsweb-s8-challenge-pizza/blob/main/Interfaces/Iteration-1/Home.png?raw=true"/>
                <h3 className = "text-3xl mb-4 font-medium text-indigo-700 dark:text-indigo-300 dark:text-gray-100">{translation.pizzaFormProjectHeading}</h3>
                <p className = "flex text-wrap text-sm w-80 mb-3">
                  {translation.pizzaFormProject}
                </p>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">react</a>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">axios</a>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">form</a>
                <div className = "flex justify-between w-88 mt-4">
                <a target="_blank" className = "border-b-2 border-indigo-800 dark:border-blue-100 dark:text-gray-200 text-base mr-5 font-medium text-indigo-800" href="https://github.com/berkbogac-akgunes/fsweb-s8-challenge-pizza">Github</a>
                <a className = "border-b-2 border-indigo-800 dark:border-blue-100 dark:text-gray-200 text-base mr-5 font-medium text-indigo-800" href="">View Site</a>
                </div>
              </div>
              <div>
                <img className = "project-image" title = "minimalism" src = "https://wallpapers.com/images/high/minimalist-best-laptop-for-coding-glt27d3cmfygaipy.webp"/>
                <h3 className = "text-3xl mb-4 font-medium text-indigo-700 dark:text-indigo-300 dark:text-gray-100">Project Name</h3>
                <p className = "flex text-wrap text-sm w-80 mb-3">
                  Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text
                  Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text
                </p>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">react</a>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">redux</a>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">axios</a>
                <div className = "flex justify-between w-88 mt-4">
                <a className = "border-b-2 border-indigo-800 dark:border-blue-100 dark:text-gray-200 text-base mr-5 font-medium text-indigo-800" href="">Github</a>
                <a className = "border-b-2 border-indigo-800 dark:border-blue-100 dark:text-gray-200 text-base mr-5 font-medium text-indigo-800" href="">View Site</a>
                </div>
              </div>
              <div>
                <img className = "project-image" title = "minimalism" src = "https://wallpapers.com/images/high/minimalist-best-laptop-for-coding-glt27d3cmfygaipy.webp"/>
                <h3 className = "text-3xl mb-4 font-medium text-indigo-700 dark:text-indigo-300 dark:text-gray-100">Project Name</h3>
                <p className = "flex text-wrap text-sm w-80 mb-3">
                  Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text
                  Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text
                </p>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">react</a>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">redux</a>
                <a className = "dark:bg-neutral-700 dark:border-indigo-300 dark:text-indigo-300 text-sm mr-5 font-medium text-indigo-800 py-1 px-3 border-solid border-1 border-indigo-800 rounded-lg" href="">axios</a>
                <div className = "flex justify-between w-88 mt-4">
                <a className = "border-b-2 border-indigo-800 dark:border-blue-100 dark:text-gray-200 text-base mr-5 font-medium text-indigo-800" href="">Github</a>
                <a className = "border-b-2 border-indigo-800 dark:border-blue-100 dark:text-gray-200 text-base mr-5 font-medium text-indigo-800" href="">View Site</a>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}