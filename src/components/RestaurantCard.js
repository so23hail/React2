import { CDN_URL } from "../utils/constants"

const RestaurantCard =(props) =>{
    const styleCard={
        backgroundColor: "#f0f0f0",
    }
    // const {resData} = props
    // console.log(props.data.name)
    // const {name , cuisines } = resData?.data
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + props.resData.data.cloudinaryImageId} />
            <h3>{props.resData.data.name}</h3>
            <h4>{props.resData.data.cuisines}</h4>
            <h4>{props.resData.data.avgRating}</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;