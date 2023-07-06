<script lang="ts">
  let opened = false;
</script>

<div>
  <button
    on:click={() => (opened = !opened)}
    id="top"
    style={opened ? "" : "margin-bottom:10px"}
  >
    <h3>Shortcuts</h3>
    <img
      style={opened ? "rotate: -90deg;" : "rotate: 90deg;"}
      alt=""
      src="assets/svg/arrow.svg"
    />
  </button>

  {#if opened}
    <div id="container">
      <h4>Navigation</h4>
      <div id="shortcut">
        <div id="box">A</div>
        <p>Go to Hiragana.</p>
      </div>
      <div id="shortcut">
        <div id="box">S</div>
        <p>Go to Katakana.</p>
      </div>
      <div id="shortcut">
        <div id="box">D</div>
        <p>Go to Kanji.</p>
      </div>

      <h4>Toggles</h4>
      <div id="shortcut">
        <div id="box">F</div>
        <p>Toggle settings.</p>
      </div>
      <div id="shortcut">
        <div id="box">G</div>
        <p>Toggle alphabet chart.</p>
      </div>
      <div id="shortcut">
        <div id="box">H</div>
        <p>Toggle writing tutorial.</p>
      </div>
      <div id="shortcut">
        <div id="box">R</div>
        <p>Restart writing tutorial.</p>
      </div>
      <div id="shortcut">
        <div id="box">E</div>
        <p>Open Tutorial.</p>
      </div>
      <div id="shortcut">
        <div id="box">Space</div>
        <p>Play sound.</p>
      </div>

      <h4>Arrows</h4>
      <div id="shortcut">
        <div id="box"><img alt="" src="assets/svg/arrow.svg" /></div>
        <p>Next character and play sound.</p>
      </div>
      <div id="shortcut">
        <div id="box">
          <img style="rotate: 180deg;" alt="" src="assets/svg/arrow.svg" />
        </div>
        <p>Previous character and play sound.</p>
      </div>
      <div id="shortcut">
        <div id="box">
          <img style="rotate: -90deg;" alt="" src="assets/svg/arrow.svg" />
        </div>
        <p>Next character.</p>
      </div>

      <div id="shortcut">
        <div id="box">
          <img style="rotate: 90deg;" alt="" src="assets/svg/arrow.svg" />
        </div>
        <p>Previous character.</p>
      </div>
    </div>
  {/if}
</div>

<style>
  #top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 40px;
    border-radius: 999px;
    width: 100%;
    height: 45px;
    margin-top: 24px;
    margin-bottom: -10px;
    box-shadow: none;
  }
  #top:hover {
    background-color: var(--light-primary);
  }
  #container {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
  #shortcut {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 30px;
  }
  h4 {
    margin-left: 10px;
  }
  #box {
    min-width: 50px;
    height: 40px;
    background-color: var(--light-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  img {
    width: 16px;
  }
</style>
