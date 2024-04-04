
const Contact = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 border-b-4 border-blue-950 ">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Explore our FAQs for insights on our services, plans, and team. If you're looking for more personalized information or have specific queries, feel free to call, text, or email us. For an even more direct conversation, reach out on our social media platforms. We're here to make your experience seamless and tailored just for you. Your clarity and peace of mind are just a conversation away.</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">1. How do your pricing plans differ?</summary>
				<div className="px-4 pb-4">
					<p>Answer: Our pricing plans—Silver, Gold, and Platinum—are designed to cater to a wide range of needs and budgets. The Silver Plan is perfect for those needing basic web development services. Our Gold Plan offers more advanced features and personalized support, ideal for growing businesses. The Platinum Plan provides our most comprehensive service, including custom solutions and priority support, for clients needing the highest level of expertise and care.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">2. What kind of after-sale support do you offer?</summary>
				<div className="px-4 pb-4">
					<p>Answer: We pride ourselves on our commitment to client satisfaction beyond project completion. Our after-sale support includes technical assistance, minor updates, and a dedicated line for queries for a specified period post-delivery, ensuring your digital presence remains robust and efficient.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">3. Can you tell us more about your team?</summary>
				<div className="px-4 pb-4">
					<p>Answer: Our team comprises dedicated professionals with a passion for web development, including front-end and back-end developers, UI/UX designers, and project managers. We're a tight-knit group with diverse expertise, ensuring that all aspects of your project are handled with the utmost care and professionalism.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">4. What are your educational qualifications and experience?</summary>
				<div className="px-4 pb-4">
					<p>Answer: I holding a degree in Computer Science and engineering and have been building and designing websites professionally for over 2 years. My journey has equipped me with a broad skill set, from coding to design, and I've had the privilege of working with a variety of clients, from startups to established enterprises, across multiple industries.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">5. What are your future plans for your services?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Answer: We are constantly exploring the latest trends and technologies to enhance our offerings and deliver cutting-edge solutions. Our future plans include expanding our service range to include emerging technologies like AI-driven designs and blockchain, as well as further personalizing our client experiences through more tailored service plans and partnership opportunities.</p>
				</div>
			</details>
		</div>
	</div>
</section>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Ashulia, Savar, Dhaka.</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+880 1764-308876</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>abdullahalnoman.khu@gmail.com</span>
				</p>
			</div>
		</div>
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Your Name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 p-3" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="xyz@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 p-3" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 p-5"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
		</form>
	</div>
</section>
        </div>
    );
};

export default Contact;