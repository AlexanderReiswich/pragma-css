<template>

  <div>

    <div class="inline subtle-bg push-right-m push-down-m rounded-s va-top"
         :class="outer"
         v-for="(variant, key) in variants"
         :key="key">
      <div class="primary-bg white rounded-s pad-s tight-l" :class="prefix + ' ' + name + variant + suffix">
        {{ prefix ? '.' + prefix : ''}}.{{ name + variant + suffix }}
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'spacing-pull',
    props: {
      'name': String,
      'outer': String,
      'prefix': {
        type: String,
        default: ''
      },
      'suffix': {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        variants: [
          '-h',
          '-up',
          '-down',
          '-left',
          '-right'
        ]
      }
    }
  }
</script>
