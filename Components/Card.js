
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { restaurantList } from "../constants";
import { Link } from "react-router-dom";
// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
const Card = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
    
  }, []);

  // async function getRestaurant to fetch Swiggy API data
       function getRestaurants() {
    // handle the error using try... catch
    try {
      
      
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}>
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Card;











// import { restaurantList } from "../constants";
// import RestaurantCard from "./RestaurantCard";
// import { useState } from "react";



// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
//   );
//   return filterData;
// }

// // Body Component for body section: It contain all restaurant cards
// // We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
// const Card = () => {
//   // useState: To create a state variable, searchText is local state variable
//   const [searchText, setSearchText] = useState("");
//   const [restaurants, setRestaurants] = useState(restaurantList);
//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search a restaurant you want..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         ></input>
//         <button
//           className="search-btn"
//           onClick={() => {
//             // filter the data
//             const data = filterData(searchText, restaurants);
//             // update the state of restaurants list
//             setRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {restaurants.map((restaurant) => {
//           return (
//             <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Card;


