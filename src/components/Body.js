import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const[listOfRestuarants,setlistOfRestuarants] = useState(resList);

    return (
        <div className='body'>
            <div className='filter'>
                <button 
                className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestuarants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setlistOfRestuarants(filteredList);
                }}
                
                >
                    Top Rated Restaurants

                </button>
            </div>
            <div className='res-container'>
                {listOfRestuarants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} resData={restaurant} />

                })}
                
            </div>
        </div>
    )
}

export default Body;