<script lang="ts">
  import autoTheme from "./autoTheme";

  // Read preconfigured font
  const font = localStorage.getItem("font") || "Monospace";
  document.body.style.fontFamily = font;

  // Theme
  let theme = localStorage.getItem("theme");
  if (theme == "dark") {
    document.body.classList.add("dark-mode");
  } else if (theme == "light") {
    document.body.classList.remove("dark-mode");
  } else {
    autoTheme();
    setInterval(() => {
      let updatedTheme = localStorage.getItem("theme");
      if (updatedTheme != "light" && updatedTheme != "dark") {
        autoTheme();
      }
    }, 1100);
  }
</script>
