<template>
  <div v-if="value.length">
    <div v-for="(el, idx) in value" :key="idx" class="form-check">
      <input
          v-model="input"
          :value="idx"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          :id="'radio_' + randId + '_' + idx"
      >
      <label class="form-check-label" :for="'radio_' + randId + '_' + idx">
        {{ el[valueName]}}
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Array,
        required: true
      },
      valueName: {
        type: String,
        required: true
      }
    },
    data(){
      const randId = Math.floor(Math.random() * 10000);
      return{
          randId,
          input: []
      }
    },
    watch: {
      input(){
          console.log(this.input)
        this.$emit('event', this.input)
      }
    }
  }
</script>