<template>
  <TablePaginate
      :values="values"
      :columns="['id', 'caption', 'name']"
      :size="10"

      v-if="showTable"
  />

  <Button>
    <router-link class="nav-link active h4 m-0" to="/arm/create">Новый АРМ</router-link>
  </Button>
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import Json from '@/services/json'
  import TablePaginate from '@/components/basic/table/tablePaginate.vue'
  import Button from '@/components/basic/button/button.vue'

  export default defineComponent({
    name: 'armIndex',
    setup() : object {
        const values = reactive<Array<object>>([]);
        let showTable = ref<boolean>(false)

        // onMounted(async (): Promise<any> => {
        //     const path : string = new Json().getFileByName('settings').metaPathLocal+'\\uarm\\meta\\';
        //
        //     await new Json().getReadDir(path, ({data}) => {
        //         // console.log(data)
        //         //@ts-ignore
        //         values.push(...data)
        //         showTable.value = true
        //     })
        // })

        return {
            values,
            showTable
        }
    },
    components:{
        TablePaginate,
        Button
    },
  })
</script>
