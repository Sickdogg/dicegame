<script>
    import PadingLayout from "./components/PadingLayout.svelte";
    import { moreAndLess } from "../stores/store.js";
</script>

<PadingLayout>
    <div
        class="grid grid-cols-3 text-center text-green-200 border border-yellow-400 rounded-xl overflow-hidden text-lg font-bold"
    >
        <!-- 子元素共享樣式 -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            on:click={() => {
                $moreAndLess = 0;
            }}
            class="p-2 {$moreAndLess === 0 ? 'bg-red-900' : ''}"
        >
            小
        </div>
        <div class="p-2 bg-green-900">21</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="p-2 {$moreAndLess === 1 ? 'bg-red-900' : ''}"
            on:click={() => {
                $moreAndLess = 1;
            }}
        >
            大
        </div>
    </div>
</PadingLayout>
