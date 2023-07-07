<script lang="ts">
  import autoTheme from "./autoTheme";

  // Read preconfigured font
  const font = localStorage.getItem("font") || "Monospace";
  document.body.style.fontFamily = font;

  // Theme
  let theme = localStorage.getItem("theme");
  if (theme) {
    if (theme == "dark") {
      document.body.classList.add("dark-mode");
    } else if (theme == "light") {
      document.body.classList.remove("dark-mode");
    } else if (theme == "auto") {
      autoTheme();
      // Watch for future change
      setInterval(() => {
        if (localStorage.getItem("theme") == "auto") {
          autoTheme();
        }
      }, 1100);
    }
  }
</script>
