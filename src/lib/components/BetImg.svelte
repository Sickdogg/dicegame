<script>
    export let bet = 1;
    export let w = "w-[2rem]"
    $: betImage = bet <= 10 ? './dollar-blue.svg' : bet <= 25 ? './dollar-red.svg' : './dollar-gold.svg';
    $: textColor = bet > 25 ? 'text-black' : 'text-white';
    $:if (bet >= 300) bet = 300;
</script>


<div class="flex justify-center items-center relative">
    <img src={betImage} alt="Poker Piece" class={w} />
    <div class="absolute inset-0 flex justify-center items-center {textColor}">{bet}</div>
</div>