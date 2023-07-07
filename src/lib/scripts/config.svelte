<script lang="ts">
  // Read preconfigured font
  const font = localStorage.getItem("font") || "Monospace";
  document.body.style.fontFamily = font;

  // Theme

  let theme = localStorage.getItem("theme");
  if (theme) {
    console.log(theme);
    if (theme == "dark") {
      document.body.classList.add("dark-mode");
    } else if (theme == "light") {
      document.body.classList.remove("dark-mode");
    }
  }
</script>
