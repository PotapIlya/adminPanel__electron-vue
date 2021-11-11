<template>

  <div>
    <button
        class="btn"
        :class=" 'btn-' + type"
        :disabled="disabled"
    >
      <slot />
    </button>
  </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      disabled: {
        type: Boolean,
        required: false,
      },
      type: {
        type: String,
        required: false,
        default: 'info' as string,
      }
    }
  })
</script>
