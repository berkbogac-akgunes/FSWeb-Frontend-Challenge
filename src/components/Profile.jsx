export default function Profile() {
    return(
        <>
        <div className = "px-64">
        <h2 className = "text-6xl mb-10 text-gray-800 dark:text-[#AEBCCF] font-semibold">Profile</h2>
        <section className = "flex">
            <div className = "profile-container pr-28">
                <h3 className = "text-4xl mb-4 font-medium text-indigo-700 dark:text-indigo-300 dark:text-gray-100">Profile</h3>
                <section className = "info-section flex">
                    <div className = "inline-grid">
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-medium mb-2 mr-12 text-nowrap">Doğum Tarihi</p>
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-medium mb-2 mr-12 text-nowrap">İkamet Şehri</p>
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-medium mb-2 mr-12 text-nowrap">Eğitim Durumu</p>
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-medium mt-10 mr-24 text-nowrap">Tercih Ettiği Rol</p>
                    </div>
                    <div  className = "inline-grid">
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-normal mb-2 text-nowrap">05.12.1997</p>
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-normal mb-2 text-nowrap">İstanbul</p>
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-normal mb-2 text-nowrap">İstanbul Gelişim Üniversitesi</p>
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-normal mb-2 text-nowrap">Lisans, 2019</p>
                        <p className = "dark:text-gray-200 text-xl text-gray-800 font-normal text-nowrap">Frontend, UI</p>
                    </div>
                </section>
            </div>
            <div className = "aboutMe-container">
                <h3 className = "text-4xl mb-4 font-medium text-indigo-700 dark:text-indigo-300 dark:text-gray-100">About Me</h3>
                <p className = "dark:text-gray-200 text-xl text-gray-500 font-normal mb-2 flex flex-wrap w-10/12">
                    Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text
                </p>
                <p className = "dark:text-gray-200 text-xl text-gray-500 font-normal mb-2 mt-8 flex flex-wrap w-10/12">
                    Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text
                </p>
            </div>
        </section>
        <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-400"></hr>
        </div>
        </>
    )
}