<template>
  <div>
    <router-link
        to="/demo/button"
        class="h4 m-0 px-2"
    >
      Buttons
    </router-link>
    <router-link
        to="/demo/input"
        class="h4 m-0 px-2"
    >
      Inputs
    </router-link>

    <router-link
        to="/demo/form"
        class="h4 m-0 px-2"
    >
      Table
    </router-link>

    <router-link
        to="/demo/modal"
        class="h4 m-0 px-2"
    >
      Modal
    </router-link>
    <router-link
        to="/demo/tablePaginate"
        class="h4 m-0 px-2"
    >
      tablePaginate
    </router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
      name: "demoIndex"
  });
</script>