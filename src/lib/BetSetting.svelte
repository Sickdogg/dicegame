<script>
    import { bet } from '../stores/store.js';
    import BetImg from './components/BetImg.svelte';

    function decrement() {
        bet.update(n => {
            const newValue = Math.floor(n / 2); // 减少时除以 2
            return Math.max(newValue, 1); // 确保最小值为 1
        });
    }

    function increment() {
        bet.update(n => {
            const newValue = n * 2; // 增加时乘以 2
            return Math.min(newValue, 300); // 确保最大值为 300
        });
    }

    $: betImage = $bet <= 10 ? './dollar-blue.svg' : $bet <= 25 ? './dollar-red.svg' : './dollar-gold.svg';
    $: textColor = $bet > 25 ? 'text-black' : 'text-white';
</script>

<div class="grid grid-cols-3 gap-1 text-center text-green-200 text-lg font-bold">
    <!-- 减少按钮 -->
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
            class="size-4"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    </button>
    
    <!-- 显示 bet 的组件 -->
    <BetImg bind:bet={$bet} />    

    <!-- 增加按钮 -->
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
            class="size-4"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
        </svg>
    </button>
</div>
