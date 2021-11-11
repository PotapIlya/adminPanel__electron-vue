<template>
  <div>
    <h4>
      Buttons
    </h4>

    <Button type="info" :disabled="true">Hello</Button>
    <Button type="danger">Hello</Button>
    <Button type="success">Hello</Button>

  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Button from "@/components/basic/button/button.vue";

    export default defineComponent({
        name: "indexDemoButtons",
        components: {
            Button
        },
        setup(): object{
            const clickButton = () : void => console.log('Click')


            return {
                clickButton,
            }
        },
    });
</script>