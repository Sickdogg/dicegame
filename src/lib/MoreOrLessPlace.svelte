<script>
    import PadingLayout from "./components/PadingLayout.svelte";
</script>

<PadingLayout>
    <div
            class="grid grid-cols-3 text-center text-green-200 border border-yellow-400 rounded-xl overflow-hidden text-lg font-bold"
        >
            <!-- 子元素共享樣式 -->
            <div class="p-2 ">小</div>
            <div class="p-2 bg-green-900">21</div>
            <div class="p-2 ">大</div>
        </div>
</PadingLayout>

