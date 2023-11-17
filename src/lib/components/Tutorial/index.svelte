<script lang="ts">
    import useLocalization from "../../../hooks/locales/localisation";
    import ARTutorial from "./ar.svelte";
    import ENTutorial from "./en.svelte";

    const { lang } = useLocalization();
</script>

{#if lang == "ar"}
    <ARTutorial />
{:else}
    <ENTutorial />
{/if}
