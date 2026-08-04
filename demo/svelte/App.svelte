<script lang="ts">
  import Aplayer from "../../src/Aplayer.svelte";
  import { tracks } from "../tracks";
</script>

<main class="demo-shell">
  <header class="demo-header">
    <span class="badge">Svelte component</span>
    <h1>Svelte APlayer</h1>
    <p>Built directly from the latest source with Vite.</p>
    <nav class="demo-nav" aria-label="Demo versions">
      <a href="../svelte/" aria-current="page">Svelte</a>
      <a href="../web-component/">Web Component</a>
      <a href="https://github.com/fengkx/svelte-aplayer">GitHub</a>
    </nav>
  </header>

  <div class="demo-grid">
    <section class="demo-card">
      <h2>Playlist</h2>
      <div class="player-frame">
        <Aplayer audio={tracks} list_max_height={320} />
      </div>
    </section>

    <section class="demo-card">
      <h2>Mini player</h2>
      <div class="player-frame">
        <Aplayer audio={tracks[2]} mini />
      </div>
    </section>
  </div>
</main>
