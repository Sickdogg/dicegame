<script>
    import PadingLayout from "./components/PadingLayout.svelte";
    import BetImg from "./components/BetImg.svelte";
    import BetTransation from "./components/BetTransation.svelte";
    import { bet, moreAndLess, haveBet } from "../stores/store.js";
    import {isPlaying, isAutoPlaying} from "../stores/uitls/play.js";
    import { onMount } from "svelte";

    let screenWidth;
    let screenHeight;

    let smallX;
    let smallFlyX;
    let bigX;
    let bigFlyX;

    onMount(() => {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;

        window.addEventListener("resize", updateScreenSize);

        if (smallX.getBoundingClientRect() > screenWidth / 2) {
            smallFlyX = smallX.getBoundingClientRect().x - screenWidth / 2;
        } else {
            smallFlyX = screenWidth / 2 - smallX.getBoundingClientRect().x;
        }
        if (bigX.getBoundingClientRect() > screenWidth / 2) {
            bigFlyX = bigX.getBoundingClientRect().x - screenWidth / 2;
        } else {
            bigFlyX = screenWidth / 2 - bigX.getBoundingClientRect().x;
        }
    });

    function updateScreenSize() {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
    }
</script>

<PadingLayout>
    <div
        class="grid grid-cols-3 text-center text-green-200 border border-yellow-400 rounded-xl text-lg font-bold"
    >
        <!-- 子元素共享樣式 -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            bind:this={smallX}
            on:click={() => {
                if ($isPlaying || $isAutoPlaying) return;
                $haveBet = true;
                $moreAndLess[0] += $bet;
                $moreAndLess[1] = 0;
                console.log($moreAndLess);
            }}
            class="p-2 relative rounded-l-xl {$moreAndLess[0] > 0 ? 'bg-red-900' : ''}"
        >
            小
            {#if $moreAndLess[0] > 0}
                <!-- <div in:fly={{x: screenWidth / 2 - 50, y: screenHeight - 200, duration: 1000 }} out:fade class=" absolute top-0 left-0 w-full h-full flex justify-start items-center z-[990]">
                <BetImg bind:bet ={$moreAndLess[0]} w={"w-[2rem]"} />
            </div> -->

                <BetTransation bind:screenWidth = {smallFlyX} bind:screenHeight>
                    <BetImg bind:bet={$moreAndLess[0]} w={"w-[2rem]"} />
                </BetTransation>
            {/if}
        </div>
        <div class="p-2 bg-green-900">21</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            bind:this={bigX}
            class="p-2 relative rounded-r-xl {$moreAndLess[1] > 0 ? 'bg-red-900' : ''}"
            on:click={() => {
                if ($isPlaying || $isAutoPlaying) return;
                $haveBet = true;
                $moreAndLess[1] += $bet;
                $moreAndLess[0] = 0;
                console.log($moreAndLess);
            }}
        >
            大
            {#if $moreAndLess[1] > 0}
                <!-- <div in:fly={{x: screenWidth / 2 - 50, y: screenHeight - 200, duration: 1000 }} out:fade class=" absolute top-0 left-0 w-full h-full flex justify-start items-center z-[990]">
                <BetImg bind:bet ={$moreAndLess[0]} w={"w-[2rem]"} />
            </div> -->
                <BetTransation bind:screenWidth = {bigFlyX} bind:screenHeight>
                    <BetImg bind:bet={$moreAndLess[1]} w={"w-[2rem]"} />
                </BetTransation>
            {/if}
        </div>
    </div>
</PadingLayout>
