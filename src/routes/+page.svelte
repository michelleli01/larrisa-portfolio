<script lang="ts">
	import home_pic_1 from '$lib/assets/home_pic_1.png';
	import disney from '$lib/assets/disney.png';
	import carriage from '$lib/assets/carriage.png';
	import growceries from '$lib/assets/growceries.png';
	import instagram from '$lib/assets/instagram.png';
</script>

<svelte:head>
	<title>larrisa chen</title>
	<meta name="description" content="portfolio home page" />
</svelte:head>

<section class="py-[3.12rem]">
	<div
		class="flex flex-col md:flex-row font-header text-[1.5rem] justify-between items-center max-w-[75%] mx-auto"
	>
		<img
			src={home_pic_1}
			alt="larrisa on horse"
			class="md:hidden object-cover max-w-[25vh] rounded-[1rem] mb-[2rem]"
		/>

		<div class="md:flex md:flex-col md:items-start md:max-w-[30rem] gap-[1.25rem]">
			<p>Howdy! I’m Larrisa!</p>
			<p>
				I’m an designer, story teller, and animal lover currently making magic at Disney✨ and
				studying at Cornell 🍎.
			</p>
		</div>

		<img
			src={home_pic_1}
			alt="larrisa on horse"
			class="hidden md:flex md:object-cover md:max-w-[25vh] rounded-[1rem]"
		/>
	</div>
</section>

<section id="work" class="bg-portfolio pb-[3.12rem]">
	<div
		class="flex flex-col gap-[5rem] items-center md:flex-row md:max-w-[75%] md:mx-auto md:justify-between md:align-items md:content-between md:align-start flex-wrap"
	>
		<a class="flex flex-col align-center" href="/work/disney">
			<img
				src={disney}
				alt="disney mockups"
				class="max-w-[25rem] duration-500 ease-in-out hover:scale-105"
			/>
			<h2
				class="font-header font-semibold text-[2rem] text-header bg-project backdrop-blur-[2px] flex px-[2rem] py-[1rem] flex-col content-center align-start gap-[6rem] text-center"
			>
				Disney
			</h2>
		</a>

		<a class="flex flex-col align-center" href="/work/growceries">
			<img
				src={growceries}
				alt="disney mockups"
				class="max-w-[25rem] duration-500 ease-in-out hover:scale-105"
			/>
			<h2
				class="font-header font-semibold text-[2rem] text-header bg-project backdrop-blur-[2px] flex px-[2rem] py-[1rem] flex-col content-center align-start gap-[6rem] text-center"
			>
				Grow-ceries
			</h2>
		</a>

		<a class="flex flex-col align-center" href="/work/carriage">
			<img
				src={carriage}
				alt="disney mockups"
				class="max-w-[25rem] duration-500 ease-in-out hover:scale-105"
			/>
			<h2
				class="font-header font-semibold text-[2rem] text-header bg-project backdrop-blur-[2px] flex px-[2rem] py-[1rem] flex-col content-center align-start gap-[6rem] text-center"
			>
				Carriage
			</h2>
		</a>

		<a class="flex flex-col align-center" href="/work/instagram">
			<img
				src={instagram}
				alt="disney mockups"
				class="max-w-[25rem] duration-500 ease-in-out hover:scale-105"
			/>
			<h2
				class="font-header font-semibold text-[2rem] text-header bg-project backdrop-blur-[2px] flex px-[2rem] py-[1rem] flex-col content-center align-start gap-[6rem] text-center"
			>
				Instagram
			</h2>
		</a>
	</div>
</section>
