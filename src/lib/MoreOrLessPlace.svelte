<script>
    import PadingLayout from "./components/PadingLayout.svelte";
    import BetImg from "./components/BetImg.svelte";
    import { moreAndLess } from "../stores/store.js";
    import {bet} from "../stores/store.js";

</script>

<PadingLayout>
    <div
        class="grid grid-cols-3 text-center text-green-200 border border-yellow-400 rounded-xl overflow-hidden text-lg font-bold"
    >
        <!-- 子元素共享樣式 -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            on:click={() => {
                $moreAndLess[0] += $bet;
                $moreAndLess[1] = 0;
                console.log($moreAndLess);
                
            }}
            class="p-2 relative {$moreAndLess[0] > 0 ? 'bg-red-900' : ''}"
        >
            小
            {#if $moreAndLess[0] > 0}
            <div class=" absolute top-0 left-0">
                <BetImg bind:bet ={$moreAndLess[0]} w={"w-[2rem]"} />
            </div>
                
            {/if}

            
            
        </div>
        <div class="p-2 bg-green-900">21</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="p-2 relative {$moreAndLess[1] > 0 ? 'bg-red-900' : ''}"
            on:click={() => {
                $moreAndLess[1] += $bet;
                $moreAndLess[0] = 0;
                console.log($moreAndLess);
            }}
        >
            大
            {#if $moreAndLess[1] > 0}
            <div class=" absolute top-0 left-0">
                <BetImg bind:bet ={$moreAndLess[1]} w={"w-[2rem]"} />
            </div>
            {/if}
        </div>
    </div>
</PadingLayout>
