<template>

  <nav class="header navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="header__logo mr-3">
        <img class="w-100" src="./../../assets/image/logo.jpg" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">



          <li class="nav-item">
            <router-link class="nav-link active h4 m-0" to="/arm">Список АРМ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active h4 m-0" to="/demo">Список страниц</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active h4 m-0" to="/demo">Утилиты</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active h4 m-0" to="/option">Options</router-link>
          </li>

<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link active h4 m-0" to="/demo">Demo</router-link>-->
<!--          </li>-->

<!--          <li class="nav-item pointer">-->
<!--            <span @click="statusModal = true" class="nav-link active h4 m-0">Options</span>-->
<!--          </li>-->

        </ul>
      </div>
    </div>
  </nav>
  <Options
      v-if="statusModal"
    :statusModal="statusModal"

    @event="offModal"
  />
</template>


<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Options from '@/components/pages/options/index.vue'
  export default defineComponent({
    setup(): object {
        const statusModal = ref<boolean>(false)

        const offModal = (status: boolean) : boolean => statusModal.value = status;

        return {
            statusModal,
            offModal
        }
    },

    components: {
        Options
    }
  })
</script>