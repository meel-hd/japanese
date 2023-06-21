<script lang="ts">
  // Read preconfigured font
  const font = localStorage.getItem("font") || "Monospace";
  document.body.style.fontFamily = font;
</script>
