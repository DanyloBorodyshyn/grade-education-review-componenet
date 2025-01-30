import type { ReviewsData } from "~/types/reviews"

export const getReviews = async(): Promise<ReviewsData[]> => {
    const data = await $fetch<ReviewsData[]>('https://679b6fad33d316846323d826.mockapi.io/api/v1/reviews',{
        method: 'GET'
    })

    return data
}