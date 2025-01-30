<script lang="ts" setup>
import { getReviews } from '~/services/reviewsService';
import type { ReviewsData } from '~/types/reviews';

const reviewsData: globalThis.Ref<ReviewsData[], ReviewsData[]> = ref([])
//@ts-ignore
const { setLocale, locale } = useI18n()

const setLocaleFunc = (l: string) => {
    setLocale(l)
}

onMounted(async () => {
    reviewsData.value = await getReviews()
})
</script>

<template>
    <div>
        <div class="flex items-center mb-5 space-x-5 p-4">
            <BaseButton @click="setLocaleFunc(item)" :type="locale !== item ? 'secondary' : 'primary'" v-for="item in LOCALES" class="group flex items-center">
                <span class="group-hover:text-white">{{ item }}</span>
            </BaseButton>
        </div>
        <div class="flex flex-col items-center space-y-5 p-4">
            <BaseReview class="w-full" v-for="review in reviewsData" :reviews_count="review.reviews_count"
                :grade="review.grade" :id="review.id" :text="review.text">
                <template #logo_text>
                    <p class="font-formular llg:text-xl xs:text-lg text-black font-medium">{{ $t('REVIEW_TEXT') }}</p>
                </template>
            </BaseReview>
        </div>
    </div>
</template>
