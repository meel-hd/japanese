<script lang="ts">
  let opened = false;

  //   Props
  export let data: {
    id: number;
    letter: string;
    en: string;
    ar: string;
    phonetic: string;
    example: { jp: string; pronunciation: string; en: string; ar: string };
  }[];
  export let select: (id: number) => void;
  export let title: string;
  export let selected: number;
</script>

<div>
  <button on:click={() => (opened = !opened)} id="toggle">
    <img width="20px" alt="" src="assets/svg/dots.svg" />
  </button>
  {#if opened}
    <div id="model">
      <div id="model-top">
        <h3>{title}</h3>
        <button on:click={() => (opened = false)} id="close-btn">
          <img width="20px" alt="" src="assets/svg/close.svg" />
        </button>
      </div>
      <div id="content">
        {#each data as char}
          <button
            on:click={() => {
              opened = false;
              select(char.id - 1);
            }}
            class={selected == char.id - 1 ? "selected-item" : ""}
            id="item-btn">{char.letter}</button
          >
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  button {
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 10px;
    background-color: var(--light-primary);
  }
  button:hover {
    box-shadow: 3px 4px 3px #00000010;
  }
  #model {
    position: absolute;
    top: 20vh;
    right: 20vw;
    width: 50vw;
    height: 60vh;
    border-radius: 20px;
    background-color: var(--light-primary);
    box-shadow: 3px 4px 3px #00000010;
    z-index: 100;
    padding: 10px 20px;
  }
  #model-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #close-btn:hover {
    background-color: white;
  }
  #content {
    overflow-x: scroll;
    max-height: 53vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
    gap: 19px;
  }
  #item-btn {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: large;
  }
  #item-btn:hover {
    box-shadow: none;
    background-color: white;
  }
  .selected-item {
    background-color: white;
  }
</style>
