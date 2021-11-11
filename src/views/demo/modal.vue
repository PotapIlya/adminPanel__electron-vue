<template>
  <transition name="fade">
    <Modal
        v-if="statusModal"
        @closeModal="statusModal = false"
    >
      <Table
          :values="arr"
          :columns="columns"
      />
    </Modal>
  </transition>


  <Button @click="statusModal = !statusModal">Click me...</Button>

</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  import Modal from "@/components/basic/modal/modal.vue";
  import Button from "@/components/basic/button/button.vue";
  import Table from "@/components/basic/table/old/table.vue";

  export default defineComponent({
    name: "indexDemoModal",
    components: {
        Modal,
        Button,
        Table
    },
    setup(): object{
        const statusModal = ref<boolean>(false);


        const arr: Array<Object> = [
            { id: 1,  name: 'potap_1', name_2: 'potapdwa', job: 'worl', age: 12, },
            { id: 1,  name: 'potap_1', name_2: 'potapdwa', job: 'worl', age: 12, },
            { id: 1,  name: 'potap_1', name_2: 'potapdwa', job: 'worl', age: 12, },
            { id: 1,  name: 'potap_1', name_2: 'potapdwa', job: 'worl', age: 12, },
            { id: 1,  name: 'potap_1', name_2: 'potapdwa', job: 'worl', age: 12, },
            { id: 1,  name: 'potap_1', name_2: 'potapdwa', job: 'worl', age: 12, },
            { id: 1,  name: 'potap_1', name_2: 'potapdwa', job: 'worl', age: 12, },
        ];
        const columns: Array<string> = ['age', 'name_2', 'job'];

        return {
            statusModal,
            arr,
            columns,
        }
    }
  })
</script>