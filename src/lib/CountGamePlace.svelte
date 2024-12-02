<script>
    import {countGame} from '../stores/store.js';
    const diceImages = [
        './dice0.svg',
        './dice1.svg',
        './dice2.svg',
        './dice3.svg',
        './dice4.svg',
        './dice5.svg'
    ];

    const numbers = [0, 1, 2, 3, 4, 5, 6];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="">
    <!-- bet count place -->
    <div class="grid grid-cols-1 gap-1">
        {#each diceImages as diceImage,diceIndex}
        <div class="grid grid-cols-8 gap-1 text-center text-green-200 text-lg font-bold">
            <!-- 子元素共享樣式 -->
            <div class="aspect-square flex justify-center items-center">
                <img src={diceImage} alt="Increment" class="" />
            </div>
            {#each numbers as number,numberIndex}
                
                <div on:click={()=>{
                    if($countGame[diceIndex] == numberIndex){
                        $countGame[diceIndex] = 7;
                    }else{
                        $countGame[diceIndex] = numberIndex;
                    }
                        
                    
                }} class="aspect-square border border-gray-500 rounded-md flex justify-center items-center {$countGame[diceIndex] == number?"bg-red-800":""}">{number}</div>
            {/each}
        </div>
    {/each}
      
      
    </div>
    
    <!-- number of bet -->
    <div class="grid grid-cols-8 gap-1 text-center text-[0.7rem]">
      <div class="text-yellow-400 font-bold">1:X</div>
      <div class="text-green-200">2.5</div>
      <div class="text-green-200">2</div>
      <div class="text-green-200">4</div>
      <div class="text-green-200">15</div>
      <div class="text-green-200">100</div>
      <div class="text-green-200">1250</div>
      <div class="text-green-200">40000</div>
    </div>
</div>