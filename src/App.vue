<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <v-btn color="success red">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
<div class="text-xs-center">
    <div>
      <v-btn color="primary" dark>Accept
        <v-icon dark right>check_circle</v-icon>
      </v-btn>

      <v-btn color="red" dark>Decline
        <v-icon dark right>block</v-icon>
      </v-btn>

      <v-btn dark>
        <v-icon dark left>remove_circle</v-icon>Cancel
      </v-btn>
    </div>

    <div>
      <v-btn color="orange darken-2" dark>
        <v-icon dark left>arrow_back</v-icon>Back
      </v-btn>

      <v-btn color="purple" dark>
        <v-icon dark>build</v-icon>
      </v-btn>

      <v-btn color="indigo" dark>
        <v-icon dark>backup</v-icon>
      </v-btn>
    </div>

    <div>
      <v-btn flat icon color="blue lighten-2">
        <v-icon>thumb_up</v-icon>
      </v-btn>

      <v-btn flat icon color="red lighten-2">
        <v-icon>thumb_down</v-icon>
      </v-btn>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Test avec Vuetify'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
