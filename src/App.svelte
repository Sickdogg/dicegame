<script>
  import CountGamePlace from "./lib/CountGamePlace.svelte";
  import ResultPlace from "./lib/ResultPlace.svelte";
  import MoreOrLessPlace from "./lib/MoreOrLessPlace.svelte";
  import IconCountPlace from "./lib/IconCountPlace.svelte";
  import BetSetting from "./lib/BetSetting.svelte";
</script>

<div class="w-[100dvw] h-[100dvh] bg-green-900 p-1">
  <div class="w-full h-full flex flex-col justify-between">
    <CountGamePlace />

    <MoreOrLessPlace />

    <IconCountPlace />

    <ResultPlace />

    <BetSetting />
  </div>

  <!-- end -->
</div>
