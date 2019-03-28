<template>
  <section class="section">
    <PaceTool :start="start" :end="end" :increment="increment" units="km" />
  </section>
</template>

<script>
import Page from '~/layouts/default'

import PaceTool from '~/components/PaceTool'

const indexPage = {
  data: function() {
    return {
      increment: 5,
      start: 300,
      end: 420,
      units: 'km',
      title: 'Home'
    }
  },
  mounted: function() {
    const title = 'YuzuTen Pace'
    this.$store.commit('SET_PAGE_TITLE', title)
    this.$store.commit(
      'SET_PAGE_SUBTITLE',
      'Running pace charts & visualizations'
    )
  },
  head() {
    return {
      title: () => {
        return this.$store.state.pageTitle
      }
    }
  },
  components: {
    PaceTool,
    Page
  }
}
export default indexPage
</script>
<style lang="css">
</style>
