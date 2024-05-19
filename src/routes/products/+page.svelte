<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;
	$: ({ Products } = data);
</script>

<main>
	{#if $Products?.data?.product_items.length}
		<ul>
			{#each $Products?.data?.product_items as item, idx (item.id)}
				<li>
					{item.name}
				</li>
			{/each}
		</ul>
		<hr>
		<pre>{JSON.stringify($Products?.data, null, 2)}</pre>
	{:else}
		<h5>Loading...</h5>
	{/if}
</main>
