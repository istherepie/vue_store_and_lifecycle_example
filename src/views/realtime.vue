<template>

  <section>
    <h5>{{ subtitle }}</h5>

    <p>Updated hook being triggered on every keypress</p>
    <p>(Please see the console)</p>

    <input type="text" v-model="input">

    </textarea>

  </section>

</template>

<script>

  export default {
    data() {
      return {
        subtitle: "Test lifecycle hooks",
        input: null
      }
    },
    created() {
      console.log("Created realtime.vue: %s", Date.now())
    },
    updated() {
      console.log("Updated realtime.vue: %s", Date.now())
    }
  }

</script>
