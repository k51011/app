<template>
  <div class="pagination">
    <button
      v-if="! isFirstPage"
      v-on:click="$emit('previous')"
      class="button"
    >&laquo; prev</button>
    <button
      v-if="! isLastPage"
      v-on:click="$emit('next')"
      class="button"
    >next &raquo;</button>

  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    lastPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    isFirstPage () {
      return this.currentPage === 1
    },
    isLastPage () {
      return this.currentPage === this.lastPage
    }
  }
}
</script>