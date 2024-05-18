

const Highlight = () => {
    return (
        <section className=" bg-transparent dark:bg-gray-900">
        <div className="relative flex">
            <div className="min-h-screen lg:w-1/3"></div>
            <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>
    
            <div
                className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                <h1 className="text-2xl font-bold text-red-500 capitalize lg:text-3xl dark:text-white">
                    Step <span className="text-blue-500">Into</span> <br/> Style
                </h1>
    
                <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                    <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="https://img.freepik.com/free-vector/flat-design-cross-country-design-logo_23-2149481837.jpg" alt=""/>
    
                    <div className="mt-8 lg:px-10 lg:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                        Everyday basics to on-trend essentials, discover styles for every occasion.
                        </h1>
    
                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                            “
                            Cross Country is a premier online shoe shop offering a wide range of high-quality footwear for all occasions. Specializing in stylish, comfortable shoes from top brands, Cross Country ensures a
                             seamless shopping experience with detailed product descriptions, competitive pricing, and excellent customer service. Discover your perfect pair and enjoy the convenience of fast, reliable delivery at Cross Country.”
                        </p>
    
                        
                    </div>
                </div>
    
            </div>
        </div>
    </section>
    );
};

export default Highlight;