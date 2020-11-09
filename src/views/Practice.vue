<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 mx-md-auto">
        <h1>Practice</h1>
        <p>Learn your words by practicing here.</p>
      </div>
    </div>
    <!-- no words -->
    <div class="row" v-if="!words.length">
      <div class="col-12 col-md-6 mx-md-auto text-centre">
        <p>You haven't added any words to learn yet.</p>
        <b-btn variant="primary" to="/spellings">Add Words</b-btn>
      </div>
    </div>
    <!-- // end no words -->

    <template  v-if="words.length">
      <div class="row">
        <div class="col-12 col-md-5 mx-auto">
          <b-btn variant="primary" size="xl" class="ml-auto mr-2" @click="sayWord">💬 <span class="ml-3">Say the word</span></b-btn>
          <!--
          <b-btn variant="primary" size="xl" class="ml-2 mr-auto" @mousedown="showWord = true" @mouseup="showWord = false">👀 <span class="ml-3">Show the word</span></b-btn>
          <p v-if="showWord" class="text-entry">{{ words[index] }}</p>
          -->
        </div>
      </div>

      <div class="row my-3">
        <div class="col-12 col-md-11 mx-md-auto">
          <div class="d-flex flex-column justify-content-around align-items-centre border text-entry" style="height: 20vh">
            <div class="mx-auto">
              <span v-for="(letter, index) in enteredWord" :key="index" :class="wordStatus[index]">{{ letter }}</span>
            </div>
          </div>
        </div>

      </div>

      <div class="row" v-if="words.length">
        <div class="col-12 col-md-6 mx-auto p-3">
          <b-btn variant="outline-primary" size="xl" @click="checkWord" class="ml-auto mr-2">✅ <span class="ml-3">Check my spelling</span></b-btn>
          <b-btn variant="outline-primary" size="xl" @click="clearWord" class="mx-2">✏️ <span class="ml-3">Try again</span></b-btn>
          <b-btn variant="outline-primary" size="xl" @click="nextWord" class="ml-2 mr-auto">➡️ <span class="ml-3">Next word</span></b-btn>
        </div>
      </div>

    </template>

  </div>
</template>

<script>
import { mapState } from 'vuex'
const synth = window.speechSynthesis
const voices = synth.getVoices()

export default {
  name: 'Practice',
  data () {
    return {
      index: 0,
      enteredWord: [],
      wordStatus: [],
      showWord: false
    }
  },

  computed: {
    ...mapState({
      words: 'words'
    })
  },

  methods: {
    sayWord () {
      const utterThis = new SpeechSynthesisUtterance('Spell, ' + this.words[this.index])
      utterThis.voice = voices[0] // hardcode to 'Daniel' en-GB
      utterThis.rate = 0.8
      synth.speak(utterThis)
    },

    sayLetter (letter) {
      const utterThis = new SpeechSynthesisUtterance(letter)
      utterThis.voice = voices[0] // hardcode to 'Daniel' en-GB
      utterThis.rate = 0.8
      synth.speak(utterThis)
    },

    clearWord () {
      this.enteredWord = []
      this.wordStatus = []
    },
    checkWord () {
      for (let i = 0; i < this.words[this.index].length; i++) {
        const letter = this.words[this.index][i]
        if (letter === this.enteredWord[i]) {
          this.wordStatus[i] = 'text-success'
        } else {
          this.wordStatus[i] = 'text-danger'
        }
      }
      this.$forceUpdate()
    },

    nextWord () {
      if ((this.index + 1) >= this.words.length) {
        this.index = 0
      } else {
        this.index++
      }

      this.clearWord()
      this.sayWord()
    },

    keyPress (event) {
      if (event.defaultPrevented) {
        return
      }

      if (event.keyCode === 8) {
        const wordLength = this.enteredWord.length
        this.enteredWord = this.enteredWord.splice(0, (wordLength - 1))
        this.wordStatus = this.wordStatus.splice(0, (wordLength - 1))
        return
      }

      if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode === 8) {
        this.enteredWord.push(event.key)
        this.wordStatus.push('text-black')
        this.sayLetter(event.key)
      }
    }
  },

  created () {
    window.addEventListener('keyup', this.keyPress)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyPress)
  }
}
</script>

<style scoped>
.text-entry {
  font-size: 5rem;
  font-weight: 700;
}

</style>
