<script lang="ts" setup>
import type { ReviewProps } from '~/types/props';

withDefaults(defineProps<ReviewProps>(), {
    grade: 0,
    reviews_count: 0,
    id: 0,
    text: ''
})

const showModal = ref(false)

const navigateToGoogle = () => {
    navigateTo('https://www.google.com.ua/', { external: true, open: { target: '_blank' } })
}

</script>

<template>
    <div>
        <div
            class="flex xml:flex-row xs:flex-col xml:space-y-0 xs:space-y-5 items-center justify-between p-[30px] rounded-lg shadow-[0px_4px_15px_0px_rgba(0,0,0,0.05)] max-w-[1458px]">
            <div class="flex llg:items-center llg:flex-row xs:flex-col">
                <div class="flex items-center space-x-5 fs:mr-[60px] llg:mr-[50px] llg:mb-0 ml:mb-2.5 xs:mb-5">
                    <img src="/icons/google.svg" alt="google logo">
                    <slot name="logo_text"></slot>
                </div>
                <div class="flex ml:items-center ml:flex-row xs:flex-col">
                    <div class="flex items-center">
                        <h3 class="font-greenwich font-medium llg:text-4xl xs:text-2xl mr-5">{{ grade }}</h3>
                        <BaseRating :valueRating="grade" />
                    </div>
                    <p class="text-grey small__regular ml:ml-5 ml:mt-0 xs:mt-[6px]">{{ reviews_count }} {{$t('REVIEWS')}}</p>
                </div>
            </div>
            <slot name="suffix">
                <div class="flex xml:flex-row xs:flex-col items-center xml:space-x-2.5 xml:space-y-0 xs:space-y-2.5 xml:w-auto xs:w-full">
                    <BaseButton @click="showModal = true" type="secondary" class="group xml:w-auto xs:w-full xml:ml-2.5">
                        <span class="group-hover:text-white text-sm inline-block mx-auto">{{$t('VIEW')}}</span>
                    </BaseButton>
                    <BaseButton class="xml:w-auto xs:w-full" @click="navigateToGoogle" type="primary">
                        <span class="text-white text-sm inline-block mx-auto">{{$t('WRITE')}}</span>
                    </BaseButton>
                </div>
            </slot>
        </div>
        <transition name="modal">
            <BaseModal v-if="showModal" @close="showModal = false">
                <template #body>
                    <h3>{{ text }}</h3>
                </template>
            </BaseModal>
        </transition>
    </div>
</template>
