<script>
    import PadingLayout from "./components/PadingLayout.svelte";
</script>

<PadingLayout>
    <div class="grid grid-cols-6 gap-1 text-center text-green-200 text-lg font-bold">
        <!-- 子元素共享樣式 -->
        <div class="aspect-square flex justify-center items-center">
          <img src="./dice-one.svg" alt="Increment" class="w-full max-w-[100px] max-h-[100px]" />
        </div>
        <div class="aspect-square flex justify-center items-center">
          <img src="./dice-two.svg" alt="Increment" class="w-full max-w-[100px] max-h-[100px]" />
        </div>
        <div class="aspect-square flex justify-center items-center">
          <img src="./dice-three.svg" alt="Increment" class="w-full max-w-[100px] max-h-[100px]" />
        </div>
        <div class="aspect-square flex justify-center items-center">
          <img src="./dice-four.svg" alt="Increment" class="w-full max-w-[100px] max-h-[100px]" />
        </div>
        <div class="aspect-square flex justify-center items-center">
          <img src="./dice-five.svg" alt="Increment" class="w-full max-w-[100px] max-h-[100px]" />
        </div>
        <div class="aspect-square flex justify-center items-center">
          <img src="./dice-six.svg" alt="Increment" class="w-full max-w-[100px] max-h-[100px]" />
        </div>
      </div>
</PadingLayout>
