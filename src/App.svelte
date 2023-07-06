<script lang="ts">
  import Hiragana from "./lib/screens/Hiragana/index.svelte";
  import Katakana from "./lib/screens/Katakana/index.svelte";
  import Settings from "./lib/components/Settings/index.svelte";
  import Config from "./lib/scripts/config.svelte";
  import Tutorial from "./lib/components/Tutorial/index.svelte";
  import Toggle from "./lib/components/Keyboard/Toggle.svelte";

  let selected: "Hira" | "Kata" | "Kanji" =
    (localStorage.getItem("selected") as "Hira" | "Kata" | "Kanji") || "Hira";

  let settingsOpened = false;

  function selectHira() {
    selected = "Hira";
    localStorage.setItem("selected", selected);
  }
  function selectKata() {
    selected = "Kata";
    localStorage.setItem("selected", selected);
  }
  function selectKanji() {
    selected = "Kanji";
    localStorage.setItem("selected", selected);
  }
  function toggleSettings() {
    settingsOpened = !settingsOpened;
  }
</script>

<main>
  <Config />
  <Tutorial />
  <header>
    <button id={selected == "Hira" ? "active" : ""} on:click={selectHira}
      >Hiragana</button
    >
    <button id={selected == "Kata" ? "active" : ""} on:click={selectKata}
      >Katakana</button
    >
    <button id={selected == "Kanji" ? "active" : ""} on:click={selectKanji}
      >Kanji</button
    >

    <button
      class="settings-btn"
      id={settingsOpened ? "active" : ""}
      on:click={toggleSettings}
      ><img alt="" src="/assets/svg/settings.svg" /></button
    >
  </header>
  {#if selected == "Hira"}
    <Hiragana />
  {:else if selected == "Kata"}
    <Katakana />
  {:else if selected == "Kanji"}
    <h1>Coming Soon...</h1>
  {/if}

  {#if settingsOpened}
    <Settings close={toggleSettings} />
  {/if}
  <!-- Header Keyboard shorcuts controls -->
  <Toggle toggle={selectHira} key="a" />
  <Toggle toggle={selectKata} key="s" />
  <Toggle toggle={selectKanji} key="d" />
  <Toggle toggle={toggleSettings} key="f" />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  header {
    position: absolute;
    top: 20px;
    left: 40px;
    border-radius: 999px;
    padding: 6px 10px;
    background-color: var(--light-primary);
    display: flex;
    gap: 10px;
    z-index: 100;
    font-family: serif;
  }
  button {
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 100px;
  }
  button:hover {
    background: white;
    box-shadow: 3px 4px 3px #00000010;
  }
  #active {
    background: white;
    box-shadow: 3px 4px 3px #00000010;
  }
  .settings-btn {
    width: auto;
  }
</style>
