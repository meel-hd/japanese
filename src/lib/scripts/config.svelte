<script lang="ts">
  import useLocalization from "../../hooks/locales/localisation";
  import autoTheme from "./autoTheme";
  import { DEFAULT_FONT } from "../components/Settings/defaults/fonts";

  // Adapt appearance in arabic
  const { lang } = useLocalization();
  if (lang == "ar") {
    const root = document.documentElement;
    // Larger font @Default: 16px
    root.style.fontSize = "17px";
  }

  // Read preconfigured font
  const font = localStorage.getItem("font") || DEFAULT_FONT;
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

  // Disable right click context menu
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
</script>
