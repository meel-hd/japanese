<script lang="ts">
  import useLocalization from "../../../hooks/locales/localisation";
  import autoTheme from "../../scripts/autoTheme";

  let theme = localStorage.getItem("theme") || "auto"; // default: auto

  function changeThemeTo(th: "light" | "dark" | "auto") {
    // Store
    localStorage.setItem("theme", th);
    theme = th;
    // Change theme
    if (th == "dark") {
      document.body.classList.add("dark-mode");
    } else if (th == "light") {
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
  const { translate } = useLocalization();
</script>

<div>
  <h3>{translate("theme")}</h3>
  <div id="toggle">
    <button
      id={theme == "auto" ? "active" : ""}
      on:click={() => {
        changeThemeTo("auto");
      }}>{translate("system")}</button
    >
    <button
      id={theme == "light" ? "active" : ""}
      on:click={() => {
        changeThemeTo("light");
      }}>{translate("light")}</button
    >
    <button
      id={theme == "dark" ? "active" : ""}
      on:click={() => {
        changeThemeTo("dark");
      }}>{translate("dark")}</button
    >
  </div>
</div>

<style>
  #toggle {
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  button {
    width: 100px;
    height: 40px;
    box-shadow: none;
  }
  #active {
    background-color: var(--light-primary);
    border-radius: 999px;
  }
</style>
