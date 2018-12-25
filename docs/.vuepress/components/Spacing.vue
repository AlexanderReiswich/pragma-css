<template>

  <div class="push-down-xl">

    <div class="border-primary border-s dashed center push-down-l rounded-s va-top"
         v-for="(variant, key) in variants"
         :key="key">
      <div class="subtle-bg rounded-s tight-l" :class="prefix + ' ' + name + variant + suffix + (pad ? ' pad-s' : '')">
        <div class="dark bold rounded-s" :class="outline ? 'light-bg-forced pad-xs' : ''">
          {{ prefix ? '.' + prefix : ''}}.{{ name + variant + suffix }}
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'spacing',
    props: {
      'name': String,
      'pad': {
        type: Boolean,
        default: false
      },
      'outline': {
        type: Boolean,
        default: false
      },
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
          '',
          '-h',
          '-v',
          '-up',
          '-down',
          '-left',
          '-right'
        ]
      }
    }
  }
</script>
