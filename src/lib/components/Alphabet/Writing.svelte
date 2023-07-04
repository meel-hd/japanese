<script lang="ts">
  export let char: string;
  export let next: () => void;
  let opened = false;
  let refrech = false;
  let infoIsVisible = false;
</script>

<button
  id="toggle-btn"
  on:click={() => {
    opened = !opened;
  }}
>
  <img id="open-img" alt="" src="/assets/svg/pencil.svg" /></button
>
{#if opened}
  <div id="model">
    <div id="model-top">
      <button on:click={() => (opened = false)} id="close-btn">
        <img width="18px" alt="" src="assets/svg/close.svg" />
      </button>
    </div>
    <div id="content">
      {#if !refrech}
        <img
          src={"assets/Animated/" +
            char.charCodeAt(0) +
            ".svg?nocache=" +
            Math.random()}
          alt=""
          width="300px"
        />
      {/if}
      <div class="controls">
        <button
          style="font-size: 15px;"
          on:click={() => (infoIsVisible = !infoIsVisible)}
          id="toggle-info">!</button
        >
        <button
          on:click={() => {
            refrech = true;
            setTimeout(() => {
              refrech = false;
            }, 1);
          }}>R</button
        >
        <button on:click={next}>
          <img alt="" width="14px" src="/assets/svg/arrow.svg" />
        </button>
      </div>
      <div class="info">
        {#if infoIsVisible}
          <p>
            Grab a pencil and a peice of paper and follow writing the strokes to
            form the letter.
          </p>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  button {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    background-color: var(--light-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
  }

  #toggle-btn:hover {
    box-shadow: 3px 4px 3px #00000010;
  }
  button #open-img {
    width: 20px;
  }
  #model {
    position: absolute;
    top: -15vh;
    left: -83vw;
    width: 100vw;
    height: 100vh;
    border-radius: 20px;
    background-color: var(--light-primary);
    box-shadow: 3px 4px 3px #00000010;
    z-index: 100;
    padding: 10px 20px;
  }
  #model-top {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 20px;
  }
  #close-btn:hover {
    background-color: white;
  }
  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }
  .controls {
    position: absolute;
    top: 20vh;
    right: 20vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 0px 5px 15px 5px;
    border-radius: 999px;
  }

  .controls button:hover {
    box-shadow: 3px 4px 3px #00000010;
    /* background-color: white; */
  }
  .info {
    position: absolute;
    left: 5vw;
    bottom: 20vh;
    width: 30vw;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
</style>
