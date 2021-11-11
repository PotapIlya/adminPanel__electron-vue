<template>
  <Modal
      v-if="statusModal"
      @closeModal="statusModal = false"
  >
    <template v-slot:header>
      <span>Пользовательские настройки  хранятся в app.settings.json. При ручной его правке надо перезапускать визард (F5); дефолтные настройки - в util-settings.js</span>
    </template>


    <FieldSelect
      :values="optionSelect"
      valueName="name"
      label="Проект"

      @eventFieldSelect="eventFieldSelect"
    />

    <TextField
        :default-value="state.metaPathLocal"
    />
    <button @click="open">12</button>


    <Button @click="saveRules">Сохранить настройки</Button>
  </Modal>
</template>

<script lang="ts">
  import {defineComponent, ref, watch, reactive} from 'vue';
  import Modal from "@/components/basic/modal/modal.vue";
  import FieldSelect from '@/components/basic/input/select.vue';
  import FieldFile from '@/components/basic/input/file.vue';
  import TextField from '@/components/basic/input/text.vue'

  import Button from "@/components/basic/button/button.vue";

  import option from '@/helpers/staticContent';
  // const { shell } = require('electron')

  import Json from '@/services/json'
  import { JsonCreate } from '@/types/json'

  // const electron = require('electron').remote;
  // const { shell } = require('electron')
  export default defineComponent({
    name: 'optionsIndex',
    setup(props, context): object {
      const statusModal = ref<boolean>(props.statusModal)
      watch(statusModal, () : void => context.emit('event', statusModal.value))

      const optionSelect : Array<any> = option.optionSelect;

      const state = reactive<JsonCreate>(new Json().getFileByName('settings'));

      const eventFieldSelect = (id: number) : void => {
          state.optionSelect = optionSelect[id].name
      }



      const open = async () : Promise<any> => {
          // const x =  await window['electron'].remote.dialog.showOpenDialog({
          //       title: 'Выбор папки в которой лежат файлы метаданных АРМ (arm-*.json)',
          //       defaultPath: 'E:\\PTK\\rzd\\front\\app',
          //       properties: ['openFile', 'multiSelections']
          //   });
          // console.log(x)
          return ;
      }

        console.log(state)
      const saveRules = () : void => new Json().create(state, (data) => {
          console.log(data)
      })


      return {
        statusModal,
        FieldSelect,
        optionSelect,
        eventFieldSelect,
        open,
        state,
        saveRules
      }
    },
    components:{
      Modal,
      FieldSelect,
      FieldFile,
      TextField,
      Button
    },
    props: {
      statusModal:{
        required: true,
        type: Boolean
      },
    },
  })
</script>
