<script lang='ts'>
  import { EnvDetect } from "common";
</script>

<h1 class="font-bold font">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- This is a simple demo for how you can import libs from common. I'm still figuring out how to get a standalone bun process giving data to the web interface. -->

{#if EnvDetect.isTauri() !== 0}
  <p>This is Tauri!</p>
  {:else}
  <p>This is not Tauri.</p>
{/if}