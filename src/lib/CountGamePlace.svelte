<script>
    import BetImg from "./components/BetImg.svelte";
    import BetTransation from "./components/BetTransation.svelte";

    import { bet, countGame, haveBet } from "../stores/store.js";
    import { onMount } from "svelte";

    let screenWidth;
    let screenHeight;
    let diceItemArrays = [];
    let diceItemXPostions;
    let flyXPostions;
    onMount(() => {
        screenWidth = window.innerWidth / 2;
        screenHeight = window.innerHeight;

        for (let i = 0; i < diceItemArrays.length; i++) {
            console.log(diceItemArrays[i].getBoundingClientRect().x);
        }

        window.addEventListener("resize", updateScreenSize);

        diceItemXPostions = getDiceX();
        flyXPostions = getFlyXPostions(diceItemXPostions);
    });

    function getDiceX() {
        let array = [];
        for (let i = 0; i < diceItemArrays.length; i++) {
            array.push(diceItemArrays[i].getBoundingClientRect().x);
        }
        return array;
    }

    function getFlyXPostions(item) {
        let array = [];
        for (let i = 0; i < item.length; i++) {
            if (item[i] > screenWidth) {
                item[i] = screenWidth - item[i];
                array.push(item[i]);
            } else {
                item[i] = screenWidth - item[i];
                array.push(item[i]);
            }
        }
        return array;
    }

    function updateScreenSize() {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
    }
    const diceImages = [
        "./dice1.svg",
        "./dice2.svg",
        "./dice3.svg",
        "./dice4.svg",
        "./dice5.svg",
        "./dice6.svg",
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
                        bind:this={diceItemArrays[ItemIndex]}
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
                            <BetTransation
                                bind:screenWidth={flyXPostions[ItemIndex]}
                                bind:screenHeight
                            >
                                <BetImg
                                    bind:bet={$countGame[countIndex][ItemIndex]}
                                    w={"w-[1.5rem]"}
                                />
                            </BetTransation>
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
