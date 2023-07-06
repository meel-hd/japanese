<script lang="ts">
  import Fonts from "./Fonts.svelte";
  import Shortcuts from "./Shortcuts.svelte";
  import Tutorial from "./Tutorial.svelte";

  export let close;
</script>

<section id="super-special-settings-id">
  <div id="settings-head">
    <h2>Settings</h2>
    <button on:click={close}><img alt="" src="/assets/svg/close.svg" /></button>
  </div>
  <div id="container">
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
    background-color: white;
    box-shadow: 1px 1px 3px 3px #00000008;
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
  button img {
    width: 20px;
  }
  #container {
    padding-left: 30px;
  }
</style>
