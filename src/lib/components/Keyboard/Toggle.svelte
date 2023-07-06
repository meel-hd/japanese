<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let toggle: () => void;
  export let key: string;

  const HandleKeyboard = (e) => {
    if (e.key == key) {
      toggle();
    }
  };

  onMount(() => {
    document.addEventListener("keydown", HandleKeyboard);
  });
  onDestroy(() => {
    document.removeEventListener("keydown", HandleKeyboard);
  });
</script>
