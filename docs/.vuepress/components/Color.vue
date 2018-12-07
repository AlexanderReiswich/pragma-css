<template>

  <div class="push-v" :class="stage ? stage + '-bg rounded-m pad-m' : ''">
    <div class="push-down-s bold" :class="textClass">
      .{{ textClass }}
    </div>
    <div class="push-down-s" :class="textClass">
      <slot/>
    </div>
    <div class="block pad-m rounded-s" :class="bgClass" :ref="'color_' + textClass">
      <div class="white">
        <div class="float-right" :class="stage ? stage : ''">{{ code }}</div>
        <div :class="stage ? stage : ''">.{{ bgClass }}</div>
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
      stage: String
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
