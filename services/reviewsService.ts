import type { ReviewsData } from "~/types/reviews"

export const getReviews = async(): Promise<ReviewsData[]> => {
    const data = await $fetch<ReviewsData[]>(import.meta.env.VITE_REVIEWS_API,{
        method: 'GET'
    })

    return data
}