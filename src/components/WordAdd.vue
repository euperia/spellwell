<template>
  <form v-on:submit.prevent="addWord">

    <div class="form-group row">
      <label for="word" class="col-1 col-form-label col-form-label">Word:</label>
      <div class="col-8">
        <input v-model="word" type="text" class="form-control form-control" id="word" placeholder="Enter a word">
      </div>
      <div class="col-3">
        <b-btn variant="primary" type="submit">Add</b-btn>
      </div>
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
    addWord (event) {
      this.$store.dispatch('addWord', this.word)
        .then(() => {
          this.word = ''
        })
    }
  }
}
</script>
