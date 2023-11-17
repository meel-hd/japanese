<script lang="ts">
  import useLocalization from "../../../hooks/locales/localisation";

  let showNextTime = localStorage.getItem("hide-tutorial") != "yes";
  const { translate } = useLocalization();
</script>

<div>
  <h3>{translate("tutorial")}</h3>
  <div id="container">
    <label for="intro-settings">{translate("show_next_time")}</label>
    <input
      checked={showNextTime}
      on:change={(e) => {
        showNextTime = !showNextTime;
        // @ts-ignores
        if (e.target.checked) {
          localStorage.removeItem("hide-tutorial");
        } else {
          localStorage.setItem("hide-tutorial", "yes");
        }
      }}
      type="checkbox"
      id="intro-settings"
    />
  </div>
</div>

<style>
  #container {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  input {
    width: 16px;
    height: 16px;
  }
</style>
