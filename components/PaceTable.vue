<template>
  <table class="PaceTable">
    <tr class="row_header">
      <th>Pace/km</th>
      <th>Speed (km/h)</th>
      <th>Speed (mi/h)</th>
      <th>5km time</th>
      <th>10km time</th>
      <th>15km time</th>
      <th>21.0975km time</th>
      <th>42.195km time</th>
    </tr>
    <tr
      v-for="(seconds, index) in Array.from(
        { length: (end - start) / increment },
        (v, k) => k * increment + start
      )"
      :key="seconds"
      :class="alternatingRowClass(index)"
    >
      <th>{{ seconds | formatSeconds }}</th>
      <td>{{ calculateSpeed(seconds) | formatSpeed('km/h') }}</td>
      <td>{{ convertToMph(calculateSpeed(seconds)) | formatSpeed('mi/h') }}</td>
      <td>{{ calculateTimeForDistanceInKm(5, seconds) | formatTime }}</td>
      <td>{{ calculateTimeForDistanceInKm(10, seconds) | formatTime }}</td>
      <td>{{ calculateTimeForDistanceInKm(15, seconds) | formatTime }}</td>
      <td>{{ calculateTimeForDistanceInKm(21.0975, seconds) | formatTime }}</td>
      <td>{{ calculateTimeForDistanceInKm(42.195, seconds) | formatTime }}</td>
    </tr>
  </table>
</template>
<script>
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
momentDurationFormatSetup(moment)

export default {
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
    }
  },
  methods: {
    range: function(start, end, increment) {
      Array.from(
        { length: (end - start) / increment },
        (v, k) => k * increment + start
      )
    },
    calculateSpeed: function(seconds) {
      return 3600 / seconds
    },
    convertToMph: function(speed) {
      return speed * 0.621
    },
    calculateTimeForDistanceInKm: function(distanceInKm, seconds) {
      return (seconds * distanceInKm) / 60.0
    },
    alternatingRowClass: function(index) {
      return 'row_' + (index % 2)
    }
  },
  filters: {
    formatSeconds: function(seconds) {
      return moment.duration(seconds, 'seconds').format('mm:ss')
    },
    formatSpeed: function(speed, units) {
      return `${speed.toFixed(2)} ${units}`
    },
    formatTime: function(duration) {
      return `${moment.duration(duration, 'minutes').format('h:mm:ss')}`
    }
  }
}
</script>
<style type="text/css">
.PaceTable {
  display: table;
}
.row_0 {
  background_color: white;
  color: black;
}
.row_1 {
  background-color: darkblue;
  color: white;
}
.row_header {
  background-color: black;
  color: yellow;
}
</style>
