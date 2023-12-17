<script>
	import headshot from '$lib/assets/headshot.jpg';
	import collage from '$lib/assets/collage.png';
	import collage_mobile from '$lib/assets/collage_mobile.png'
</script>

<section class="flex flex-col flex max-w-[75%] gap-[1.5rem] md:gap-[4rem] mx-auto">
	<div></div>
	<img src={headshot} alt="headshot" class="md:hidden object-cover max-w-[20rem] rounded-[1rem]" />
	<div class="flex flex-col md:flex-row justify-between align-center">
		<div class="max-w-[40rem] gap-[1.25rem]">

			<div class="flex justify-center items-center gap-[1.25rem] max-h-[5rem] max-w-[15rem]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="52"
					height="79"
					viewBox="0 0 52 79"
					fill="none"
				>
					<path
						d="M42.2754 0.692627C47.5863 3.13984 49.4659 5.79849 51.1386 12.6926M4.91254 40.7019C3.43712 46.8366 4.33388 49.7974 10.9125 53.6926M0.912386 44.6926C-0.257397 49.7351 1.05601 50.8978 4.91239 51.6926M30.9122 78.2019C29.9331 78.2018 29.0501 61.1926 25.4122 54.6926C21.7743 48.1926 16.9164 37.2602 16.7534 36.1929C16.5904 35.1255 7.89127 22.702 10.9122 20.2019C13.9331 17.7017 19.4127 31.7019 20.9122 31.7019C22.4117 31.7019 14.8889 11.702 18.9122 11.2019C22.9354 10.7017 25.9011 30.1592 26.8889 30.202C27.8767 30.2449 21.4239 7.23844 25.4122 6.70186C29.4005 6.16528 31.4355 29.2016 32.4122 29.2019C33.3889 29.2021 33.4122 8.70186 36.8913 9.70188C40.3703 10.7019 37.3913 38.7019 40.4122 39.2019C43.4331 39.7018 45.8913 28.702 48.8913 30.702C51.8913 32.702 46.4331 42.1924 45.4122 43.6926C44.3913 45.1928 39.9331 53.2017 40.4122 56.7019C40.8913 60.202 45.9331 68.7017 45.4122 71.2019C44.8913 73.702 31.8913 78.2019 30.9122 78.2019Z"
						stroke="#283671"
						stroke-linecap="round"
					/>
				</svg>
				<p class="flex flex-col justify-center">Hey there, I’m Larrisa!</p>
			</div>
      <br/>
			<p>
				I am a data driven designer with an interdisciplinary background in development, design, and
				storytelling which helps me solve real world problems. <br /> <br /> I’ve spent most of my
				time singing with The Touchtones and building with the Cornell community to create a
				platforms geared toward students. <br /> <br /> I have an in-depth understanding of the product
				cycle and technical expertise which allows me to collaborate effectively across roles. As a data
				scientist and product designer with experience in Disney's large-scale design systems, I thrive
				in environments in which I can enrich lives through empathetic, accessible design.
			</p>
		</div>

		<img src={headshot} alt="headshot" class="hidden md:flex object-cover max-w-[20rem] rounded-[1rem]" />
	</div>

	<div class="flex flex-col md:flex-row justify-between align-start">
		<img src={collage} alt="collage of fun memories" class="hidden md:flex md:max-w-[30rem]" />
		<p class="max-w-[35rem]">
			When I’m not pushing pixels, I love to rock climb, make music, and go on roadtrips. I enjoy
			watching Survivor and listening to podcasts (pls give me recs!), and I could talk for hours
			about agricultural ethics, vanilla lattes, and poetry.
			<br />
			<br />
			Thanks for stopping by!
		</p>
	</div>
	<img src={collage_mobile} alt="collage of fun memories" class="md:hidden" />
	<div></div>
</section>
