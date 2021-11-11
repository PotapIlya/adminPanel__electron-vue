<template>
  <Table
      :values="arr"
      :columns="columns"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import Table from '@/components/basic/table/old/table.vue'
  export default defineComponent({
    name: "indexDemoForms",
    setup() : object{
        const arr: Array<Object> = [
            { id: 1,  name: 'potap_1', age: 12, },
            { id: 1,  name: 'potap_143', age: 124, },
            { id: 1,  name: 'potap_1543', age: 123, },
        ];
        const columns: Array<string> = ['id', 'name'];

        return {
            arr,
            columns
        }
    },
    components: {
        Table
    }
  });
</script>