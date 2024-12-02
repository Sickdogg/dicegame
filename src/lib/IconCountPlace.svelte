<script>
    import PadingLayout from "./components/PadingLayout.svelte";
</script>

<PadingLayout>
    <div
          class="grid grid-cols-3 gap-1 text-center text-green-200 text-lg font-bold"
        >
          <!-- 子元素共享樣式 -->
          <div class="p-2 bg-green-800">a</div>
          <div class="p-2 bg-green-800">b</div>
          <div class="p-2 bg-green-800">c</div>
          <div class="p-2 bg-green-800">d</div>
          <div class="p-2 bg-green-800">e</div>
          <div class="p-2 bg-green-800">f</div>
        </div>
</PadingLayout>
