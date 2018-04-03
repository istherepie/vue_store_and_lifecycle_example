<template>

  <ul>
    <li v-for="org in getAll">
      {{ org.created }} - {{ org.name }}
    </li>
  </ul>

</template>

<script>

  export default {
    computed: {
      getAll() {
        return this.$store.getters.getOrganization
      }
    }
  }

</script>
