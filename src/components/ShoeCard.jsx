
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ShoeCard = ( {shoe} ) => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <div 
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" 
        style={{ backgroundImage: `url(${shoe.image_url})` }}
      ></div>

      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          {shoe.title}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span className="font-bold text-gray-800 dark:text-gray-200">${shoe.price}</span>
           <Link to={`/shoeDetails/${shoe?._id}`} >
           <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
            Add to cart
          </button>
           </Link>
        </div>
      </div>
    </div>
    );
};
ShoeCard.propTypes = {
    
    shoe: PropTypes.object.isRequired,
};

export default ShoeCard;