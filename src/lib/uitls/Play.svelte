<script>
    import {result} from '../../stores/store.js';
    
    // Function to generate a random array of six numbers between 0 and 6
    function generateRandomResult() {
        const interval = setInterval(() => {
            const newTempResult = Array.from({ length: 6 }, () => Math.floor(Math.random() * 6));
            $result = newTempResult;
        }, 100); // Update tempResult every 100ms for animation

        setTimeout(() => {
            clearInterval(interval);
            const newResult = Array.from({ length: 6 }, () => Math.floor(Math.random() * 6));
            result.set(newResult);
        }, 2000); // Show final result after 2 seconds
    }

    // Generate a random result when the component is created
    
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={generateRandomResult} class="flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
      
</div>