<script>
    import { onDestroy } from "svelte";
    import { result, haveBet } from "../../stores/store.js";
    import {isPlaying, isAutoPlaying} from "../../stores/uitls/play.js";

    
    let interval;

    // function toggleAutoPlay() {
    //     console.log(isAutoPlaying);
    //     isAutoPlaying = !isAutoPlaying;
    //         if (isAutoPlaying) {
    //             clearInterval(interval);
    //         } else {
    //             generateRandomResult();
    //             interval = setInterval(() => {
    //                 generateRandomResult();
    //             }, 4000); // Play the game every 2 seconds
    //         }

    // }

    function toggleAutoPlay() {
        if(!$haveBet || $isPlaying) return;
        $isAutoPlaying = !$isAutoPlaying;
        console.log($isAutoPlaying);
        
        if ($isAutoPlaying) {
            generateRandomResult();
            interval = setInterval(() => {
                generateRandomResult();
            }, 4000); // Play the game every 2 seconds
        } else {
            stopAutoPlay(interval);
        }
    }

    function stopAutoPlay(inal) {
                clearInterval(inal);
            };

    function generateRandomResult() {
        const RandomResultInterval = setInterval(() => {
            const newTempResult = Array.from({ length: 6 }, () =>
                Math.floor(Math.random() * 6)+1,
            );
            $result = newTempResult;
        }, 100); // Update tempResult every 100ms for animation

        setTimeout(() => {
            clearInterval(RandomResultInterval);
            const newResult = Array.from({ length: 6 }, () =>
                Math.floor(Math.random() * 6)+1,
            );
            result.set(newResult);
        }, 2000); // Show final result after 2 seconds
    }

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex justify-center items-center {$haveBet&&!$isPlaying? "":"opacity-45"}" on:click={toggleAutoPlay}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 text-white { $isAutoPlaying ? 'rotate' : '' }"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
    </svg>
</div>

<style>
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .rotate {
        animation: rotate 2s linear infinite;
    }
</style>
