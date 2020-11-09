<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 mx-md-auto">
        <h1>SpellWell: the fun way to learn spelling</h1>
        <p><strong>Here's how it works:</strong></p>
        <ol>
          <li>Enter your name</li>
          <li>Enter the words you want to spell</li>
          <li>Practice your spellings or take a test.</li>
        </ol>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6 mx-md-auto">
        <name></name>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Name from '@/components/Name.vue'

export default {
  components: {
    Name
  },
  name: 'Home'
}
</script>
