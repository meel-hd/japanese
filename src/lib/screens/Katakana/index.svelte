<script lang="ts">
  import Katakana from "./Katakana.json";
  import Table from "../../components/Alphabet/Chart.svelte";
  import Writing from "../../components/Alphabet/Writing.svelte";
  import KanaControls from "../../components/Keyboard/KanaControls.svelte";
  KanaControls;
  let charIndex = 0;
  function next() {
    if (charIndex < 45) {
      charIndex++;
    } else {
      charIndex = 0;
    }
  }
  function back() {
    if (charIndex == 0) {
      charIndex = 45;
    } else {
      charIndex--;
    }
  }
  function playSound() {
    const audio = new Audio(
      "/assets/Kana/" + Katakana[charIndex].en.toLowerCase() + ".mp3"
    );
    audio.play();
    audio.remove();
  }
</script>

<main>
  <h1 id="char">{Katakana[charIndex].letter}</h1>
  <div id="example">
    <h1>
      <span style="color: var(--primary);">
        {Katakana[charIndex].example.jp[0]}
      </span>
      {Katakana[charIndex].example.jp.slice(1)}
    </h1>
    <p id="pronc">{Katakana[charIndex].example.pronunciation}</p>
    <p>{Katakana[charIndex].example.en}</p>
    <!-- <p>{Katakana[charIndex].example.ar}</p> -->
  </div>
  <div id="details">
    <h1>{Katakana[charIndex].en.toUpperCase()}</h1>
    <!-- <p id="phonetic">{Katakana[charIndex].phonetic}</p> -->
    <!-- <h2>{Katakana[charIndex].ar}</h2> -->
    <Table
      selected={charIndex}
      title={"Katakana Chart"}
      select={(id) => (charIndex = id)}
      data={Katakana}
    />
    <button
      on:click={() => {
        const audio = new Audio(
          "/assets/Kana/" + Katakana[charIndex].en.toLowerCase() + ".mp3"
        );
        audio.play();
        audio.remove();
      }}
    >
      <img alt="" src="/assets/svg/sound.svg" /></button
    >
    <Writing {next} char={Katakana[charIndex].letter} />
  </div>
  <div id="controls">
    <button on:click={back}>
      <img
        style="transform: rotate(180deg);"
        alt=""
        src="/assets/svg/arrow.svg"
      />
    </button>
    <button on:click={next}>
      <img alt="" src="/assets/svg/arrow.svg" />
    </button>
  </div>
  <KanaControls {next} {back} {playSound} />
</main>

<style>
  main {
    height: 70vh;
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  #char {
    font-size: 200px;
  }
  #example {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  #example #pronc {
    margin-left: 20px;
    margin-top: -10px;
    color: darkgrey;
    font-size: small;
  }
  #details {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #controls {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  #controls button,
  #details button {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    background-color: var(--light-primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    box-shadow: 3px 4px 3px #00000010;
  }
  #controls button img {
    width: 14px;
  }
  #details img {
    widows: 18px;
  }
</style>
