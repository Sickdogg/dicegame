<script>
    let count = 0;

    function decrement() {
        count -= 1;
    }

    function increment() {
        count += 1;
    }
</script>

<div class="bg-black bg-opacity-45 rounded-t-3xl">
    <div
        class="grid grid-cols-3 gap-1 text-center text-green-200 text-lg font-bold"
    >
        <!-- 子元素共享樣式 -->
        <button
            class="p-2 flex justify-center items-center"
            on:click={decrement}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
            </svg>
        </button>

        <div class="p-2 flex justify-center items-center text-white">
            {count}
        </div>

        <button
            class="p-2 flex justify-center items-center"
            on:click={increment}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
            </svg>
        </button>
    </div>
</div>
