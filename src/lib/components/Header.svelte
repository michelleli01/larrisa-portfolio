<script>
	import logo from '$lib/assets/logo.png';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<header class="md:flex md:items-center md:justify-between px-[2rem] pt-[2rem] pb-[1rem]">
	<div class="flex items-center justify-between mb-4 md:mb-0">
			<a href="/">
				<img src={logo} alt="portfolio logo" class="object-cover max-h-[7vh]" />
			</a>

<button
		on:click={toggleNavbar}
		class="flex md:hidden font-normal font-header text-header items-end gap-[4rem]"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-10 h-10 text-header"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	</button>
	</div>



	<nav>
		<ul class="font-normal border-b-2 md:gap-[2rem] md:border-none border-header md:flex md:flex-row md:items-center font-normal font-header text-header {showMenu
				? 'flex-col text-center gap-[4rem]'
				: 'hidden'}">
			<li class="md:ml-4">
				<a
					class="block no-underline hover:underline py-2 hover:text-header md:border-none md:p-0"
					href="/"
				>
					Work
				</a>
			</li>
			<li class="md:ml-4">
				<a
					class="block no-underline hover:underline py-2 hover:text-header md:border-none md:p-0"
					href="/about"
				>
					About
				</a>
			</li>
			<li class="md:ml-4">
				<a
					class="block no-underline hover:underline py-2 hover:text-header md:border-none md:p-0"
					href="https://drive.google.com/file/d/1k1Txj8r5F9foS9hBrCeUBWCIQAVDnqXL/view"
				>
					Resume
				</a>
			</li>
		</ul>
	</nav>
	<!-- END Global navigation -->
</header>

<svg xmlns="http://www.w3.org/2000/svg" width="1512" height="33" fill="none" class="max-w-[100%] {showMenu
				? 'hidden'
				: 'flex'}">
	<path
		d="M0 25.8328C8.90834 16.7662 23.601 7.84133 57.9762 7.84133C92.3515 7.84133 103.126 25.8328 129.292 25.8328C155.458 25.8328 161.102 12.2994 186.755 12.1402C212.409 11.981 226.774 25.8328 255.506 25.8328C284.238 25.8328 285.264 7.84133 315.534 7.84133C345.805 7.84133 342.727 19.3049 367.867 19.7826C393.007 20.2602 405.834 7.84133 436.618 7.84133C467.401 7.84133 464.323 25.8328 485.872 25.8328C507.42 25.8328 524.865 7.84133 552.57 7.84133C580.276 7.84133 588.485 25.8328 620.295 25.8328C652.105 25.8328 651.591 7.84133 677.758 7.84133C703.924 7.84133 707.515 30.1317 738.299 30.9277C769.083 31.7238 750.613 7.84133 779.344 7.84133C808.076 7.84133 803.972 25.8328 823.468 25.8328C842.964 25.8328 843.99 7.84133 864.513 7.84133C885.036 7.84133 886.386 30.9277 910.5 30.9277C934.614 30.9277 957.891 7.84133 982.518 7.84133C1007.14 7.84133 1005.61 30.9277 1037.42 30.9277C1069.23 30.9277 1071.28 7.84133 1094.88 7.84133C1118.48 7.84133 1113.35 25.8328 1133.36 25.8328C1153.37 25.8328 1170.41 7.52601 1193.5 7.84445C1216.59 8.16288 1232.89 25.8328 1257.01 25.8328C1281.12 25.8328 1283.17 7.84133 1311.91 7.84133C1340.64 7.84133 1377.58 25.8328 1399.64 25.8328C1421.7 25.8328 1448.38 1.95032 1470.95 1.95032C1493.53 1.95032 1512 25.8328 1512 25.8328"
		stroke="#283671"
		stroke-width="3"
		stroke-linecap="round"
	/>
</svg>
