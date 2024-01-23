<script>
	import instagram_work from '$lib/assets/instagram/instagram_work.png';
	import pinning_acc_wireframes from '$lib/assets/instagram/pinning_acc_wireframes.png';
	import custom_explore_wireframes from '$lib/assets/instagram/custom_explore_wireframe.png';
	import instagram_iterations from '$lib/assets/instagram/instagram_iterations.png';
	import added_tag from '$lib/assets/instagram/added_tag.png';
	import final_flow_1 from '$lib/assets/instagram/final_flow_1.gif';
	import final_flow_2 from '$lib/assets/instagram/final_flow_2.gif';
</script>

<section class="flex flex-col items-center gap-5 md:gap-[4rem] max-w-[80%] md:max-w-[68%] mx-auto">
	<div></div>

	<div class="flex border-b-2 border-header flex-col pb-[0.5rem] items-center gap-[1.25rem]">
		<img
			src={instagram_work}
			alt="phone screens of instagram work"
			class="object-cover max-w-[50%] md:max-w-[25%]"
		/>
		<p class="text-[1rem] font-semibold md:font-normal md:text-4xl text-center md:max-w-[40rem]">
			Instagram Concept: <i>Learning to Love the Explore Page</i>
			<br />
			Product Designer | 10 Weeks
		</p>

		<p class="text-[0.75rem] md:text-[1rem]">
			<b>Overview</b>
			<br />
			An explore page feature concept that allows the user to customize the content they see on their
			explore page based.
		</p>
	</div>

	<div class="text-[0.75rem] md:text-[1rem] flex flex-col items-start gap-[1rem] md:gap-[2.5rem]">
		<div class="flex flex-col items-start gap-[1rem]">
			<div>
				<h2 class="font-semibold text-[1rem] md:text-[1.5rem]">The Problem</h2>
				<i>Instagram’s explore page got boring, so I redesigned it..</i>
			</div>

			<p>
				Like many other Instagram users, I use Instagram as a form of entertainment. Whether I’m
				procrastinating assignments or chilling with friends, I like to scroll through to find posts
				and stories that interest me. However, I oftentimes find that the content I’m seeing is
				irrelevant or uninteresting to me.
			</p>
			<p>
				I wanted to understand: <b
					>How might Instagram content, particularly on the explore page, be more engaging for
					users?</b
				>
			</p>
		</div>
		<div class="flex flex-col items-start gap-[1rem]">
			<div>
				<h2 class="font-semibold text-[1rem] md:text-[1.5rem]">User Research</h2>
				<i>What are pain points for users?</i>
			</div>

			<p>
				Entering this case study, my original hypothesis was: If Instagram did not focus so much on
				the shopping feature, the app would be more engaging. My goal was to identify the problems
				people have with the organization of Instagram. Instead, I found that users had the biggest
				problem with engaging with the app.
			</p>

			<div>
				<p>Key Insights:</p>
				<ol class="pl-5 list-decimal list-outside">
					<li>Users believe that they are recommended irrelevant and uninteresting content.</li>
					<li>Users prioritize seeing the content of people they care about.</li>
				</ol>
			</div>
			<p>😨 <i>”I get shown random content I don’t even relate to.”</i></p>
		</div>

		<div class="flex flex-col items-start gap-[1rem]">
			<div>
				<h2 class="font-semibold text-[1.5rem]">Brainstorming</h2>
				<i>Exploring engagement</i>
			</div>
			<div>
				<p>Problem spaces to explore:</p>
				<ol class="pl-5 list-decimal list-outside">
					<li>
						Uninteresting Content: How might we create more engaging home pages and explore pages
						for users?
					</li>
					<li>
						Prioritizing personal content: How might we give users more control over what they are
						shown?
					</li>
				</ol>
			</div>
			<p class="font-semibold"><i>Solution A: Pinning Accounts</i></p>
			<img src={pinning_acc_wireframes} class="md:max-w-[50%]" alt="pinning accounts wireframes" />
			<p>The user would be able to pin content from a user such as stories, posts, and messages.</p>
			<div>
				✅ Prioritizes content that users actually want to see <br />✅ Allows users to find their
				close friends' content easier and quicker <br />❌ Decreases time spent on the app <br />❌
				Users may pin too many accounts which counteracts the strengths
			</div>

			<p class="font-semibold"><i>Solution B: Customizing the Explore Page</i></p>
			<img
				src={custom_explore_wireframes}
				class="md:max-w-[68%]"
				alt="pinning accounts wireframes"
			/>
			<p>
				The user would be able to give input on the content that they are shown on the explore page.
			</p>
			<div>
				✅ More engaging content for users <br />
				✅ Increased interaction with explore page & on the app overall <br />
				❌ Decrease posting <br />
				❌ Decrease in interactions with other users
			</div>

			<p class="font-semibold"><i>Choosing Solution B</i></p>
			<div>
				<p>
					Although both solutions have the same levels of feasibility and impact, I ultimately
					decided to move forward with the feature that allows users to customize the explore page
					because:
				</p>
				<ol class="pl-5 list-decimal list-outside">
					<li>
						Based on interviews, users had the least interest in the explore page. Adding a feature
						to this page would increase engagement with an aspect of the product they did not
						interact with much and increase time spent on the app.
					</li>
					<li>
						Users giving direct feedback to the algorithm will allow for them to feel like they have
						control over what they are seeing.
					</li>
				</ol>
			</div>
		</div>

		<div class="flex flex-col items-start gap-[1rem]">
			<div>
				<h2 class="font-semibold text-[1rem] md:text-[1.5rem]">Entry Points</h2>
				<i>Iterations</i>
			</div>
			<div>
				<p>There were two methods of entry that were considered.</p>
				<ol class="pl-5 list-decimal list-outside">
					<li>A separate page to add the interest tag (A, B, C)</li>
					<li>Add interest tag from post (D, E)</li>
				</ol>
			</div>

			<img src={instagram_iterations} alt="instagram interations" />

			<div>
				<p>
					I decided to explore possibilities of creating the entry point at a separate page rather
					than accessing it from a certain post because:
				</p>
				<ol class="pl-5 list-decimal list-outside">
					<li>
						For the explorations D and E presented, we can see that the user would not be able to
						directly add a specific interest. Rather, the app’s algorithm would determine the
						specific topics of the post and then add those the the user’s tags.
					</li>
					<li>
						When asked about the “Not interested” feedback in the horizontal ellipses icon, many
						users that were interviewed were either unaware of the option or did not think it was an
						effective enough way to give feedback to the algorithm as there was explicit indication
						that they would not be shown these types of posts again.
					</li>
				</ol>
			</div>

			<div>
				<p><b>Ultimately, I chose C as the final entry point because:</b></p>
				<ol class="pl-5 list-decimal list-outside">
					<li>
						In A, the engineering efforts would be too high as it would require a completely new
						page focused only on interest tags which confused users when tested.
					</li>
					<li>
						In B, the Add and Follow buttons were too similar which users reported they did not like
						as it was too visually cluttered..
					</li>
					<li>
						In C, the design combines the hashtag and interest tag pages but with the addition of a
						like button which adds the topic to the explore page. There is an obvious visible
						distinction between following a tag and adding the tag to the home page.
					</li>
				</ol>
			</div>
		</div>
		<div class="flex flex-col items-start gap-[1rem]">
			<div>
				<h2 class="font-semibold text-[1rem] md:text-[1.5rem]">Feedback for Newly Added Tag</h2>
				<i>Iterations</i>
			</div>
			<div>
				<p>There were three feedback methods that were considered.</p>
				<ol class="pl-5 list-decimal list-outside">
					<li>Utilizing the colorization of a new stories indicator (A)</li>
					<li>Adding a heart indicator (B)</li>
					<li>No indicator (C)</li>
				</ol>
			</div>

			<img src={added_tag} alt="iterations for added tags" />

			<div>
				<p><b>I decided to choose B as the new tag indicator because:</b></p>
				<ol class="pl-5 list-decimal list-outside">
					<li>
						For users, A was too similar to the new stories indicator and misled them to believe
						there would be a stories like interaction when pressing the tag.
					</li>
					<li>
						The users did not like the lack of indication as they wanted some sort of feedback.
					</li>
					<li>
						In B, the design is familiar to users, because it is the same icon used when liking
						posts and adding an interest tag in this case study. It was easy for users to recognize
						and did not mislead them.
					</li>
				</ol>
			</div>
		</div>
		<div class="flex flex-col items-start gap-[1rem]">
			<div>
				<h2 class="font-semibold text-[1rem] md:text-[1.5rem]">Final Flows</h2>
			</div>
			<div class="flex flex-col md:flex-row mx-[4rem] gap-[2rem] md:gap-0">
				<div class="flex flex-col items-center gap-[0.75rem]">
					<img src={final_flow_1} alt="final flow gif part 1" class="max-w-[50%]" />
					<p>Adding an interest</p>
				</div>
				<div class="flex flex-col items-center gap-[0.75rem]">
					<img src={final_flow_2} alt="final flow gif part 2" class="max-w-[50%]" />
					<p>Deleting an interest</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-start gap-[1rem]">
			<div>
				<h2 class="font-semibold text-[1rem] md:text-[1.5rem]">Takeaways</h2>
				<i>Learnings and Reflection</i>
			</div>

			<div>
				<p>If I had more time I would:</p>
				<ol class="pl-5 list-decimal list-outside">
					<li>Conduct more thorough user interviews and user testing</li>
					<li>Explore more entry points/other flows</li>
				</ol>
			</div>
			<div>
				This was my first case study and my first experience designing a product from start to
				finish. I learned how to design and prototype using Figma. I had a lot of fun exploring the
				possibilities product design has to offer!
			</div>
		</div>
		<div></div>
	</div>
</section>
<div class="flex justify-between max-w-[68%] mx-auto mb-[4rem]">
	<div>
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
</div>
