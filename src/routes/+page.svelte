<script lang="ts">
	import type { PageData } from './$houdini';
	export let data: PageData;
	$: ({ LandingQuery } = data);
</script>


<a href="/products">Products</a>

<main>
	{#if $LandingQuery}
		<h1>{$LandingQuery.data?.landing?.title}</h1>
		{@html $LandingQuery.data?.landing?.content}
	{:else}
		<h5>Loading...</h5>
	{/if}
</main>
