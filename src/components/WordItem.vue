<template>
    <div class="col-12 col-md-8 p-2">
      <div class="row">
        <div class="col-6">{{ (index + 1) }}. {{ word }}</div>
        <div class="col-2"><b-btn size="sm" variant="danger" @click="remove">X</b-btn></div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'WordItem',
  props: {
    word: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    remove () {
      if (window.confirm(`OK to remove '${this.word}' from the list?`)) {
        this.$store.dispatch('removeWord', this.word)
      }
    }
  }
}
</script>
