<template>
    <table v-if="values.length && columns.length" class="table">
      <thead>
      <tr>
        <th
            v-for="(el, idx) in columns"
            :key="idx"
            scope="col"
        >
          {{ el }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(el, idx) in values"
          :key="idx"
      >
        <th
            v-for="(column, idx) in columns"
            :key="idx"
        >
          {{ el[column] }}
        </th>
      </tr>
      </tbody>
    </table>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'

  export default defineComponent({
    setup(props, context) : object{
      const values : Array<any> = reactive(props.values);
      const columns = props.columns;

      return {
          values,
          columns
      }
    },
    props: {
      values: {
        type: Array,
        required: true,
      },
      columns: {
        type: Array,
        required: true,
      }
    }
  });
</script>