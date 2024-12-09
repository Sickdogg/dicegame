<script>
    import { fly, fade } from "svelte/transition";
    import { onMount } from "svelte";

    export let screenWidth;
    export let screenHeight;

    // onMount(() => {
    //     screenWidth = window.innerWidth;
    //     screenHeight = window.innerHeight;

    //     window.addEventListener("resize", updateScreenSize);
    // });

    // function updateScreenSize() {
    //     screenWidth = window.innerWidth;
    //     screenHeight = window.innerHeight;
    // }
</script>

<div in:fly={{x: screenWidth, y: screenHeight - 200, duration: 1000 }} out:fade class=" absolute top-0 left-0 w-full h-full flex justify-start items-center z-[990]">
    <slot></slot>
</div>
