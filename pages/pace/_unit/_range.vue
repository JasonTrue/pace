<template>
  <section class="container">
    <div>
      <h1 class="title">
        YuzuTen Pace
      </h1>
      <h2 class="subtitle">
        Running pace calculator and visualizations
      </h2>
      <PaceTool :start="start" :end="end" :increment="increment" :unit="unit" />
    </div>
  </section>
</template>
<script>
import PaceTool from '~/components/PaceTool.vue'

const kmPacePage = {
  data: function() {
    return {
      start: 240,
      end: 360,
      increment: 5,
      unit: 'km'
    }
  },
  components: {
    PaceTool
  },
  validate({ params }) {
    return params.unit === 'km' && /^\d+-\d+$/.test(params.range)
  },
  asyncData(context) {
    const range = context.params.range.split(/-/)
    return {
      start: parseInt(range[0]),
      end: parseInt(range[1]),
      stringified: Object.keys(context.params).join(','),
      unit: context.params
    }
  }
}
export default kmPacePage
</script>
<style>
</style>
