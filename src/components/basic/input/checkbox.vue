<template>
  <div>
    <ul class="list-group">

      <li v-for="(el, idx) in value" :key="idx" class="list-group-item">
        <input v-model="input"
               class="form-check-input me-1"
               :type="type"
               :value="idx"
               :id="'checkbox_' + randId + '_' + idx"
               :disabled="el[valueDisabled]"
        >
        <label
            :class="{ 'disabled' : el[valueDisabled] }"
            :for="'checkbox_' + randId + '_' + idx">
          {{ el[valueName] }}</label>
      </li>
    </ul>

    <ErrorBlock
        :error="$v.input"
    />

  </div>
</template>

<script>
  import validation from "./validation";
  import ErrorBlock from "./include/error";

  export default {
    mixins: [validation],
    components: { ErrorBlock },
      props: {
        value: {
          type: Array,
          required: true
        },
        valueName: {
          type: String,
          required: true
        },
        type: {
          required: true,
          type: String,
        },
        valueDisabled: {
          required: false,
          type: String
        }
      },
      data(){
          const randId = Math.floor(Math.random() * 10000);
          return{
              randId,
              input: []
          }
      },
      mounted() {
          console.log(
              this.input
          )
      },
      watch: {
          input(){
              this.$emit('event', this.input)
          }
      }
  }
</script>