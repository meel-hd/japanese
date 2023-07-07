function autoTheme() {
  // Detect theme
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isLightMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  // Apply
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  } else if (isLightMode) {
    document.body.classList.remove("dark-mode");
  } else {
    console.log("System color scheme is not detected.");
  }
}
export default autoTheme;
