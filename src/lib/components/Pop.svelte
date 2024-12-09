<script>
    export let showState = false;
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
 on:click={() => {
     showState = false;
 }}
 class="px-4 w-[100dvw] h-[100dvh] absolute left-0 top-0 flex justify-center items-center bg-black bg-opacity-45 z-[999]"
>
 <div on:click|stopPropagation class="p-4 w-full h-[50%] bg-green-800 rounded-2xl">
<slot></slot>
 </div>
</div>