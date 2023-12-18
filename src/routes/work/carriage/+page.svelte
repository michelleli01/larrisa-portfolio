<script>
	import carriage_work from '$lib/assets/carriage/carriage_work.png';
	import original_employee from '$lib/assets/carriage/original_employee.png';
	import carriage_iterations from '$lib/assets/carriage/carriage_iterations.png';
	import carriage_final_cards from '$lib/assets/carriage/carriage_final_cards.png';
	import no_show_card from '$lib/assets/carriage/no_show_card.png';
	import no_show_iterations from '$lib/assets/carriage/no_show_iterations.png';
</script>

<section class="flex flex-col items-center gap-[4rem] max-w-[75%] mx-auto">
	<div></div>
	<div class="flex border-b-2 border-header flex-col pb-[0.5rem] items-center gap-[1.25rem]">
		<img
			src={carriage_work}
			alt="phone screens of carriage work"
			class="object-cover md:max-w-[50%]"
		/>
		<p class="text-4xl text-center">
			Carriage: <i>Efficient Transit for Students with Disabilities</i>
			<br />
			Product Designer | 16 Weeks
		</p>

		<p>
			<b>Overview</b>
			<br />
			A product which works with Cornell’s CULift to provide transportation for students with disabilities
			by improving task flows for ride scheduling, dispatching, and monitoring.
		</p>
	</div>

	<div class="flex flex-col items-start gap-[1rem]">
		<div>
			<h2 class="font-semibold text-[1.5rem]">Admin/Driver Cards</h2>
			<i>Standardizing cards for better visual understanding.</i>
		</div>
		<p>
			Coming into this product, the original admin/driver cards included their schedules which led
			to an uneven display of employees. This led to confusion as to why some cards were bigger than
			others. Users wondered if bigger cards meant the employee was more important than another who
			was displayed with a smaller card.
		</p>
		<p>I wanted understand: How can I standardized admin and driver cards?</p>
		<div>
			<img src={original_employee} class="md:max-w-[50%]" alt="original employee cards" />
		</div>
		<p class="font-semibold">Iterations</p>
		<p>
			In order to alleviate differently sized cards, I thought about different interactions which
			could be integrated.
		</p>
		<img src={carriage_iterations} alt="carriage iterations" />
		<p>
			I decided that the inclusion of these interactive elements were not user-friendly as it forces
			too many actions within a small area. I then focused on including only the most important
			information necessary to be displayed on the card (name, role, and identifier code).
		</p>
		<img src={carriage_final_cards} class="md:max-w-[75%]" alt="carriage final cards" />
		<b
			>The final design (E.C.) includes the role directly on the card rather than in the form of
			bubble tags with icons.</b
		>
		<div>
			<p>I ultimately chose this because…</p>
			<ol class="pl-5 list-decimal list-outside">
				<li>The icons would yield accessibility issues.</li>
				<li>The information is clustered together within the same area.</li>
			</ol>
		</div>
	</div>

	<div class="flex flex-col items-start gap-[1rem]">
		<div>
			<h2 class="font-semibold text-[1.5rem]">No Show Reporting</h2>
			<i>Error recovery for Carriage Drivers</i>
		</div>
		<p>
			Drivers must report students who do not show up for their rides, but sometimes this report can
			be incorrect. They could have mistakenly not seen the student or the student could have been
			in a slightly different place than the driver expected.
		</p>
		<p>
			I wanted understand: <i
				>If students are reported as a “no show” on accident, how can drivers fix this?
			</i> In other words, I wanted to create an error recovery method for drivers.
		</p>
		<div>
			<img src={no_show_card} class="max-w-[50%]" alt="no show card" />
		</div>
		<p class="font-semibold">Iterations</p>
		<p>
			In order to alleviate differently sized cards, I thought about different interactions which
			could be integrated.
		</p>
		<img src={no_show_iterations} alt="carriage no show card iterations" />
		<p>
			I explored iterations through dark and light indicators. Designs A, B, and C resembled buttons
			and would mislead users by creating a false affordance in that they are interactive which led
			me to favor explorations <b>C and D</b>.
		</p>
		<b>Final Flow</b>
		<div>
			<p>
				The final design (D) is one which does not look interactive and does not overemphasize the
				information. Ultimately, I chose this design because…
			</p>
			<ol class="pl-5 list-decimal list-outside">
				<li>
					The student is marked without the information tag overshadowing the rest of the card.
				</li>
				<li>It does not mislead the user by seeming interactive.</li>
			</ol>
		</div>
	</div>

	<div class="flex flex-col items-start gap-[1rem]">
		<div>
			<h2 class="font-semibold text-[1.5rem]">Takeaways</h2>
			<i>Learnings and Reflection</i>
		</div>
		<div>
			<p>I learned:</p>
			<ol class="pl-5 list-decimal list-outside">
				<li>The importance of cross role communication.</li>
				<li>Understanding full scope of user needs.</li>
			</ol>
		</div>
		<p>
			This was my first time working as the only designer in a multi-role product team which
			encouraged me to keep channels open with other roles. I love working on a product that has
			such a profound community impact and am so grateful for the range of work this product has
			allowed me to explore.
		</p>
	</div>

	<div></div>
</section>
<div class="flex justify-between max-w-[75%] mx-auto mb-[4rem]">
	<div class="max-w-[40%] md:max-w-[100%]">
		<a class="flex items-center gap-[1.5rem]" href="/#work">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="103"
				height="47"
				viewBox="0 0 103 47"
				fill="none"
			>
				<path
					d="M101.272 6.27761C101.809 6.40366 102.348 6.06993 102.474 5.53223C102.6 4.99452 102.266 4.45644 101.728 4.33039L101.272 6.27761ZM0.792893 15.397C0.402369 15.7875 0.402369 16.4207 0.792893 16.8112L7.15685 23.1752C7.54738 23.5657 8.18054 23.5657 8.57107 23.1752C8.96159 22.7847 8.96159 22.1515 8.57107 21.761L2.91421 16.1041L8.57107 10.4473C8.96159 10.0567 8.96159 9.42357 8.57107 9.03305C8.18054 8.64252 7.54738 8.64252 7.15685 9.03305L0.792893 15.397ZM101.728 4.33039C92.8885 2.25828 82.0199 4.64056 73.7405 9.88017C65.4615 15.1195 59.5084 23.4071 61.0627 33.2598L63.0382 32.9482C61.6568 24.1907 66.8963 16.5783 74.81 11.5702C82.7232 6.56234 93.0473 4.34972 101.272 6.27761L101.728 4.33039ZM61.0627 33.2598C61.8254 38.0951 63.7502 41.6116 66.3017 43.8697C68.8542 46.1286 71.9766 47.0747 75.0125 46.8553C81.0981 46.4153 86.7081 41.3212 86.9034 33.1278L84.904 33.0802C84.7322 40.2868 79.8836 44.4979 74.8683 44.8605C72.3537 45.0423 69.7651 44.264 67.6272 42.372C65.4883 40.4791 63.7434 37.4181 63.0382 32.9482L61.0627 33.2598ZM86.9034 33.1278C87.012 28.5685 83.2593 25.8089 78.4094 23.9984C73.4863 22.1606 66.9006 21.0868 60.3084 20.1637C53.6614 19.2329 47.0023 18.4543 41.751 17.2242C39.128 16.6098 36.9247 15.8971 35.2855 15.0315C33.6336 14.1593 32.6973 13.2082 32.3569 12.1877L30.4597 12.8206C31.0366 14.5501 32.5029 15.824 34.3516 16.8001C36.2129 17.783 38.6082 18.5422 41.2949 19.1715C46.6628 20.4289 53.4671 21.2252 60.031 22.1444C66.6499 23.0712 73.0229 24.1224 77.7099 25.8721C82.4701 27.6491 84.9788 29.9394 84.904 33.0802L86.9034 33.1278ZM32.3569 12.1877C31.5573 9.79104 32.1306 7.88455 33.4214 6.4137C34.7549 4.89404 36.9016 3.79948 39.2397 3.28034C41.5789 2.76095 43.9587 2.85128 45.6985 3.53485C47.3924 4.20038 48.3899 5.36671 48.3899 7.10412H50.3899C50.3899 4.34153 48.681 2.55785 46.4299 1.67338C44.2247 0.806955 41.4211 0.747285 38.8062 1.32789C36.1901 1.90876 33.612 3.1642 31.9181 5.09453C30.1813 7.07369 29.4243 9.7172 30.4597 12.8206L32.3569 12.1877ZM48.3899 7.10412C48.3899 8.69384 47.0244 10.1421 44.1722 11.3912C41.4064 12.6025 37.6588 13.431 33.8326 13.9896C30.0224 14.5458 26.2038 14.8249 23.3321 14.9647C21.8978 15.0345 20.703 15.0693 19.8679 15.0868C19.4504 15.0955 19.123 15.0998 18.9007 15.102C18.7895 15.103 18.7046 15.1036 18.6479 15.1039C18.6196 15.104 18.5983 15.1041 18.5842 15.1041C18.5772 15.1041 18.572 15.1041 18.5687 15.1041C18.567 15.1041 18.5658 15.1041 18.5651 15.1041C18.5647 15.1041 18.5645 15.1041 18.5643 15.1041C18.5642 15.1041 18.5642 15.1041 18.5642 16.1041C18.5642 17.1041 18.5645 17.1041 18.5649 17.1041C18.5651 17.1041 18.5656 17.1041 18.5662 17.1041C18.5673 17.1041 18.5689 17.1041 18.571 17.1041C18.5751 17.1041 18.5811 17.1041 18.5889 17.1041C18.6045 17.104 18.6274 17.104 18.6574 17.1038C18.7173 17.1035 18.8055 17.103 18.9201 17.1019C19.1494 17.0996 19.4842 17.0952 19.9096 17.0863C20.7603 17.0686 21.9738 17.0331 23.4293 16.9623C26.3375 16.8208 30.2253 16.5374 34.1215 15.9686C38.0017 15.4022 41.9606 14.5432 44.9746 13.2232C47.9022 11.9411 50.3899 10.0144 50.3899 7.10412H48.3899ZM18.5642 15.1041H1.5V17.1041H18.5642V15.1041Z"
					fill="#283671"
				/>
			</svg>
			<p>Home</p>
		</a>
	</div>
	<div class="max-w-[40%] md:max-w-[100%]">
		<a class="flex items-center gap-[1.5rem]" href="/work/instagram">
			<p>Next</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="103"
				height="46"
				viewBox="0 0 103 46"
				fill="none"
			>
				<path
					d="M1.13118 32.1843C0.617834 32.3879 0.366806 32.9692 0.570498 33.4826C0.774189 33.9959 1.35547 34.2469 1.86882 34.0433L1.13118 32.1843ZM102.207 11.6405C102.598 11.25 102.598 10.6168 102.207 10.2263L95.8431 3.86232C95.4526 3.47179 94.8195 3.47179 94.4289 3.86232C94.0384 4.25284 94.0384 4.88601 94.4289 5.27653L100.086 10.9334L94.4289 16.5902C94.0384 16.9808 94.0384 17.6139 94.4289 18.0045C94.8195 18.395 95.4526 18.395 95.8431 18.0045L102.207 11.6405ZM1.5 33.1138C1.86882 34.0433 1.86909 34.0431 1.86947 34.043C1.86973 34.0429 1.87021 34.0427 1.87074 34.0425C1.87179 34.0421 1.87326 34.0415 1.87513 34.0407C1.87888 34.0392 1.88427 34.0371 1.89128 34.0343C1.90528 34.0287 1.92575 34.0205 1.95247 34.0097C2.0059 33.9881 2.08438 33.9562 2.18631 33.9143C2.39016 33.8305 2.68788 33.7066 3.06682 33.5447C3.8246 33.2208 4.90777 32.7448 6.21504 32.1338C8.82774 30.9125 12.3446 29.1478 15.9516 26.9764C19.5535 24.8081 23.2752 22.2166 26.279 19.3354C29.2677 16.4688 31.6406 13.2256 32.377 9.74121L30.4203 9.32766C29.8053 12.2374 27.7652 15.1387 24.8946 17.8921C22.039 20.6309 18.455 23.135 14.9201 25.263C11.3902 27.3879 7.93916 29.1202 5.36815 30.3219C4.08358 30.9223 3.02094 31.3893 2.28089 31.7055C1.91091 31.8637 1.6217 31.984 1.42586 32.0646C1.32794 32.1048 1.25337 32.1351 1.20373 32.1551C1.17891 32.1651 1.16032 32.1726 1.14817 32.1775C1.14209 32.1799 1.13762 32.1817 1.13478 32.1828C1.13336 32.1834 1.13235 32.1838 1.13175 32.184C1.13145 32.1841 1.13131 32.1842 1.13116 32.1843C1.13112 32.1843 1.13118 32.1843 1.5 33.1138ZM32.377 9.74121C33.1046 6.29854 32.3119 3.80419 30.3668 2.34821C28.5203 0.966103 25.8966 0.731987 23.3951 1.10838C20.8624 1.48947 18.2431 2.5242 16.235 3.94872C14.2675 5.34441 12.6622 7.28518 12.6622 9.53462H14.6622C14.6622 8.26181 15.6118 6.84291 17.3921 5.57998C19.1319 4.34588 21.4535 3.42304 23.6927 3.08611C25.9632 2.74448 27.9426 3.03189 29.1683 3.94936C30.2953 4.79294 31.044 6.37619 30.4203 9.32766L32.377 9.74121ZM12.6622 9.53462C12.6622 13.3677 14.1417 16.5203 17.4489 19.0067C20.6882 21.4421 25.6434 23.2128 32.5664 24.5055L32.9336 22.5395C26.1066 21.2647 21.5179 19.5637 18.6508 17.4081C15.8516 15.3036 14.6622 12.746 14.6622 9.53462H12.6622ZM32.5664 24.5055C36.0584 25.1576 40.6357 25.5849 45.478 26.0474C50.3446 26.5122 55.5068 27.0145 60.2494 27.8136C65.0075 28.6152 69.251 29.7017 72.3136 31.2943C75.3716 32.8846 77.0442 34.8583 77.1495 37.3904L79.1478 37.3073C78.9997 33.7447 76.5895 31.2637 73.2363 29.5199C69.8876 27.7785 65.3912 26.6517 60.5817 25.8414C55.7568 25.0284 50.5236 24.5202 45.6681 24.0565C40.7883 23.5904 36.3166 23.1712 32.9336 22.5395L32.5664 24.5055ZM77.1495 37.3904C77.2064 38.7578 76.9349 39.808 76.4697 40.6051C76.0056 41.4004 75.3133 42.0046 74.4276 42.4262C72.6257 43.2839 70.0408 43.3694 67.2661 42.6683C61.6741 41.2552 56.1087 36.8855 55.4945 31.0492L53.5055 31.2585C54.2426 38.2632 60.755 43.0858 66.7761 44.6073C69.808 45.3735 72.9136 45.3619 75.2872 44.232C76.4891 43.6599 77.5059 42.7976 78.1971 41.6131C78.8873 40.4304 79.2176 38.9874 79.1478 37.3073L77.1495 37.3904ZM55.4945 31.0492C54.8186 24.6268 55.2888 20.9144 58.1157 18.4278C59.571 17.1477 61.7352 16.1134 64.9303 15.2777C68.121 14.4431 72.2625 13.8255 77.6063 13.3278L77.4208 11.3364C72.0382 11.8378 67.7709 12.4674 64.4242 13.3428C61.082 14.217 58.5802 15.3556 56.7948 16.9261C53.1403 20.1406 52.83 24.84 53.5055 31.2585L55.4945 31.0492ZM77.6063 13.3278C88.3562 12.3265 91.8227 11.9807 93.8624 11.8823C94.8595 11.8341 95.5057 11.8458 96.5404 11.8707C97.5825 11.8957 98.9962 11.9334 101.5 11.9334V9.93338C99.0207 9.93338 97.6261 9.89615 96.5884 9.87123C95.5433 9.84613 94.8381 9.83283 93.766 9.88459C91.6671 9.98593 88.1235 10.3395 77.4208 11.3364L77.6063 13.3278Z"
					fill="#283671"
				/>
			</svg>
		</a>
	</div>
</div>

