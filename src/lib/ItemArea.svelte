<script>
    // @ts-ignore
    import Sound from "./uitls/sound.svelte";
    import Trash from "./uitls/trash.svelte";
    import History from "./uitls/History.svelte";
    import Play from "./uitls/Play.svelte";
    import AutoPlay from "./uitls/AutoPlay.svelte";
</script>

<div class="py-2 grid grid-cols-5">
    <Sound/>

    <Trash/>

    <Play/>
    

    <History/>
    
    <AutoPlay/>
</div>