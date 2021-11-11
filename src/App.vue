<template>
  <div class="container">
    <Nav />
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Nav from "@/components/templates/nav.vue";

  export default defineComponent({
    components: {
      Nav
    },
  })
</script>