<template>
  <ul v-if="error.$silentErrors.length">
    <li class="input-error invalid-feedback" v-if="error.required !== undefined && !error.required.$response">
      Field is required
    </li>
    <li class="input-error invalid-feedback" v-if="error.minLength !== undefined && !error.minLength.$response">
      Name must have at least {{error.$params.minLength.min}} letters.
    </li>
    <li class="input-error invalid-feedback" v-if="error.maxLength !== undefined && !error.maxLength.$response">
      Name must have at least {{error.$params.maxLength.max}} letters.
    </li>
    <li class="input-error invalid-feedback" v-if="error.between !== undefined && !error.between.$response">
      Must be between {{error.$params.between.min}} and {{error.$params.between.max}}
    </li>
    <li class="input-error invalid-feedback" v-if="error.minValue !== undefined && !error.minValue.$response">
      minValue {{ error.$params.minValue.min }}
    </li>
    <li class="input-error invalid-feedback" v-if="error.maxValue !== undefined && !error.maxValue.$response">
      maxValue {{ error.$params.maxValue.max }}
    </li>
    <li class="input-error invalid-feedback" v-if="error.numeric !== undefined && !error.numeric.$response">
      Только числа {{ error.$params.numeric.numeric }}
    </li>
    <li class="input-error invalid-feedback" v-if="error.requiredArray !== undefined && !error.requiredArray.$response">
      Выберите что-то...
    </li>
  </ul>
</template>

<script type="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      error: {
          required: true,
          type: Object,
      }
    }
  });
</script>
