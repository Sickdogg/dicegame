<script>
    import PadingLayout from "./components/PadingLayout.svelte";
    import { result } from '../stores/store.js';
    
     
</script>

<PadingLayout>
    <div class="grid grid-cols-6 gap-1 text-center text-green-200 text-lg font-bold">
        {#each $result as dice}
      <div class="aspect-square flex justify-center items-center">
        <img src={`./dice${dice}.svg`} alt={`Dice ${dice}`} class="w-full max-w-[50px] max-h-[50px]" />
      </div>
    {/each}
      </div>
</PadingLayout>
