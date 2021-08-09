<script context="module">
	export async function load({ page }) {
		const dynamicImages = [];
		for (let i = 1; i < 5; i++) {
			const path = `../../../static/${i}.jpg?w=400&h=300&webp`;
			dynamicImages.push((await import(path)).default);
		}

		return {
			props: { dynamicImages }
		};
	}
</script>

<script>
	// import Image from '../../static/1.jpg?w=400&h=300&webp';
	export let dynamicImages;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- <img src={Image} alt="test1" /> -->

{#each dynamicImages as dynamicImage}
	<img src={dynamicImage} alt="test2" />
{/each}
