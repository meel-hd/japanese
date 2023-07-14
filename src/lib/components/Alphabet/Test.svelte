<script lang="ts">
  import Close from "../Icons/Close.svelte";
  import Pencil from "../Icons/Pencil.svelte";
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
  export let title: string;

  // Test Props
  let testChar = randomTestChar(); // Main Kana for test
  let choices = randomTestChoices(); // 4 Ramji test choses
  let message: "Correct!" | " False!" | "" = "";

  function randomTestChar() {
    return data[Math.floor(Math.random() * 46)]; // Random Char
  }
  function randomTestChoices() {
    // Create 4 random choises
    const item1 = randomTestChar().en;
    const item2 = randomTestChar().en;
    const item3 = randomTestChar().en;
    const item4 = randomTestChar().en;
    let randChoises = [item1, item2, item3, item4];

    // Add the correct choice randomly
    randChoises[Math.floor(Math.random() * 4)] = testChar.en;

    return randChoises;
  }

  function restart() {
    testChar = randomTestChar();
    choices = randomTestChoices();
  }

  function check(choice: string) {
    if (choice == testChar.en) {
      message = "Correct!";
      restart();
    } else {
      message = " False!";
    }
    setTimeout(() => {
      message = "";
    }, 1000);
  }
</script>

<button
  id="toggle-btn"
  on:click={() => {
    opened = !opened;
  }}
>
  T
</button>
{#if opened}
  <div id="model">
    <div id="model-top">
      <h3>{title}</h3>
      <button
        on:click={() => {
          opened = !opened;
        }}
        id="close-btn"
      >
        <Close />
      </button>
    </div>
    <div id="content">
      <a on:click={restart} href="/#">skip</a>
      <p style={message == "Correct!" ? "color: lime;" : "color:orangered;"}>
        {message}
      </p>
      <h1>
        {testChar.letter}
      </h1>

      <div id="choices">
        {#each choices as choice}
          <button on:click={() => check(choice)}>
            {choice}
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}
<Toggle key="t" toggle={() => (opened = !opened)} />

<style>
  button {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    background-color: var(--light-primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #toggle-btn {
    font-weight: bold;
  }
  #toggle-btn:hover {
    box-shadow: 3px 4px 3px #00000010;
  }
  #model {
    position: absolute;
    top: -15vh;
    left: -16vw;
    width: 100vw;
    height: 100vh;
    border-radius: 20px;
    background-color: var(--light-primary);
    box-shadow: 3px 4px 3px #00000010;
    z-index: 100;
    padding: 0px 20px;
  }
  #model-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }
  #content a {
    text-decoration: none;
    color: var(--primary);
    position: absolute;
    left: 20vw;
    top: 26vh;
    font-size: small;
  }
  #content p {
    position: absolute;
    right: 20vw;
    top: 26vh;
  }
  #content h1 {
    font-size: 160px;
  }
  #choices {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  #choices button {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: 2px dashed var(--primary);
    border-top-right-radius: 20px;
    transition: all 100ms ease-in;
  }
  #choices button:hover {
    transform: scale(1.1);
  }
</style>
