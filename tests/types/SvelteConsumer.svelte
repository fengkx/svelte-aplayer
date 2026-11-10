<script lang="ts">
  import Aplayer, {
    type AplayerAudio,
  } from "../../dist/svelte/svelte-aplayer.es.js";

  const audio: AplayerAudio = {
    name: "Song",
    artist: "Artist",
    url: "https://example.com/song.mp3",
    cover: "https://example.com/cover.jpg",
  };
</script>

<Aplayer {audio} />
<Aplayer audio={[audio]} order="random" loop="one" list_folded={true} />

<Aplayer />
<Aplayer audio={[]} />
<Aplayer audio={null} />
