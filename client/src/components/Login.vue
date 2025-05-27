<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <div>
          <v-toolbar dense color="cyan">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>

          <div class="pl-3 pr-4 pt-2 pb-2">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
            ></v-text-field>
            <div class="error" v-html="error" />
            <br>
            <v-btn color="cyan" @click="login">Login</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        if(response.data.token ){
          console.log("here")
          //this.$store.dispatch('setToken', response.data.token)
          //this.$store.dispatch('setUser', response.data.user)
        }
        
        // this.$router.push({
        //   name: 'songs'
        // })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
