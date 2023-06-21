<script lang="ts">
  import Hiragana from "./lib/screens/Hiragana/index.svelte";
  import Katakana from "./lib/screens/Katakana/index.svelte";

  let selected: "Hira" | "Kata" | "Kanji" = "Hira";

  function selectHira() {
    selected = "Hira";
  }
  function selectKata() {
    selected = "Kata";
  }
  function selectKanji() {
    selected = "Kanji";
  }
</script>

<main>
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
  </header>
  {#if selected == "Hira"}
    <Hiragana />
  {:else if selected == "Kata"}
    <Katakana />
  {:else if selected == "Kanji"}
    <h1>Coming Soon...</h1>
  {/if}
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
    padding: 6px 20px;
    background-color: var(--light-primary);
    display: flex;
    gap: 10px;
    z-index: 100;
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
</style>
