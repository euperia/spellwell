<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 mx-md-auto">
        <h1>Enter your spellings</h1>
        <p>Enter up to 20 spellings for us to test you on.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6 mx-md-auto">
        <word-add></word-add>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-5 mx-md-auto">
        <div class="row" v-for="(word, index) in words" :key="index">
          <word-item :word="word" :index="index"></word-item>
        </div>
        <div v-if="words.length" class="row py-5">
          <div class="col-12">
            <b-btn variant="danger" @click="clearWords">Remove All Words</b-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="words.length">
      <div class="col-12 col-md-6 mx-md-auto">
        <div class="d-flex flex-row justify-content-around align-items-centre">
          <b-btn variant="warning" size="lg" to="/practice"><span class="font-weight-bold">Practice</span></b-btn>
          <b-btn variant="success" size="lg"><span class="font-weight-bold">Test Me</span></b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordAdd from '@/components/WordAdd.vue'
import WordItem from '@/components/WordItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'Spellings.vue',
  components: {
    WordAdd,
    WordItem
  },
  computed: {
    ...mapState({
      words: 'words'
    })
  },
  methods: {
    clearWords () {
      if (window.confirm('Remove ALL words from the list?')) {
        this.$store.commit('clearWords')
      }
    }
  }
}
</script>
