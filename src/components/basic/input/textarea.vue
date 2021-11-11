<template>
  <div>
    <div class="form-floating">
      <textarea
          :disabled="disabled"
          v-model="state.input"
          class="form-control"
          :placeholder="placeholder"

          id="floatingTextarea"></textarea>
      <label for="floatingTextarea">{{ label }}</label>
    </div>


<!--    <ErrorBlock-->
<!--        :error="v$.input"-->
<!--    />-->
  </div>
</template>

<script>
  import {defineComponent, reactive} from 'vue'

  import Validation from './validation'
  import ErrorBlock from "@/components/basic/input/include/error.vue";
  export default defineComponent({
    components: {
      ErrorBlock
    },
    setup(props, context){
      const data = reactive({
        input: props.defaultValue,
      })

      if (props.rules.length){
        const { state, v$ } = Validation(data, props.rules);

        return {
          state,
          v$
        }
      }
      return {
        data,
      }
    },
    props: {
      rules: {
        type: Array,
        required: false,
        default: [],
      },
      label: {
        type: String,
        required: false,
      },
      placeholder: {
        type: String,
        required: false,
      },
      defaultValue: {
        type: String,
        required: false,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    },
  })
</script>