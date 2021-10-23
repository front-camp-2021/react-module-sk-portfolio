export const selectChangedRange = (state) => {
    return state.sliders.filter(slider => slider.min && slider.max)
}