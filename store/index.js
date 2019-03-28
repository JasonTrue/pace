export const state = () => ({
  title: 'YuzuTen Pace',
  subtitle: 'Pace visualizations'
})

export const mutations = {
  SET_PAGE_TITLE(state, title) {
    state.pageTitle = title
  },
  SET_PAGE_SUBTITLE(state, subtitle) {
    state.subtitle = subtitle
  }
}
