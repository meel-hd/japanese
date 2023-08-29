<script lang="ts">
  import Table from "../../components/Alphabet/Chart.svelte";
  import Hiragana from "./Hiragana.json";
  import Writing from "../../components/Alphabet/Writing.svelte";
  import KanaControls from "../../components/Keyboard/KanaControls.svelte";
  import Sound from "../../components/Icons/Sound.svelte";
  import Arrow from "../../components/Icons/Arrow.svelte";
  import Test from "../../components/Alphabet/Test.svelte";
  import useLocalization from "../../../hooks/locales/localisation";

  let charIndex = 0;
  const {translate, lang} = useLocalization();

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
      "/assets/Kana/" + Hiragana[charIndex].en.toLowerCase() + ".mp3"
    );
    audio.play();
    audio.remove();
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
    <p>{Hiragana[charIndex].example[lang]}</p>
  </div>
  <div id="details">
    <h1>{Hiragana[charIndex][lang]}</h1>
    <button on:click={playSound}>
      <Sound />
    </button>
    <Writing {next} char={Hiragana[charIndex].letter} />
  </div>
  <div id="controls">
    <button on:click={back}>
      <Arrow style="transform: rotate(180deg);" />
    </button>
    <button on:click={next}>
      <Arrow />
    </button>
  </div>
  <div id="right-controls">
    <Table
      selected={charIndex}
      title={translate('hiragana-chart')}
      select={(id) => (charIndex = id)}
      data={Hiragana}
    />
    <Test forSet="Hiragana" data={Hiragana} title={translate("hiragana-test")} />
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
  #right-controls {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
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
</style>
