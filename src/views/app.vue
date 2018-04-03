<template>

  <main>
    <h2>
      {{ this.$store.state.title }}
    </h2>

    <nav>
      <a href="#" @click="goToRoute(navigation.home)">Home</a>
      <a href="#" @click="goToRoute(navigation.add)">Add new org</a>
      <a href="#" @click="goToRoute(navigation.realtime)">Realtime update</a>
    </nav>

    <hr>

    <router-view></router-view>

  </main>

</template>

<script>

  export default {
    data() {
      return {
        navigation: {
          home: "Main",
          add: "Add",
          realtime: "Realtime"
        }
      }
    },
    methods: {
      goToRoute(route) {
        this.$router.push({
          name: route
        })
      }
    }
  }

</script>
