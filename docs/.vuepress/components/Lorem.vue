<template>

  <div>

    <slot/>

    <template v-if="parseInt(length) === 1">
      Lorem ipsum
    </template>

    <template v-if="parseInt(length) === 2">
      Lorem ipsum dolor sit amet
    </template>

    <template v-if="parseInt(length) === 3">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
    </template>

    <template v-if="parseInt(length) === 4">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </template>

    <template v-if="parseInt(length) === 5">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua.
    </template>

  </div>

</template>

<script>
  export default {
    name: 'lorem',
    props: ['length']
  }
</script>
