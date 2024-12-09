<script>
    import PadingLayout from "./components/PadingLayout.svelte";
    import BetImg from "./components/BetImg.svelte";
    import BetTransation from "./components/BetTransation.svelte";

    import { bet, iconState, haveBet } from "../stores/store.js";
    import { onMount } from "svelte";

    let screenWidth;
    let screenHeight;
    let diceItemArrays = [];
    let diceItemXPostions;
    let flyXPostions;
    onMount(() => {
        screenWidth = window.innerWidth/2;
        screenHeight = window.innerHeight;

        console.log(screenWidth);
        

        window.addEventListener("resize", updateScreenSize);

        // for (let i = 0; i < diceItemArrays.length; i++) {
        //     console.log(diceItemArrays[i].getBoundingClientRect().x);
            
        // }
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


    const icons = [
        { src: "./dice0.svg", state: 0 },
        { src: "./dice1.svg", state: 1 },
        { src: "./dice2.svg", state: 2 },
        { src: "./dice3.svg", state: 3 },
        { src: "./dice4.svg", state: 4 },
        { src: "./dice5.svg", state: 5 },
    ];
    function isIconCountIsFive(arr) {
        const zeroCount = arr.filter((num) => num === 0).length;

        if (zeroCount === 1) {
            console.log("IconCount is five");
            return true;
        }
    }

</script>

<PadingLayout>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="grid grid-cols-3 gap-1 text-center text-green-200 border border-yellow-400 rounded-xl text-lg font-bold"
    >
        <!-- 子元素共享樣式 -->
        {#each icons as icon, index}
            <div
            bind:this = {diceItemArrays[index]}
                on:click={() => {
                    if(isIconCountIsFive($iconState) && $iconState[index] == 0) return;
                    $haveBet = true;
                    $iconState[index] += $bet;
                    if($iconState[index] > 300) $iconState[index] = 300;
                    console.log($iconState);
                }}
                class="rounded-md relative flex justify-center items-center {$iconState[
                    index
                ] > 0
                    ? 'bg-red-800'
                    : ''}"
            >
                <img
                    src={icon.src}
                    alt="Increment"
                    class="w-full max-w-[50px] max-h-[50px]"
                />
                {#if $iconState[index] > 0}
                    <BetTransation  bind:screenWidth = {flyXPostions[index]} bind:screenHeight>
                        <BetImg bind:bet={$iconState[index]} w={"w-[2rem]"} />
                    </BetTransation>
                {/if}
            </div>
        {/each}
    </div>
</PadingLayout>
