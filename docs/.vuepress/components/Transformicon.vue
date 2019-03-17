<template>

  <div>

    <div class="center">
      <div class="inline primary-bg circular pad relative">
        <div class="tico-3xl tico-shadow">
          <i class="black opacity-25" :class="'tico-' + chosenIcon"><span></span></i>
        </div>
        <div class="tico-3xl relative">
          <i class="white" :class="'tico-' + chosenIcon"><span></span></i>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'transformicon',
    data: function () {
      return {
        chosenIcon: 'hamburger',
        icons: [
          'hamburger',
          'search',
          'search-alt',
          'edit',
          'close',
          'plus',
          'minus',
          'options',
          'alert',
          'info',
          'check',
          'square',
          'chevron-up',
          'chevron-right',
          'chevron-down',
          'chevron-left',
          'arrow-up',
          'arrow-right',
          'arrow-down',
          'arrow-left'
        ]
      }
    },
    created () {
      setInterval(() => {
        this.chosenIcon = this.icons[Math.floor(Math.random() * this.icons.length)]
      }, 2000)
    }
  }
</script>

<style lang="stylus">

  .tico-shadow
    position absolute
    top 25px
    left 30px
    filter blur(2px)

</style>
