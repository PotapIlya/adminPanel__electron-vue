<template>
  <div>
    {{ currentPage+1 }}
    {{ maxPage }}
    <nav aria-label="Page navigation example">
      <ul class="pagination">

        <li v-if="currentPage" class="page-item">
          <span class="page-link" @click="prevPage(1)">1</span>
        </li>

        <li v-if="false" class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li v-if="currentPage" class="page-item">
          <span class="page-link" @click="prevPage(0)">-</span>
        </li>
        <li class="page-item active">
          <span class="page-link">{{ currentPage + 1 }}</span>
        </li>
        <li v-if="currentPage+1 !== maxPage" class="page-item">
          <span class="page-link" @click="nextPage(0)">++</span>
        </li>

        <li v-if="false" class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
        <li v-if="currentPage+1 !== maxPage" class="page-item">
          <span class="page-link" @click="nextPage(maxPage)">{{ maxPage }}</span>
        </li>
      </ul>
    </nav>

    <Table
        :values="copyValues"
        :columns="columns"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, computed, watch } from 'vue'
  import Table from "@/components/basic/table/old/table.vue";

  export default defineComponent({
    setup(props, context): object{
      const maxPage : number = Math.ceil(props.values.length / props.size);
      const currentPage = ref<number>(0);
      let copyValues : Array<any> = reactive([]);

      const nextPage = (currentNumber : number) => {
          if (currentNumber) return  currentPage.value = currentNumber-1;
          currentPage.value += 1;
      }
      const prevPage = (currentNumber : number) =>{
          if (!currentPage.value) return currentPage.value = 0;
          if (currentNumber) return  currentPage.value = currentNumber-1;

          currentPage.value -= 1;
      }

      const getNewList = () => {
          const start = currentPage.value * props.size
          const end = start + props.size;
          return props.values.slice(start, end)
      }
      const updateCopyValues = () => {
          copyValues.length = 0
          copyValues.push(...getNewList())
      }
      updateCopyValues()
      watch(currentPage, () => {
          updateCopyValues()
      })


      return {
          maxPage,
          currentPage,
          nextPage,
          prevPage,
          copyValues

      }
    },
    components: {
        Table
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