<script lang="ts">
  import Toggle from "../Keyboard/Toggle.svelte";

  let step = 1;
  let visible = localStorage.getItem("hide-tutorial") != "yes";
  let hideCheckbox = false;
  let progress = 20;

  const numberOfSteps = 5;

  function next() {
    if (step < numberOfSteps) {
      step++;
    } else {
      step = 1;
    }
    progress += 100 / numberOfSteps;
    scrollTop();
  }

  function back() {
    if (step > 1) {
      step--;
    } else {
      step = numberOfSteps;
    }
    progress -= 100 / numberOfSteps;
    scrollTop();
  }

  function scrollTop() {
    const element = document.getElementById("tutorial-model");
    element.scrollTop = 0;
  }
  function done() {
    if (hideCheckbox) {
      localStorage.setItem("hide-tutorial", "yes");
    }
    visible = false;
    step = 1;
    progress = 20;
  }
</script>

{#if visible}
  <main id="tutorial-model" class="themed-shadow">
    <div style="width: {progress}%" id="progress">{" "}</div>
    {#if step == 1}
      <div id="head">
        <h2>{" "}</h2>
      </div>
    {/if}
    <div id="content">
      {#if step == 1}
        <h2>Tutorial</h2>
        <p>
          Japanese uses <span id="highlighted">3</span> different character
          sets. The first two, <span id="highlighted">Hiragana</span> and
          <span id="highlighted">Katakana</span>, represent sounds like the
          alphabet. The third set of characters,
          <span id="highlighted">Kanji</span>, represents words. They are all
          used in the Japanese language.
        </p>
      {/if}
      {#if step == 2}
        <h2>Hiragana</h2>
        <p>
          It is a phonetic script consisting of <span id="highlighted">46</span>
          characters that represent syllables. Each character represents a specific
          sound, either a vowel or a consonant-vowel combination.
        </p>
        <p>
          <span id="highlighted">Hiragana</span> is primarily used for
          <span id="highlighted">native Japanese words</span>, grammatical
          elements, verb conjugations, and word endings. It is the first script
          taught to Japanese children and is widely used in everyday writing,
          especially for informal and conversational purposes.
        </p>
      {/if}
      {#if step == 3}
        <h2>Katakana</h2>
        <p>
          <span id="highlighted">Similar to Hiragana</span>, Katakana consists
          of 46 characters. Each character represents a syllable or sound,
          allowing the representation of
          <span id="highlighted">foreign words</span>, borrowed words,
          scientific terms, onomatopoeia, and emphasis on certain words or
          phrases.
        </p>
        <p>
          This script is commonly used for transliterating non-Japanese words
          into Japanese. It is also used for writing words of foreign origin,
          including names of people, places, and objects from other languages.
        </p>
        <p>
          By being familiar with both Hiragana and Katakana, one can have a <span
            id="highlighted">good</span
          >
          foundation in <span id="highlighted">reading</span> and
          <span id="highlighted">writing</span> in Japanese.
        </p>
      {/if}
      {#if step == 4}
        <h2>Kanji</h2>
        <p>
          <span id="highlighted">Unlike</span> Hiragana and Katakana, Kanji
          consists of <span id="highlighted">thousands</span>
          of characters that represent
          <span id="highlighted">words or ideas</span>. Each character
          represents a morpheme, which is a meaningful unit that conveys a
          specific concept or meaning.
        </p>
        <p>
          Kanji characters were derived from <span id="highlighted"
            >Chinese</span
          >
          characters and were adopted into the Japanese writing system. They are
          logographic characters, meaning that each character represents a whole
          word or concept rather than phonetic sounds.
        </p>
        <p>
          The number of Kanji characters in existence is <span id="highlighted"
            >vast</span
          >, but the government of Japan has established a set of commonly used
          Kanji known as the <span id="highlighted">"Jōyō Kanji."</span> This
          set includes approximately <span id="highlighted">2,136</span> characters
          considered essential for everyday reading and writing.
        </p>
        <p>
          Learning Kanji is a significant part of mastering the Japanese
          language, as it provides a deeper understanding of Japanese vocabulary
          and culture.
        </p>
      {/if}
      {#if step == 5}
        <h2>The Process 🚀</h2>
        <p>
          <span id="highlighted"> Step 1 <br /></span>
          Learn the alphabet and pronunciation. Hiragana and Katakana they cover
          all the sounds. you can actually write Japanese entirely in Kana:Hiragana
          + Katakana.
        </p>
        <p>
          <span id="highlighted"> Step 2 <br /></span>
          Learn basic vocabulary and grammar. By going through kanji covering all
          words you need for daily conversation and simple vocabulary.
        </p>
        <p>
          <span id="highlighted"> Step 3<br /></span>
          comprehensible input: Reading textbooks and using apps isn't enough to
          be fleunt in Japanese. Watching netflix, reading Manga, or listening to
          podcasts can actually improve your skills.
        </p>
      {/if}
      {#if step == numberOfSteps}
        <div id="final-check">
          <input
            id="cje"
            type="checkbox"
            on:change={(e) => {
              // @ts-ignore
              hideCheckbox = e.target.checked;
            }}
            checked={hideCheckbox}
          />
          <label for="cje"> Don't show again!</label>
        </div>
      {/if}

      <div id="bottom">
        {#if step != 1}
          <button id="back" on:click={back}>Back</button>
        {:else}
          <button id="back" on:click={() => (visible = false)}
            >Skip for now!</button
          >
        {/if}
        {#if step != numberOfSteps}
          <button on:click={next}>Next</button>
        {:else}
          <button on:click={done}>Understood!</button>
        {/if}
      </div>
    </div>
  </main>
{/if}
<Toggle
  key="e"
  toggle={() => {
    visible = true;
  }}
/>

<style>
  main {
    width: 70vw;
    height: 70vh;
    z-index: 200;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px 50px;
    border-radius: 20px;
    background-color: var(--bg);
    transform: translate(-50%, -50%);
    overflow-y: scroll;
  }
  #head {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  #head h2 {
    text-align: center;
    font-size: 60px;
    color: var(--primary);
    letter-spacing: 14px;
  }
  #head h2::before {
    content: "こにち";
  }
  #head h2:hover::before {
    content: "Hello!";
  }
  #progress {
    height: 5px;
    background-color: var(--primary);
    border-radius: 999px;
    transition: width 0.5s ease-out;
  }
  #content {
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
  #content p {
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
    font-size: larger;
    line-height: 40px;
  }
  #bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 40px;
  }
  #bottom button {
    width: 120px;
    height: 45px;
    border-radius: 10px;
    background-color: var(--primary);
    color: white;
    font-size: 12;
    font-weight: 500;
  }
  #bottom #back {
    background-color: transparent;
    color: var(--primary);
    font-weight: bold;
  }
  #highlighted {
    color: var(--primary);
  }
  #final-check {
    margin-bottom: -20px;
    display: flex;
    justify-content: end;
  }

  @media (max-width: 768px) {
    main {
      padding: 20px;
      width: 80vw;
      height: 80vh;
    }
    #bottom {
      padding: 0 10px;
    }
  }
</style>
