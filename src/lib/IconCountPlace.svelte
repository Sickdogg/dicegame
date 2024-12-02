<script>
    import PadingLayout from "./components/PadingLayout.svelte";
    import { iconState } from "../stores/store.js";

    const icons = [
        { src: './dice0.svg', state: 0 },
        { src: './dice1.svg', state: 1 },
        { src: './dice2.svg', state: 2 },
        { src: './dice3.svg', state: 3 },
        { src: './dice4.svg', state: 4 },
        { src: './dice5.svg', state: 5 }
    ];
</script>

<PadingLayout>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="grid grid-cols-3 gap-1 text-center text-green-200 border border-yellow-400 rounded-xl overflow-hidden text-lg font-bold"
    >
        <!-- 子元素共享樣式 -->
        {#each icons as icon,index}
            <div on:click={() => {
                $iconState = icon.state;
            }} class="rounded-md flex justify-center items-center {$iconState == index?"bg-red-800":""}">
                <img
                    src={icon.src}
                    alt="Increment"
                    class="w-full max-w-[50px] max-h-[50px]"
                />
            </div>
        {/each}
    </div>
</PadingLayout>