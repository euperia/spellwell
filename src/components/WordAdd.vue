<template>
  <form v-on:submit.prevent="addWord">
    <div class="row my-3">
      <div class="col-1"><label for="word">Word:</label></div>
      <div class="col-7">
        <input v-model="word" type="text" class="form-control" id="word" placeholder="Enter a word">
      </div>
      <div class="col-3"><b-btn variant="primary" type="submit">Add</b-btn></div>
      </div>
  </form>
</template>

<script>

export default {
  name: 'WordAdd',
  data () {
    return {
      word: ''
    }
  },
  methods: {
    addWord () {
      this.$store.dispatch('addWord', this.word)
        .then(() => {
          this.word = ''
        })
    }
  }
}
</script>
