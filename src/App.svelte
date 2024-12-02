<script>
  import CountGamePlace from "./lib/CountGamePlace.svelte";
  import ResultPlace from "./lib/ResultPlace.svelte";
  import MoreOrLessPlace from "./lib/MoreOrLessPlace.svelte";
  import IconCountPlace from "./lib/IconCountPlace.svelte";
  import BetSetting from "./lib/BetSetting.svelte";
  import MoneyState from "./lib/MoneyState.svelte";
</script>

<div
  class="p-1 w-[100dvw] h-[100dvh] flex justify-center items-center bg-green-700"
>
  <div
    class="w-full h-full max-w-[425px] flex flex-col justify-between bg-green-900"
  >
    <div class="py-2 px-4 flex-1 flex flex-col justify-between">
      <div class="bg-black bg-opacity-65 rounded-3xl">
        <ResultPlace />
      </div>
      <div class="grid border">
        123
      </div>
      <div class="grid grid-cols-1 overflow-hidden rounded-2xl">
        <MoreOrLessPlace />
        <IconCountPlace />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <div class="min-[350px]:px-5">
        <CountGamePlace />
      </div>

      <div>
        <BetSetting />

        <MoneyState />
      </div>
    </div>
  </div>

  <!-- end -->
</div>
