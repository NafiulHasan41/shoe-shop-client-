import { Link } from "react-router-dom";


const Hero = () => {

    return (
        <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
        <div
            className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
            <div className="lg:w-1/2">
                <div className="h-64 bg-cover lg:h-full" 
               style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/008/564/775/small/sport-shoes-banner-for-website-with-button-ui-design-illustration-vector.jpg")` }}
                ></div>
            </div>
    
            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                    Buy Your  <span className="text-blue-500"> Desired shoe</span>
                </h2>
    
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                    Our shoe are made with high quality materials and are designed to provide you with the best comfort and style.
                    If you are looking for a shoe that will make you stand out, then you have come to the right place.
                </p>
    
                <div className="inline-flex w-full mt-6 sm:w-auto">
                    <Link to="/shop" className="inline-flex items-center  justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;