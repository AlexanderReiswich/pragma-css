<template>

  <div class="push-v" :class="stage ? stage + ' rounded-m pad-m' : ''">
    <div class="push-down-s" :class="textClass">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
    </div>
    <div class="block pad-m rounded-s" :class="bgClass" :ref="'color_' + textClass">
      <div class="white">
        <div class="float-right" :class="{'dark-forced': darkText}">{{ code }}</div>
        <div :class="{'dark-forced': darkText}">.{{ bgClass }}</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'color',
    props: {
      bgClass: String,
      textClass: String,
      stage: String,
      darkText: Boolean
    },
    data: function () {
      return {
        code: ''
      }
    },
    methods: {
      getColor () {
        if (window) {
          if (this.$refs['color_' + this.textClass]) {
            const color = window.getComputedStyle(this.$refs['color_' + this.textClass], null)
              .getPropertyValue('background-color')
            return this.ensureRGB(color)
          }
        }
        return ''
      },
      ensureRGB (value) {
        if (value.includes('rgba')) return value
        if (value.includes('#')) return value
        return '#' + value
          .substr(4, value.indexOf(')') - 4)
          .split(',')
          .map(color => parseInt(color).toString(16))
          .join('')
      }
    },
    mounted () {
      const $this = this

      this.$nextTick(() => {
        $this.code = $this.getColor()
      })
    }
  }
</script>
