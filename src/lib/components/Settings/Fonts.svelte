<script lang="ts">
  import useLocalization from "../../../hooks/locales/localisation";
  import Close from "../Icons/Close.svelte";

  let opened = false;
  let preview = localStorage.getItem("font") || "Monospace";
  let selected = localStorage.getItem("font") || "Monospace";

  function setTypeface(font) {
    selected = font;
    document.body.style.fontFamily = font;
    localStorage.setItem("font", font);
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
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <button
        on:mouseover={() => {
          preview = "Monospace";
        }}
        on:click={() => setTypeface("Monospace")}
        id="font-select">Monospace</button
      >
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <button
        on:mouseover={() => {
          preview = "Georgia";
        }}
        on:click={() => setTypeface("Georgia")}
        id="font-select">Georgia</button
      >
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <button
        on:mouseover={() => {
          preview = "Verdana";
        }}
        on:click={() => setTypeface("Verdana")}
        id="font-select">Verdana</button
      >
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <button
        on:mouseover={() => {
          preview = "Perpetua";
        }}
        on:click={() => setTypeface("Perpetua")}
        id="font-select">Perpetua</button
      >
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
