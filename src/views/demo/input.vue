<template>
  <div>
    <h4>
      Inputs
    </h4>

    <TextInput
        defaultValue="defaultValue"
        label="Label"
        :rules="['required', 'minLength:10']"
    />

    <TextareaInput
        label="TextArea"
        placeholder="placeholder"
        defaultValue="defaultValue"

        :rules="['required', 'minLength:10']"
    />

<!--    <SelectInput-->
<!--        label="Select"-->
<!--        valueName="name2"-->
<!--        :rules="['numeric']"-->
<!--        :value="[-->
<!--            { name2: 'Potap_1' },-->
<!--            { name2: 'Potap_2' },-->
<!--            { name2: 'Potap_3' },-->
<!--            ]"-->
<!--    />-->

<!--    <CheckboxInput-->
<!--        valueName="name2"-->
<!--        type="checkbox"-->
<!--        valueDisabled="name23"-->
<!--        :rules="['requiredArray']"-->
<!--        :value="[-->
<!--            { name2: 'Potap_11' },-->
<!--            { name2: 'Potap_21' },-->
<!--            { name2: 'Potap_31' },-->
<!--            ]"-->
<!--    />-->

<!--    <RadioInput-->
<!--        valueName="name23"-->
<!--        :value="[-->
<!--            { name23: 'Potap_11' },-->
<!--            { name23: 'Potap_21' },-->
<!--            { name23: 'Potap_31' },-->
<!--            ]"-->
<!--    />-->

  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  // import RadioInput from "../../components/basic/input/radio";
  // import CheckboxInput from "../../components/basic/input/checkbox";
  // import SelectInput from "../../components/basic/input/select";
  import TextareaInput from "@/components/basic/input/textarea.vue";
  import TextInput from "@/components/basic/input/text.vue";

  export default defineComponent({
      name: "indexDemoInputs",
      components: {
          TextInput,
          TextareaInput,
          // SelectInput,
          // CheckboxInput,
          // RadioInput
      }
  });
</script>
