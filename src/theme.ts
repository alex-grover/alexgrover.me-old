export function updateThemeColor() {
  const backgroundColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--c-bg')
  document
    .querySelector('meta[name=theme-color]')
    ?.setAttribute('content', backgroundColor)
}
