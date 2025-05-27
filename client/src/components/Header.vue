<template>
  <v-toolbar fixed color="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        TabTracker
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn text class="white--text">
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text class="white--text"
       to="login">
        Login
      </v-btn>

      <v-btn text class="white--text"
       to="register">
        Sign up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
export default {
  name: 'Header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }

}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
