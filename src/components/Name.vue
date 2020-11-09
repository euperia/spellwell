<template>
  <div class="form-group">
    <label for="name"><h2>Enter your name</h2></label>
    <input type="text" name="name" id="name" class="form-control my-3" :value="name" @input="updateName">
    <router-link to="/spellings" class="btn btn-primary">Next</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Name',
  computed: {
    ...mapState({
      name: 'name'
    })
  },
  methods: {
    updateName (e) {
      this.$store.commit('updateName', e.target.value)
    }
  }
}
</script>
