import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const{resData} = props;
    const{cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        deliveryTime,
        avgRating} = resData?.data
    return (
        <div className='res-card' >
            <img
        src={CDN_URL
           +
          cloudinaryImageId
        }
      />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Rs.{costForTwo/2} for 2</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>
    )
}

export default RestaurantCard;