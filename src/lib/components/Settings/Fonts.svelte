<script lang="ts">
  import useLocalization from "../../../hooks/locales/localisation";
  import Close from "../Icons/Close.svelte";
  import { DEFAULT_FONT, SUPPORTED_FONTS } from "./defaults/fonts";

  let opened = false;
  let preview = localStorage.getItem("font") || DEFAULT_FONT;
  let selected = localStorage.getItem("font") || DEFAULT_FONT;

  function setTypeface(font: string) {
    selected = font;
    document.body.style.fontFamily = font;
    localStorage.setItem("font", font);
    opened = false;
  }
  const { translate } = useLocalization();
</script>

<div>
  <h3>{translate("typeface")}</h3>
  <div id="container">
    <button
      on:click={() => {
        opened = !opened;
        preview = selected;
      }}
      id="select-btn"
    >
      {#if opened}
        <Close />
      {:else}
        {selected}
      {/if}
    </button>
    <p style="font-family: {preview};">Example</p>
  </div>
  {#if opened}
    <div id="select-box">
      {#each SUPPORTED_FONTS as font}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <button
          on:mouseover={() => {
            preview = font;
          }}
          on:click={() => setTypeface(font)}
          id="font-select">{font}</button
        >
      {/each}
    </div>
  {/if}
</div>

<style>
  #container {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  #select-btn {
    width: 180px;
    height: 40px;
    border-radius: 999px;
    background: var(--light-primary);
    font-size: 14px;
  }
  #select-box {
    width: 180px;
    border-radius: 20px;
    box-shadow: 1px 1px 3px 3px #00000008;
    padding: 5px;
  }
  #font-select {
    width: 95%;
    height: 30px;
    margin: 5px 10px;
    background-color: var(--bg);
    border-radius: 999px;
  }
  #font-select:hover {
    box-shadow: 3px 4px 3px #00000010;
  }
</style>
