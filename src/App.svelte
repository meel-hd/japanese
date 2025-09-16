<script lang="ts">
  import Hiragana from "./lib/screens/Hiragana/index.svelte";
  import Katakana from "./lib/screens/Katakana/index.svelte";
  import Settings from "./lib/components/Settings/index.svelte";
  import Config from "./lib/scripts/config.svelte";
  import Tutorial from "./lib/components/Tutorial/index.svelte";
  import Toggle from "./lib/components/Keyboard/Toggle.svelte";
  import SettingsIcon from "./lib/components/Icons/Settings.svelte";
  import useLocalization from "./hooks/locales/localisation";

  let selected: "Hira" | "Kata" | "Kanji" =
    (localStorage.getItem("selected") as "Hira" | "Kata" | "Kanji") || "Hira";

  let settingsOpened = localStorage.getItem("hide-tutorial") != "yes";
  let { translate } = useLocalization();

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
      >{translate("hiragana")}</button
    >
    <button id={selected == "Kata" ? "active" : ""} on:click={selectKata}
      >{translate("katakana")}</button
    >
    <button id={selected == "Kanji" ? "active" : ""} on:click={selectKanji}
      >{translate("kanji")}</button
    >

    <button
      class="settings-btn"
      id={settingsOpened ? "active" : ""}
      on:click={toggleSettings}><SettingsIcon /></button
    >
  </header>
  {#if selected == "Hira"}
    <Hiragana />
  {:else if selected == "Kata"}
    <Katakana />
  {:else if selected == "Kanji"}
    <h1>{translate("coming-soon")}</h1>
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
    background: var(--bg);
    box-shadow: 3px 4px 3px #00000010;
  }
  #active {
    background: var(--bg);
    box-shadow: 3px 4px 3px #00000010;
  }
  .settings-btn {
    width: auto;
    aspect-ratio: 1/1;
  }

  @media (max-width: 768px) {
    header {
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
