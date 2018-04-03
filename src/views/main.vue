<template>

  <section>
    <h5>{{ subtitle }}</h5>

    <listing></listing>

  </section>

</template>

<script>

  import Listing from "@/components/listing.vue"

  export default {
    data() {
      return {
        subtitle: "List all organizations"
      }
    },
    components: {
      listing: Listing
    }
  }

</script>
