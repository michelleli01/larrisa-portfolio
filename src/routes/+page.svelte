<script lang="ts">
	import home_pic_1 from '$lib/assets/home_pic_1.png';
	import disney from '$lib/assets/disney.png';
	import carriage from '$lib/assets/carriage.png';
	import growceries from '$lib/assets/growceries.png';
	import instagram from '$lib/assets/instagram.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="portfolio home page" />
</svelte:head>

<section class="py-12">
	<div class="flex justify-between items-center max-w-[75%] mx-auto">
		<div class="flex flex-col align-start max-w-[30rem] max-h-[7rem] gap-[1.25rem]">
			<p>Howdy! I’m Larrisa!</p>
			<p>
				I’m an designer, story teller, and animal lover currently making magic at Disney✨ and
				studying at Cornell 🍎.
			</p>
		</div>

		<img src={home_pic_1} alt="larrisa on horse" class="object-cover max-w-[25vh] rounded-[1rem]" />
	</div>
</section>

<section
	class="bg-portfolio flex max-w-[75%] mx-auto justify-between align-items content-between align-start flex-wrap"
>
	<div class="flex flex-col align-center gap-[0.3rem]">
		<img src={disney} alt="disney mockups" class="max-w-[25rem]" />
		<h2 class="flex px-[2rem] py-[1rem] flex-col content-center align-start gap-[6rem]">Disney</h2>
	</div>

	<div class="flex flex-col align-center gap-[0.3rem]">
		<img src={growceries} alt="disney mockups" class="max-w-[25rem]" />
		<h2 class="flex px-[2rem] py-[1rem] flex-col content-center align-start gap-[6rem]">Grow-ceries</h2>
	</div>

	<div class="flex flex-col align-center gap-[0.3rem]">
		<img src={carriage} alt="disney mockups" class="max-w-[25rem]" />
		<h2 class="flex px-[2rem] py-[1rem] flex-col content-center align-start gap-[6rem]">Carriage</h2>
	</div>

	<div class="flex flex-col align-center gap-[0.3rem]">
		<img src={instagram} alt="disney mockups" class="max-w-[25rem]" />
		<h2 class="flex px-[2rem] py-[1rem] flex-col content-center align-start gap-[6rem]">Instagram</h2>
	</div>

</section>