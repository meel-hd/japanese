<script lang="ts">
  let theme = localStorage.getItem("theme") || "light"; // default: light

  function changeThemeTo(th: "light" | "dark") {
    if (th == "dark") {
      document.body.classList.add("dark-mode");
    } else if (th == "light") {
      document.body.classList.remove("dark-mode");
    }
    // Store
    localStorage.setItem("theme", th);
    theme = th;
  }
</script>

<div>
  <h3>Theme</h3>
  <div id="toggle">
    <button
      id={theme == "light" ? "active" : ""}
      on:click={() => {
        changeThemeTo("light");
      }}>Light</button
    >
    <button
      id={theme == "dark" ? "active" : ""}
      on:click={() => {
        changeThemeTo("dark");
      }}>Dark</button
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
