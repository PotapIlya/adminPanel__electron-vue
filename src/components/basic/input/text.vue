<template>
    <div class="form-floating my-3">

      <input
          :placeholder="placeholder"
          :type="type"
          class="form-control"
          v-model="state.input"
          :disabled="disabled"

          id="floatingInput"
      >
<!--      :class="{ 'is-invalid' : v$.input.$invalid }"-->
      <label for="floatingInput">{{ label }}</label>

<!--      <ErrorBlock-->
<!--        :error="v$.input"-->
<!--      />-->

    </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue'

  import ErrorBlock from "@/components/basic/input/include/error.vue";
  import Validation from "@/components/basic/input/validation";

  export default defineComponent({
    components: {
        ErrorBlock
    },
    setup(props, context){
      const state = reactive({
          input: props.defaultValue,
      })
      const v$ = null;

      // if (props.rules.length){
      //   const { state, v$ } = Validation(data, props.rules);
      // }
      return {
        state,
        v$
      }

      //const input = ref<string | number>(props.defaultValue)
      // const arr = reactive([]) as Array<any>;
      // const arr : Array<any> = reactive([]);
      // const input2 : string = ref(props.defaultValue)
      // const input3 = ref(props.defaultValue) as string

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
      type: {
        type: String,
        required: false,
        default: 'text',
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    },
  })
</script>