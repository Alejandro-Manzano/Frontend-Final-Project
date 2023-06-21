export const getUserAverageScore = (user) => {
    if (user.ratingsByOthers.length === 0) return 0

    const totalScore = user.ratingsByOthers.reduce((acc, curr) => acc + curr.score, 0)
    const averageScore = totalScore / user.ratingsByOthers.length
    return averageScore
}