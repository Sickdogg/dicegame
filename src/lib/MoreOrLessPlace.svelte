<script>
    import PadingLayout from "./components/PadingLayout.svelte";
</script>

<PadingLayout>
    <div
            class="grid grid-cols-3 gap-1 text-center text-green-200 text-lg font-bold"
        >
            <!-- 子元素共享樣式 -->
            <div class="p-2 bg-green-800 rounded-l-xl">小</div>
            <div class="p-2">21</div>
            <div class="p-2 bg-green-800 rounded-r-xl">大</div>
        </div>
</PadingLayout>

