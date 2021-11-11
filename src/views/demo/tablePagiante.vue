<template>
  <TablePaginate

    :columns="columns"
    :values="arr"
    :size="5"
  />

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import TablePaginate from "@/components/basic/table/tablePaginate.vue";

  export default defineComponent({
    name: "demoTablePaginate",
    setup() : object {
      const columns: Array<string> = [ 'age'];
      const arr: Array<Object> = [];
      for (let i = 0; i < 17; i++){
        arr.push(
          { id: i,  name: 'potap_'+i, age: i, },
        )
      }



      return {
        arr,
        columns
      }
    },
    components:{
      TablePaginate
    }
  })
</script>
