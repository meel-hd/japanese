<script lang="ts">
    import supporetedLanguages from "../../../hooks/locales/supportedLges";
    let currentLang = localStorage.getItem("lang") || "en";

    function setLang(code: string) {
        localStorage.setItem("lang", code);
        window.location.reload()
    }
</script>

<div>
    <h3>Language</h3>
    <div id="container">
        {#each Object.keys(supporetedLanguages) as lang}
            <button
                style={currentLang == lang ? "background: var(--light-primary)" : ""}
                on:click={() => setLang(lang)}
                id="lang-btn"
            >
                {supporetedLanguages[lang].display}
            </button>
        {/each}
    </div>
</div>

<style>
    #container {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    #lang-btn {
        height: 40px;
        padding: 0 20px;
        border-radius: 999px;
        background-color: transparent;
    }
</style>
