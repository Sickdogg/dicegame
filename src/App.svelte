<script>
  import CountGamePlace from "./lib/CountGamePlace.svelte";
  import ResultPlace from "./lib/ResultPlace.svelte";
  import MoreOrLessPlace from "./lib/MoreOrLessPlace.svelte";
  import IconCountPlace from "./lib/IconCountPlace.svelte";
  import BetSetting from "./lib/BetSetting.svelte";
  import MoneyState from "./lib/MoneyState.svelte";
</script>

<div class="w-[100dvw] h-[100dvh] flex justify-center items-center">
  <div
    class="px-1 w-full h-full max-w-[425px] flex flex-col justify-between bg-green-900"
  >
  <!-- Main -->
    <div class="py-3 flex-1 flex flex-col justify-between">
      <div class=" bg-black bg-opacity-65 rounded-3xl">
        <ResultPlace />
      </div>

      <div class="grid grid-cols-1 gap-3 overflow-hidden rounded-2xl">
        <MoreOrLessPlace />
        <IconCountPlace />
        <CountGamePlace />
      </div>
    </div>

    <!-- Footer -->
    <div class="grid grid-cols-1 gap-4">
      <div>
        <BetSetting />

        <MoneyState />
      </div>
    </div>
  </div>

  <!-- end -->
</div>
