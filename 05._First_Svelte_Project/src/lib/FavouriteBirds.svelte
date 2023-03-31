<script>
    import Birds from "./Birds.svelte";

    const birds = ["Pigeon", "letqsht xyi", "gurmqshto kanarche"];
    const emojis = ["🐦"];

    let birdIndex = 0;
    let favouriteBird = birds[0];
    let favouriteBirdEmoji;

    function changeFavouriteBird() {
        birdIndex = (birdIndex + 1) % birds.length;
    }
</script>

<Birds
    on:click={changeFavouriteBird}
    name={birds[birdIndex]}
    emoji={emojis[0]}
/>
