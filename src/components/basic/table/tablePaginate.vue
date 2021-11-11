<template>
  <Paginate
    :maxPage="maxPage"
    :currentPage="currentPage"

    @clickEvent="clickEvent"
  />
  <Table
    :values="copyValues"
    :columns="columns"
  />
  <Paginate
    :maxPage="maxPage"
    :currentPage="currentPage"

    @clickEvent="clickEvent"
  />
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, computed, watch } from 'vue'
  import Table from "@/components/basic/table/templates/table.vue";
  import Paginate from "@/components/basic/table/templates/paginate.vue";


  export default defineComponent({
    setup(props, context): object{
      const maxPage : number = Math.ceil(props.values.length / props.size);
      const currentPage = ref<number>(0);
      let copyValues : Array<object> = reactive([]);

      const clickEvent = (type: boolean, currentNumber? : number) : void | number =>  {
          // true +
          // false -
          if (type){
              if (currentNumber) return  currentPage.value = currentNumber-1;
              currentPage.value += 1;
          } else {
              if (!currentPage.value) return currentPage.value = 0;
              if (currentNumber) return  currentPage.value = currentNumber-1;

              currentPage.value -= 1;
          }
      }

      const getCopyValues = () : Array<any> => {
          const start : number = currentPage.value * props.size;
          const end : number = start + props.size;
          return props.values.slice(start, end);
      }
      const updateCopyValues = () => {
          copyValues.length = 0;
          copyValues.push(...getCopyValues());
      }
      updateCopyValues()
      watch(currentPage, () => {
          updateCopyValues();
      })

      return {
          maxPage,
          currentPage,
          clickEvent,
          copyValues
      }
    },
    components: {
        Table,
        Paginate
    },
    props: {
      values: {
          type: Array,
          required: true,
      },
      columns: {
          type: Array,
          required: true,
      },
      size: {
        type: Number,
        required: true,
      },
    }
  })
</script>