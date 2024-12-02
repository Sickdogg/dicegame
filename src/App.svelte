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
    class="w-full h-full max-w-[425px] flex flex-col justify-between bg-green-900"
  >
    <div class="py-2 px-4 flex-1 flex flex-col justify-around">
      <div class="pb-10">
        <div class=" bg-black bg-opacity-65 rounded-3xl">
          <ResultPlace />
        </div>
      </div>

      <div class="grid grid-cols-1 overflow-hidden rounded-2xl">
        <MoreOrLessPlace />
        <IconCountPlace />
      </div>

      <div class="">
        <CountGamePlace />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <div>
        <BetSetting />

        <MoneyState />
      </div>
    </div>
  </div>

  <!-- end -->
</div>
