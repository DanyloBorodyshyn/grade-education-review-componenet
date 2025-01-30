<script setup lang="ts">
import { ref, watch, computed, defineProps, defineEmits } from 'vue';

// Определяем свойства компонента с явными типами
const props = defineProps<{
  valueRating?: number;
  ratingStarClass?: string;
  defaultValue?: number;
}>();

// Определяем события компонента
const emit = defineEmits<{
  (event: 'rating', value: number): void;
}>();

// Рейтинг, управляемый компонентом
const currentRating = ref<number>(props.defaultValue ?? props.valueRating ?? 0);

// Следим за изменением `defaultValue` и обновляем `currentRating`
watch(
  () => props.defaultValue,
  (newValue) => {
    if (Number.isInteger(newValue)) {
      currentRating.value = newValue!;
    }
  }
);

// Управление наведением на звезды
const hoverRating = ref<number>(0);

// Устанавливаем рейтинг при клике
const setRating = (index: number, event: MouseEvent) => {
  if (props.valueRating) return;

  const { offsetX, target } = event;
  const targetWidth = (target as HTMLElement).clientWidth;
  const isHalf = offsetX < targetWidth / 2;

  currentRating.value = isHalf ? index - 0.5 : index;
  emit('rating', currentRating.value);
};

// Устанавливаем временный рейтинг при наведении
const setHoverRating = (index: number, event: MouseEvent) => {
  if (props.valueRating) return;

  const { offsetX, target } = event;
  const targetWidth = (target as HTMLElement).clientWidth;
  const isHalf = offsetX < targetWidth / 2;

  hoverRating.value = isHalf ? index - 0.5 : index;
};

const resetHoverRating = () => {
  hoverRating.value = 0;
};

const getStarClass = (index: number) => {
  const rating = hoverRating.value > 0 ? hoverRating.value : currentRating.value;

  if (rating >= index) return 'full';
  if (rating >= index - 0.5) return 'half';
  return 'empty';
};
</script>

<template>
  <div>
    <div class="flex space-x-[6px]">
      <div
        v-for="star in 5"
        :key="star"
        :class="[ratingStarClass, 'relative aspect-square w-[30px] h-[30px]', { 'cursor-pointer': !valueRating }]"
        @click="setRating(star, $event)"
        @mousemove="setHoverRating(star, $event)"
        @mouseleave="resetHoverRating"
      >
        <img
          src="/public/icons/star-stroke-tiny.svg"
          class="absolute top-0 left-0 w-full h-full"
          alt="Empty rating star"
        />
        <img
          v-if="getStarClass(star) !== 'empty'"
          :src="getStarClass(star) === 'full' ? '/icons/star-filled-tiny.svg' : '/icons/star-half-tiny.svg'"
          class="absolute top-0 left-0 w-full h-full"
          alt="Rating star"
        />
      </div>
    </div>
  </div>
</template>
