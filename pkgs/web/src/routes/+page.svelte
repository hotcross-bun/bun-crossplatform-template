<script lang='ts'>
  import { EnvDetect } from "common";
</script>

<h1 class="font-bold font">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- 
  This is a simple demo for how you can import libs from common. 
  I'm still figuring out how to get a standalone bun process giving data to the web interface. 
  In the meantime, you can see the results of this code working! Run `bun run tauri dev`, open the localhost instance in your browser and then see how the Tauri instance is different!
-->

{#if EnvDetect.isTauri() !== 0}
  <p>This is Tauri!</p>
  {:else}
  <p>This is not Tauri.</p>
{/if}