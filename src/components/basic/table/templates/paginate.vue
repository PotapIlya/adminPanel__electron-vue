<template>
  {{ currentPage+1 }}
  {{ maxPage }}
  <nav aria-label="Page navigation example">
    <ul class="pagination">

      <li v-if="currentPage" class="page-item">
        <span class="page-link" @click="$emit('clickEvent', false)">1</span>
      </li>

      <li v-if="false" class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li v-if="currentPage" class="page-item">
        <span class="page-link" @click="$emit('clickEvent', false, 0)">-</span>
      </li>
      <li class="page-item active">
        <span class="page-link">{{ currentPage + 1 }}</span>
      </li>
      <li v-if="currentPage+1 !== maxPage" class="page-item">
        <span class="page-link" @click="$emit('clickEvent', true, 0)">++</span>
      </li>

      <li v-if="false" class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
      <li v-if="currentPage+1 !== maxPage" class="page-item">
        <span class="page-link" @click="$emit('clickEvent', true, maxPage)">{{ maxPage }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, computed, watch } from 'vue'
  export default defineComponent({
    name: "paginate",
    setup(props, context) : object{


        return {

        }
    },
    emits: [
        'clickEvent',
    ],
    props: {
      currentPage: {
          type: Number,
          required: true
      },
      maxPage: {
          type: Number,
          required: true
      }
    }
  })
</script>