const calculateAvgRating = (reviews) => {
    if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
        return { avgRating: 0, totalRating: 0 };
      }
    const totalRating = reviews.reduce((acc,item)=> acc + item.rating,0)
    const avgRating = 
    totalRating === 0
    ? 0
    : totalRating === 1
    ? totalRating
    : (totalRating / reviews.length).toFixed(1)
    return {
        avgRating, totalRating
    }
}

export default calculateAvgRating