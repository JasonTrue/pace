<template>
  <section class="section container">
    <div>
      <PaceTool :start="start" :end="end" :increment="increment" :units="unit" />
    </div>
  </section>
</template>
<script>
import PaceTool from '~/components/PaceTool.vue'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
momentDurationFormatSetup(moment)

const kmPacePage = {
  data: function() {
    return {
      start: 240,
      end: 360,
      increment: 5,
      unit: 'km'
    }
  },
  computed: {
    title() {
      const formatTime = duration => {
        return `${moment.duration(duration, 'seconds').format('m:ss', {
          trim: false
        })}`
      }
      return `${formatTime(this.start)}-${formatTime(this.end)} Pace Table`
    }
  },
  mounted: function() {
    this.$store.commit('SET_PAGE_TITLE', this.title)
    this.$store.commit(
      'SET_PAGE_SUBTITLE',
      'Running pace in time per kilometer'
    )
  },
  filters: {},
  components: {
    PaceTool
  },
  head() {
    return {
      title: () => {
        return this.title
      }
    }
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
      unit: context.params.units || 'km'
    }
  }
}
export default kmPacePage
</script>
<style>
</style>
