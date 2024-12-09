<script>
    let showHistory = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
 {#if showHistory}
 <div
 on:click={() => {
     showHistory = false;
 }}
 class="px-4 w-[100dvw] h-[100dvh] absolute left-0 top-0 flex justify-center items-center bg-black bg-opacity-45 z-[999]"
>
 <div on:click|stopPropagation class="p-4 w-full h-[50%] bg-green-800 rounded-2xl">
     <div class="h-[10%] grid grid-cols-4">
         <div class="flex justify-center items-center border-b-2 text-white">
             時間
         </div>
         <div class="flex justify-center items-center border-b-2 text-white">
             種類
         </div>
         <div class="flex justify-center items-center border-b-2 text-white">
             賭注
         </div>
         <div class="flex justify-center items-center border-b-2 text-white">
             結果
         </div>
     </div>
     <div class="w-full h-[90%] overflow-y-scroll">
         {#each Array(20) as item}
             <div class="grid grid-cols-4 gap-1">
                 <div
                     class="flex justify-center items-center border-dotted border-b-[1px] text-white"
                 >
                     12:00
                 </div>
                 <div
                     class="flex justify-center items-center border-dotted border-b-[1px] text-white"
                 >
                     大小
                 </div>
                 <div
                     class="flex justify-center items-center border-dotted border-b-[1px] text-white"
                 >
                     100
                 </div>
                 <div
                     class="flex justify-center items-center border-dotted border-b-[1px] text-white"
                 >
                     勝ち
                 </div>
             </div>
         {/each}
     </div>
 </div>
</div>
 {/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click={() => {
        showHistory = true;
    }}
    class="flex justify-center items-center"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 text-white"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
    </svg>
</div>
