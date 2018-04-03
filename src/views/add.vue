<template>
  <section>

    <h5>{{ msg }}</h5>

    <listing></listing>

    <input type="text" v-model="orgName">
    <button @click="createOrg()">Create org</button>

  </section>
</template>

<script>

  import Listing from "@/components/listing"

  export default {
    data() {
      return {
        msg: "Add more organizations",
        orgName: null
      }
    },
    components: {
      listing: Listing
    },
    methods: {
      createOrg() {

        // Create org payload
        const payload = {
          name: this.orgName
        }

        // To simulate an ajax request
        // The commit is wrapped in a 5 second timeout
        setTimeout(event => {

          // Calling the store method "addOrganization"
          this.$store.commit("addOrganization", payload)

        }, 5000)


        // Clear input field
        this.orgName = null
      }
    }
  }

</script>
