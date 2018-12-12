<template>

  <div class="align-vh space-around wrap push-v-xl">
    <i class="spinner my-custom-spinner-1"></i>
    <i class="spinner my-custom-spinner-2"></i>
    <i class="spinner my-custom-spinner-3"></i>
  </div>

</template>

<script>
  export default {
    name: 'custom-spinner'
  }
</script>

<style scoped lang="stylus">

  .spinner.my-custom-spinner-1
    width 100px
    height 100px
    border-width 16px
    border-color #00d9c1 !important
    border-top-color transparent !important

  .spinner.my-custom-spinner-2
    width 120px
    height 120px
    border-width 10px 10px  0 0
    border-color transparent !important
    border-top-color #95ea42 !important

  .spinner.my-custom-spinner-3
    width 120px
    height 120px
    border-width 2px
    border-top-color #f1486c
    border-right-color #777 !important
    border-bottom-color #ddd !important
    border-left-color #fff !important
    animation-duration 1s
    animation-timing-function linear

</style>
