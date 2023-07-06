<script lang="ts">
  import Toggle from "../Keyboard/Toggle.svelte";

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

  const dataPartOne = data.slice(0, 35);
  const dataPartTwo = data.slice(35, 38);
  const dataPart3 = data.slice(38, 43);
  const dataPart4 = data.slice(43, 45);
  const dataPart5 = data.slice(45, 46);
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
        {#each dataPartOne as char}
          <button
            on:click={() => {
              opened = false;
              select(char.id - 1);
            }}
            class={selected == char.id - 1 ? "selected-item " : ""}
            id="item-btn"
          >
            {char.letter}
            <p>{char.en}</p>
          </button>
        {/each}
      </div>
      <div id="rest-data">
        {#each dataPartTwo as char}
          <button
            on:click={() => {
              opened = false;
              select(char.id - 1);
            }}
            class={selected == char.id - 1 ? "selected-item " : ""}
            id="item-btn"
          >
            {char.letter}
            <p>{char.en}</p>
          </button>
        {/each}
      </div>
      <div id="rest-data">
        {#each dataPart3 as char}
          <button
            on:click={() => {
              opened = false;
              select(char.id - 1);
            }}
            class={selected == char.id - 1 ? "selected-item " : ""}
            id="item-btn"
          >
            {char.letter}
            <p>{char.en}</p>
          </button>
        {/each}
      </div>

      <div id="rest-data">
        {#each dataPart4 as char}
          <button
            on:click={() => {
              opened = false;
              select(char.id - 1);
            }}
            class={selected == char.id - 1 ? "selected-item " : ""}
            id="item-btn"
          >
            {char.letter}
            <p>{char.en}</p>
          </button>
        {/each}
      </div>

      <div id="rest-data">
        {#each dataPart5 as char}
          <button
            on:click={() => {
              opened = false;
              select(char.id - 1);
            }}
            class={selected == char.id - 1 ? "selected-item " : ""}
            id="item-btn"
          >
            {char.letter}
            <p>{char.en}</p>
          </button>
        {/each}
      </div>
    </div>
  {/if}
  <Toggle key="g" toggle={() => (opened = !opened)} />
</div>

<style>
  button {
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: var(--light-primary);
    margin-bottom: 20px;
  }
  button:hover {
    box-shadow: 3px 4px 3px #00000010;
  }
  #model {
    position: absolute;
    top: 5vh;
    right: 9vw;
    width: 50vw;
    height: 60vh;
    border-radius: 20px;
    background-color: var(--light-primary);
    box-shadow: 3px 4px 3px #00000010;
    z-index: 100;
    padding: 10px 20px;
    overflow-x: scroll;
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(7, 1fr);
    justify-items: center;
    align-items: center;
    gap: 20px;
  }
  #item-btn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 20px;
    position: relative;
  }
  #item-btn:hover {
    box-shadow: none;
    background-color: white;
  }
  #item-btn p {
    position: absolute;
    right: 5px;
    bottom: -7px;
    font-size: 10px;
  }
  .selected-item {
    background-color: white;
  }
  #rest-data {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
</style>
