<script lang="ts">
  import Fonts from "./Fonts.svelte";
  import Shortcuts from "./Shortcuts.svelte";
  import Tutorial from "./Tutorial.svelte";
  import Close from "../Icons/Close.svelte";
  import Theme from "./Theme.svelte";

  export let close;
</script>

<section class="themed-shadow" id="super-special-settings-id">
  <div id="settings-head">
    <h2>Settings</h2>
    <button on:click={close}><Close /> </button>
  </div>
  <div id="container">
    <Theme />
    <Fonts />
    <Tutorial />
    <Shortcuts />
  </div>
</section>

<style>
  section {
    position: absolute;
    width: 55vw;
    height: 65vh;
    background-color: var(--bg);
    border-radius: 20px;
    padding: 10px;
    overflow-y: scroll;
    z-index: 200;
  }
  #settings-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    width: 50px;
    height: 50px;
  }
  #container {
    padding-left: 30px;
  }
</style>
