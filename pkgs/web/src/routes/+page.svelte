<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { EnvDetect } from 'common';
	import { toast } from 'svelte-sonner';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Card class="m-2 p-3">
	<h1 class="font font-bold">Welcome to SvelteKit</h1>
	<p>
		Visit <a class="text-blue-600 underline hover:text-blue-500" href="https://kit.svelte.dev"
			>kit.svelte.dev</a
		> to read the documentation
	</p>

	<!-- 
  This is a simple demo for how you can import libs from common. 
  I'm still figuring out how to get a standalone bun process giving data to the web interface. 
  In the meantime, you can see the results of this code working! Run `bun run tauri dev`, open the localhost instance in your browser and then see how the Tauri instance is different!
  -->
	<Card class="m-1 p-3">
		<Label>Tauri Detection Demo</Label>
		{#if EnvDetect.isTauri() !== 0}
			<p>This is Tauri!</p>
		{:else}
			<p>This is not Tauri, you're probably on the web.</p>
			<Button on:click={() => toast.error("That function won't work on the web.")}>Tost</Button>
		{/if}
	</Card>

	<Card class="m-1 p-3">
		<Label>Server data demo</Label>
		<p>
			{JSON.stringify(data.item)}
		</p>
	</Card>
</Card>
