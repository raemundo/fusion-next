export function OurPresence () {
	return (
		<section
			className="relative w-full overflow-hidden py-12 leading-5 text-white  md:pt-24 xl:pb-0"
			style={{ zIndex: 1 }}
			id=""
		>
			<div className="relative mx-auto h-full w-full px-5">
				<div
					className="pointer-events-none visible absolute right-0 transform-none overflow-hidden p-0 opacity-100"
					data-aos-delay={400}
					data-aos="fade-up"
					data-aos-duration={2000}
					style={{
						top: 10,
						transitionDuration: "2000ms",
						transitionTimingFunction:
							"cubic-bezier(0.25, 0.1, 0.25, 1)",
						transitionDelay: "400ms",
						transitionProperty: "opacity, transform"
					}}
				>
					<img
						decoding="async"
						src="https://www.groupamana.com/wp-content/themes/amana/images/Frame.svg"
						alt="Decoration"
						className="relative left-0 top-0 h-full w-full max-w-full object-contain align-middle md:object-cover"
						width={1193}
						height={1376}
						loading="lazy"
						fetchPriority="low"
						style={{ objectPosition: "center center" }}
					/>
				</div>
				<ul className="absolute right-0 top-0 z-10 m-0 hidden list-none border-2 border-solid border-white p-6 font-bold lg:block">
					<li className="relative mb-4 pl-10 text-left leading-normal">
						Fusion Next Offices
					</li>
					<li className="relative mb-0 pl-10 text-left leading-normal">
						Projects Completed
					</li>
				</ul>
				<ul
					className="m-0 hidden list-none flex-wrap p-0 lg:block"
					id="tabs-nav"
					role="tablist"
				>
					<li
						className="absolute mb-4 text-left leading-normal"
						role="presentation"
						style={{ left: "83%", top: "34%", zIndex: 999 }}
					>
						<button
							className="block h-5 w-5 cursor-pointer rounded-full border border-solid border-gray-400  text-gray-600 hover:border-gray-200 hover:text-blue-700 focus:border-gray-200 focus:text-blue-700 md:h-12 md:w-12"
							id="location1-tab"
							data-bs-toggle="tab"
							data-bs-target="#location1"
							type="button"
							role="tab"
							aria-controls="location1"
							aria-selected="true"
						/>
					</li>
					{/* Add similar buttons for other locations as required */}
				</ul>
				<div className="-mx-4 mb-12 mt-0 flex flex-wrap">
					<div className="w-full max-w-full flex-shrink-0 px-4 md:w-5/12 md:flex-none">
						<h4
							className="mb-8 mt-0 transform-none text-5xl font-primary font-semibold  text-white duration-1000 md:mb-12 md:text-6xl lg:text-6xl lg:leading-none"
							data-aos-delay={600}
							data-aos="fade-up"
							data-aos-duration={1000}
						>
							Our Presence
						</h4>
						<p
							className="transform-none font-primary font-semibold  text-white delay-700 duration-1000"
							data-aos-delay={700}
							data-aos="fade-up"
							data-aos-duration={1000}
							style={{ maxWidth: 420 }}
						>
							Fusion Next Engineering and Construction LLC
							has established its presence across multiple
							sectors in the UAE, delivering high-quality
							projects to government and private sectors.
						</p>
					</div>
				</div>
				<div className="-mx-4 mt-0 flex flex-wrap items-end justify-end">
					<div className="w-full max-w-full flex-shrink-0 px-4 lg:w-1/3 lg:flex-none">
						<div
							className="pointer-events-auto left-0 top-0 transform-none opacity-100 delay-700 duration-1000 lg:border lg:border-solid lg:border-white  lg:px-8 lg:pb-6 lg:pt-12"
							id="tabs-content"
							data-aos-delay={700}
							data-aos="fade-up"
							data-aos-duration={1000}
						>
							<div
								className="mb-12 flex overflow-auto"
								style={{ flexFlow: "row" }}
							>
								<div
									id="location1"
									role="tabpanel"
									aria-labelledby="location1-tab"
								>
									<div className="font-primary font-semibold ">
										<h4 className="mb-6 mt-0 text-3xl text-white md:text-6xl lg:text-6xl">
											Abu Dhabi
										</h4>
										<p className="text-white">
											Fusion Next Engineering,
											Plot 14, Sector E 19, Abu
											Dhabi, UAE.
											<br />
											P.O. Box: 5643, Abu Dhabi
										</p>
										<div className="mb-6">
											<p>
												Tel:{" "}
												<a
													href="tel:+97126428383"
													className="text-blue-400 underline"
												>
													+971 2 642 8383
												</a>
											</p>
											<p>
												Fax:{" "}
												<a
													href="tel:+97126428644"
													className="text-blue-400 underline"
												>
													+971 2 642 8644
												</a>
											</p>
										</div>
									</div>
								</div>
								{/* Additional locations can be added similarly */}
							</div>
						</div>
					</div>
					<div className="hidden w-full max-w-full flex-shrink-0 px-4 md:block lg:w-2/3 lg:flex-none">
						<div className="flex justify-between">
							<div
								className="transform-none text-center text-white opacity-100 delay-700 duration-1000"
								data-aos-delay={700}
								data-aos="fade-up"
								data-aos-duration={1000}
							>
								<h3 className="my-0 text-6xl font-primary font-semibold  md:text-6xl">
									16+
								</h3>
								<p className="text-2xl font-primary font-semibold ">
									Years of Experience
								</p>
							</div>
							<div
								className="transform-none text-center text-white opacity-100 delay-700 duration-1000"
								data-aos-delay={700}
								data-aos="fade-up"
								data-aos-duration={1000}
							>
								<h3 className="my-0 text-6xl font-primary font-semibold  md:text-6xl">
									50+
								</h3>
								<p className="text-2xl font-primary font-semibold ">
									Projects Completed
								</p>
							</div>
							<div
								className="transform-none text-center text-white opacity-100 delay-700 duration-1000"
								data-aos-delay={700}
								data-aos="fade-up"
								data-aos-duration={1000}
							>
								<h3 className="my-0 text-6xl font-primary font-semibold  md:text-6xl">
									300+
								</h3>
								<p className="text-2xl font-primary font-semibold ">
									Employees
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
