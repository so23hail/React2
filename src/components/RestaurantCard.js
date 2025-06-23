import { CDN_URL } from "../utils/constants"

const RestaurantCard =(props) =>{
    // const styleCard={
    //     backgroundColor: "#f0f0f0",
    // } style={styleCard}
    //console.log(props)
    //console.log(props.resData.info.name)
    
    
    return(
        <div data-testid="resCard" className="p-4 m-4 w-[250px] h-[450px] bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + props.resData.info.cloudinaryImageId} />
            <h3 className="font-bold py-2">{props.resData.info.name}</h3>
            <h4>{(props.resData.info.cuisines).join(", ")}</h4>
            <h4>{props.resData.info.avgRating}</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    // console.log("promoted")
    return (props)=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;