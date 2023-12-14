<script>
	import home_pic_1 from '$lib/assets/home_pic_1.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="portfolio home page" />
</svelte:head>

<section class="py-12">
	<div class="flex justify-between items-center max-w-[70%] mx-auto">
		<div class="flex flex-col align-start max-w-[30rem] max-h-[7rem] gap-[1.25rem]">
			<p>Howdy! I’m Larrisa!</p>
			<p>
				I’m an designer, story teller, and animal lover currently making magic at Disney✨ and
				studying at Cornell 🍎.
			</p>
		</div>

		<img
			src={home_pic_1}
			alt="larrisa on horse"
			class="object-cover max-h-[20vh] rounded-[1rem]"
		/>
	</div>
</section>

<section class="bg-portfolio h-screen"></section>
