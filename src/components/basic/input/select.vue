<template>
  <div v-if="values.length" class="form-floating">
    <select
        v-model="input" class="form-select" id="floatingSelect">
      <option value="e" disabled selected>Выбрать</option>
      <option v-for="(el, idx) in values"
              :value="idx"
              :key="idx"
              :disabled="el[valueDisabled]"
      >
        {{ el[valueName] }}
      </option>
    </select>
    <label for="floatingSelect">{{ label }}</label>

  </div>
<!--  <div v-if="value.length" class="form-floating">-->
<!--    <select-->
<!--        :class="{ 'is-invalid' : $v.input.$invalid }"-->
<!--        v-model="input" class="form-select" id="floatingSelect" aria-label="Floating label select example">-->
<!--      <option value="e" disabled selected>Выбрать</option>-->
<!--      <option v-for="(el, idx) in value"-->
<!--              :value="idx"-->
<!--              :key="idx"-->
<!--              :disabled="el[valueDisabled]"-->
<!--      >-->
<!--        {{ el[valueName] }}-->
<!--      </option>-->
<!--    </select>-->
<!--    <label for="floatingSelect">{{ label }}</label>-->

<!--    <ErrorBlock-->
<!--        :error="$v.input"-->
<!--    />-->
<!--  </div>-->
</template>

<script lang="ts">
  import { defineComponent, ref,watch } from 'vue'
  import ErrorBlock from "@/components/basic/input/include/error.vue";

  export default defineComponent({
      name: 'fieldSelect',
      setup(props, context): object {
        const input = ref<string>('')
        watch(input, () : any => context.emit('eventFieldSelect', input.value))

        return {
          input
        }
      },
      components: {
          ErrorBlock
      },
      props: {
        label: {
          type: String,
          required: false,
        },
        values: {
          type: Array,
          required: true
        },
        valueName: {
          type: String,
          required: true
        },
        valueDisabled: {
          type: String,
          required: false
        },
      }
  })
</script>