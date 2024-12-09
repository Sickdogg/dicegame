<script>
    import BetImg from "./components/BetImg.svelte";
    import { bet, countGame, haveBet } from "../stores/store.js";
    const diceImages = [
        "./dice0.svg",
        "./dice1.svg",
        "./dice2.svg",
        "./dice3.svg",
        "./dice4.svg",
        "./dice5.svg",
    ];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="">
    <!-- bet count place -->
    <div class="grid grid-cols-1 gap-1">
        {#each $countGame as countItem, countIndex}
            <div
                class="grid grid-cols-8 gap-1 text-center text-green-200 text-lg font-bold"
            >
                <!-- 子元素共享樣式 -->
                <div class="aspect-square flex justify-center items-center">
                    <img
                        src={diceImages[countIndex]}
                        alt="Increment"
                        class=""
                    />
                </div>
                {#each countItem as Item, ItemIndex}
                    <div
                        on:click={() => {
                            $haveBet = true;
                            $countGame[countIndex][ItemIndex] += $bet;
                            if ($countGame[countIndex][ItemIndex] > 300)
                                $countGame[countIndex][ItemIndex] = 300;
                            console.log($countGame);
                        }}
                        class="relative aspect-square flex justify-center items-center border border-gray-500 rounded-md {$countGame[
                            countIndex
                        ][ItemIndex] > 0
                            ? 'bg-red-800'
                            : ''}"
                    >
                        {ItemIndex}

                        {#if $countGame[countIndex][ItemIndex] > 0}
                            <div
                                class=" absolute top-1 left-0 w-full h-full flex justify-center items-end"
                            >
                                <BetImg
                                    bind:bet={$countGame[countIndex][ItemIndex]}
                                    w={"w-[1.5rem]"}
                                />
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>

    <!-- number of bet -->
    <div class="grid grid-cols-8 gap-1 text-center text-[0.7rem]">
        <div class="text-yellow-400 font-bold">1:X</div>
        <div class="text-green-200">2.5</div>
        <div class="text-green-200">2</div>
        <div class="text-green-200">4</div>
        <div class="text-green-200">15</div>
        <div class="text-green-200">100</div>
        <div class="text-green-200">1250</div>
        <div class="text-green-200">40000</div>
    </div>
</div>
