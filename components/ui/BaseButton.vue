<script setup lang="ts">
import type { ButtonProps } from '~/types/props';

const props = withDefaults(defineProps<ButtonProps>(),{
    type: 'primary'
})

const dynamicClasses = computed(()=>props.type === 'secondary' ? 'bg-gradient-to-r from-[#E6F7F5] to-[#F8FCFC] transition-all duration-300 border border-[#b8cace]' : ' bg-gradient-to-r from-[#3CB9A0] to-[#1786AC]')
</script>

<template>
    <button :class="[dynamicClasses]" class="px-5 py-2.5 rounded-lg hover:from-[#36A8A0] hover:to-[#36A8A0] h-[44px] flex">
        <slot></slot>
    </button>
</template>