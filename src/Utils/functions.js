export const getPromoted = (res) =>{
    console.log(parseInt(res?.info?.avgRating))
    return parseFloat(res?.info?.avgRating) >= 4.4;
}