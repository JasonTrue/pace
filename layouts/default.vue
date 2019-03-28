<template>
  <div class="page">
    <div class="frame">
      <header>
        <h1 class="title text-left">
          {{ $store.state.pageTitle }}
        </h1>
        <h2 class="subtitle text-left">
          {{ $store.state.subtitle }}
        </h2>
      </header>
      <nuxt />
    </div>
    <footer>
      <div class="text-center w-full p-2">
        Copyright &copy; Jason Truesdell and YuzuTen LLC.
      </div>
      <div class="text-center w-full">
        <a
          href="https://github.com/JasonTrue/pace"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Sample `apply` at-rules with Tailwind CSS */
.frame {
  @apply min-h-screen flex flex-col justify-center items-center text-center mx-auto;
  margin: 0 auto;
}
header {
  @apply bg-white p-6 w-full;
}
footer {
  @apply flex items-center justify-between flex-wrap bg-teal p-6;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid config('colors.grey-darker');
  @apply text-grey-light;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: config('colors.grey-darker');
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 24px;
  color: config('colors.indigo-darker');
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 18px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 3px;
}

footer {
  text-align: center;
  @apply flex items-center justify-between flex-wrap bg-black text-white;
}
</style>
