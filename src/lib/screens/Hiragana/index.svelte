<script lang="ts">
  import Hiragana from "./Hiragana.json";
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
</script>

<main>
  <h1 id="char">{Hiragana[charIndex].letter}</h1>
  <div id="example">
    <h1>
      <span style="color: var(--primary);">
        {Hiragana[charIndex].example.jp[0]}
      </span>
      {Hiragana[charIndex].example.jp.slice(1)}
    </h1>
    <p id="pronc">{Hiragana[charIndex].example.pronunciation}</p>
    <p>{Hiragana[charIndex].example.en}</p>
    <p>{Hiragana[charIndex].example.ar}</p>
  </div>
  <div id="details">
    <h1>{Hiragana[charIndex].en.toUpperCase()}</h1>
    <p id="phonetic">{Hiragana[charIndex].phonetic}</p>
    <h1>{Hiragana[charIndex].ar}</h1>
  </div>
  <div id="controls">
    <button on:click={back}>
      <img style="transform: rotate(180deg);" alt="" src="/Triangle.png" />
    </button>
    <button on:click={next}>
      <img alt="" src="Triangle.png" />
    </button>
  </div>
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
  #example #pronc,
  #details #phonetic {
    margin-left: 20px;
    margin-top: -10px;
    color: darkgrey;
    font-size: small;
  }
  #details {
    position: absolute;
    top: 0;
    right: 0;
  }
  #controls {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  #controls button {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    background-color: var(--light-primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #controls button img {
    width: 14px;
  }
</style>
