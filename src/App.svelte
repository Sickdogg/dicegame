<script>
  import CountGamePlace from "./lib/CountGamePlace.svelte";
  import ResultPlace from "./lib/ResultPlace.svelte";
  import MoreOrLessPlace from "./lib/MoreOrLessPlace.svelte";
  import IconCountPlace from "./lib/IconCountPlace.svelte";
  import BetSetting from "./lib/BetSetting.svelte";
  import MoneyState from "./lib/MoneyState.svelte";
  import ItemArea from "./lib/ItemArea.svelte";
  import Questions from "./lib/uitls/questions.svelte";

  import { playMusic } from "./stores/uitls/sound";
  let showStartPlay = true;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if showStartPlay}
  <div
    on:click={() => {
      showStartPlay = false;
      $playMusic = true;
    }}
    class="w-[100dvw] h-[100dvh] flex justify-center items-center bg-green-900"
  >
    <p class="text-white">play</p>
  </div>
{:else}
  <div class="w-[100dvw] h-[100dvh] flex justify-center items-center">
    <Questions />
    <div
      class="px-2 pt-2 w-full h-full max-w-[425px] flex flex-col justify-between bg-green-900"
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
          <!-- Footer -->
          <div
            class="grid grid-cols-1 gap-4 bg-black bg-opacity-45 rounded-t-3xl"
          >
            <div>
              <ItemArea />
              <BetSetting />

              <MoneyState />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end -->
  </div>
{/if}
