<template>
  <div class="" id="PaceTool">
    <PaceNavigator />
    <PaceTable :start="start" :end="end" :increment="increment" :units="units"/>
    <div>
      <div>All times listed in hours:minutes:seconds.</div>
      <div>Half-marathon and Full-marathon times use the "official" distances of 21.0975 km/42.195km</div>
    </div>
  </div>
</template>
<script>
import PaceNavigator from '~/components/PaceNavigator'
import PaceTable from '~/components/PaceTable'

export default {
  components: {
    PaceNavigator,
    PaceTable
  },
  props: {
    start: {
      type: [Number, String],
      default: 0,
      validator: value => !isNaN(value - parseInt(value))
    },
    end: {
      type: [Number, String],
      default: 0,
      validator: value => !isNaN(value - parseInt(value))
    },
    increment: {
      type: [Number, String],
      default: 0,
      validator: value => !isNaN(value - parseInt(value))
    },
    units: {
      type: [String],
      default: 'km'
    }
  }
}
</script>
<style>
</style>
