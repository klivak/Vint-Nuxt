<template>
  <header class="header">
    <div class="container">
      <div class="container-row">
        <div class="column-12">
          <h1 class="header-title">{{title}}</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      title: String,
    },
    data() {
      return {}
    },
    methods: {}
  }

</script>

<style src="~/assets/css/sass/components/header.sass" lang="sass">

</style>

