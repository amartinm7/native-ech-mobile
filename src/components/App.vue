<template>
  <Page ref="page" class="page">
      <StackLayout>
          <WebView src="https://www.estrenoscinehoy.com/es" height="100%"/>
      </StackLayout>
  </Page>
</template>
<script >
  export default {
    data() {
      return {
        hello: "hi there!"
      }
    },
    mounted() {
      console.log("loading app Ech...")
    }
  }
</script>

<style scoped>
    ActionBar {
        text-align: center;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
