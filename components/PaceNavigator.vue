<template>
  <div class="timeRanges">
    <section class="timeRangeList text-left">
      <ul class="list-reset ">
        <li v-for="n in 12" :key="n" class="mr-3">
          <NuxtLink
            :to="pace_range_path(n, 'km')"
            class="inline-block border border-blue rounded-t hover:border-grey-lighter text-blue hover:bg-grey-lighter py-1 px-6"
          >
            {{ format_range(n) }}
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
momentDurationFormatSetup(moment)

export default {
  methods: {
    pace_range_path: function(ordinal, unit) {
      return `/pace/${unit}/${this.startSeconds(ordinal)}-${this.endSeconds(
        ordinal
      )}`
    },
    format_range: function(ordinal) {
      const start = moment
        .duration(this.startSeconds(ordinal), 'seconds')
        .format('mm:ss', { trim: 'middle' })
      const end = moment
        .duration(this.endSeconds(ordinal), 'seconds')
        .format('mm:ss', { trim: 'middle' })
      return `${start}-${end}`
    },
    startSeconds: function(ordinal) {
      return ordinal * 90 - 60
    },
    endSeconds: function(ordinal) {
      return this.startSeconds(ordinal) + 120
    }
  }
}
</script>
<style>
.timeRanges ul {
  list-style-type: none;
  padding-inline-start: 0;
}
.timeRanges li {
  margin: 3px;
  display: inline-block;
}
.nuxt-link-active {
  color: config('colors.indigo-darker');
}
</style>
