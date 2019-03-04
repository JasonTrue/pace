<template>
  <section class="container">
    <div>
      <h1 class="title">
        YuzuTen Pace
      </h1>
      <h2 class="subtitle">
        Running pace calculator and visualizations
      </h2>
      <PaceTable :start="start" :end="end" :increment="increment" />
      <div class="links">
        <a
          href="https://github.com/JasonTrue/pace"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import PaceTable from '~/components/PaceTable.vue'

const indexPage = {
  data: function() {
    return {
      increment: 5,
      start: 300,
      end: 420
    }
  },
  components: {
    PaceTable
  }
}
export default indexPage
</script>

<style lang="css">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
