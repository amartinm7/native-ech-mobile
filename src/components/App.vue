<template>
    <Page>
        <ActionBar title="Estrenos Cine Hoy"/>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
      }
    },
    mounted() {
      console.log("loading app Ech...")
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
