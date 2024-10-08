import { useContext } from 'react'
import '../App.css'
import { LanguageContext } from '../contexts/LanguageContext'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
    const { translation } = useContext(LanguageContext)

    return(
        <>
        <section className = "px-64 my-24">
            <div className = "flex">
                <hr className="w-32 h-px my-8 bg-blue-900 border-2 rounded dark:bg-indigo-800"/>
                <p className= "pt-3 pl-2 text-xl text-indigo-600 font-medium dark:text-indigo-200">Berk Boğaç Akgüneş</p>
            </div>
            <div className = "flex">
                <div>
                    <h1 className = "dark:text-indigo-100 text-8xl text-gray-800 font-bold flex flex-wrap w-12/12">{translation.heroHeading}</h1>
                    <p className = "mt-12 dark:text-gray-100 text-xl text-gray-600 flex flex-wrap w-10/12">{translation.heroSelf}</p>
                </div>
                <img className = "hero-image" title = "minimalism" src = "https://wallpapers.com/images/high/minimalist-best-laptop-for-coding-glt27d3cmfygaipy.webp"/>
            </div>
            <div className = "pb-4">
                <nav>
                    <a className = "dark:bg-blue-100 dark:border-blue-100 dark:text-gray-800 text-1xl mr-5 font-medium text-gray-100 py-3 px-9 border-solid border-2 bg-indigo-800 border-indigo-800 rounded-lg" href="">{translation.hireMe}</a>
                    {/*<FontAwesomeIcon className = "forBorder text-3xl absolute ml-2 pb-4" icon={faGithub} />*/}
                    <a target="_blank" className = "dark:bg-gray-700 dark:border-blue-100 dark:text-indigo-100 text-1xl mr-5 font-medium text-indigo-800 py-3 px-9 border-solid border-2 border-indigo-800 rounded-lg" href="https://github.com/berkbogac-akgunes">Github</a>
                    {/*<FontAwesomeIcon className = "text-3xl absolute ml-2" icon={faLinkedinIn} />*/}
                    <a target="_blank" className = "dark:bg-gray-700 dark:border-blue-100 dark:text-indigo-100 text-1xl font-medium text-indigo-800 py-3 px-9 border-solid border-2 border-indigo-800 rounded-lg" href="https://www.linkedin.com/in/berk-bo%C4%9Fa%C3%A7-akg%C3%BCne%C5%9F-565727331/">Linkedin</a>
                </nav>
            </div>
        </section>
        </>
    )
}