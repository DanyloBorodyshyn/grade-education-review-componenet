<script lang="ts" setup>

</script>

<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              {{ $t('REVIEW') }}
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <BaseButton class="group w-full flex justify-center" @click="$emit('close')">
                <span class="group-hover:text-white">Ok</span>
              </BaseButton>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>
