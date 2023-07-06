<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let next: () => void;
  export let back: () => void;
  export let playSound: () => void;

  const HandleKeyboard = (e) => {
    if (e.code == "Space") {
      playSound();
    }
    if (e.key == "ArrowRight") {
      next();
    }
    if (e.key == "ArrowLeft") {
      back();
    }
    if (e.key == "ArrowUp") {
      next();
      playSound();
    }

    if (e.key == "ArrowDown") {
      back();
      playSound();
    }
  };

  onMount(() => {
    document.addEventListener("keydown", HandleKeyboard);
  });
  onDestroy(() => {
    document.removeEventListener("keydown", HandleKeyboard);
  });
</script>
