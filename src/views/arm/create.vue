<template>

  <div>
    <div class="d-flex align-items-center justify-content-between">
      <TextField
        label="ID"
      />
      <TextField
        class="w-75"
        label="Название АРМ"
      />
    </div>

    <TextField
      label="Описание АРМ"
    />
  </div>

</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, ref } from 'vue';

  import TextField from '@/components/basic/input/text.vue'
  import TextareaField from '@/components/basic/input/textarea.vue'
  import Button from '@/components/basic/button/button.vue'

  export default defineComponent({
    name: "armCreate",
    setup(props, context) : object {

        return {

        }
    },
    components: {
        TextField,
        TextareaField
    }
  })
</script>
