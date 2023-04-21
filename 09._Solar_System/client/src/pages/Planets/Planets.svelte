<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globalStore.js";

    onMount(async () => {
        const responsee = await fetch($BASE_URL + "/planets", {
            credentials: "include",
        });
        const { data: planets } = await responsee.json();
        console.log(planets);
    });
</script>

<h1>This is for planets</h1>
