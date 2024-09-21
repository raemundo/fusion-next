import { View } from "@showtime-xyz/universal.view";
import { FooterProps } from "./types";
import SocialLinks from "app/components/Footer/SocialLinks";
import FooterLinks from "app/components/Footer/FooterLinks";
import CompanyInfo from "app/components/Footer/CompanyInfo";
import ScreenWrapper from "app/components//ScreenWrapper";

const Footer = (props: FooterProps) => {
	const { companyInfo, footerLinks, socialLinks, centered } =
		props.footerProp;

	return (
		<footer
			className="clear-both block bg-black px-20 pb-10 pt-16 leading-5 text-black"
			style={{ content: '""' }}
		>
			<div className="mx-auto w-full max-w-full p-0 text-black">
				<div className="-mx-4 mt-0 flex flex-wrap justify-between">
					<div className="mb-12 mt-0 flex w-full max-w-full flex-auto flex-row justify-between px-4 xl:mb-0 xl:w-1/4 xl:flex-none xl:flex-col">
						<div
							dir="auto"
							className="css-text-146c3p1 font-secondary text-4xl font-bold text-black dark:text-white"
						>
							Fusion Next.
						</div>
						<div className="absolute bottom-0 m-0 hidden">
							<div className="">
								<div
									className="absolute bottom-0 mb-4 hidden h-px w-64 bg-white pb-20"
									style={{ content: '""', maxWidth: "80%" }}
								>
									<div className="">
										<p
											className="m-0 text-2xl font-medium text-white"
											style={{ lineHeight: "1.55" }}
										>
											<a
												href="/contact-us"
												rel="noopener"
												target="_blank"
												className="cursor-pointer hover:text-white"
												style={{
													textDecoration: "underline",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
												}}
											>
												SAWA Intranet
											</a>
											<br className="leading-9" />
											<a
												href="/contact-us"
												rel="noopener"
												className="cursor-pointer hover:text-white"
												style={{
													textDecoration: "underline",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
												}}
											>
												Contact Us
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-0 w-full max-w-full flex-auto px-4 pb-20 xl:w-3/4 xl:flex-none xl:pb-0">
						<div className="">
							<ul
								id="menu-footer-primary"
								className="m-0 flex gap-1 md:gap-10 list-outside list-disc justify-end p-0 text-right md:flex-row md:justify-end lg:justify-start xl:justify-end"
								style={{ flexFlow: "row-reverse wrap" }}
							>
								<li
									id="menu-item-3084"
									className="mb-8 flex-shrink-0 flex-grow-0 basis-1/2 justify-end text-left leading-normal text-red-600 md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
									style={{ listStyle: "none" }}
								>
									<a
										href="/contact-us"
										className="mb-6 cursor-pointer text-2xl font-bold leading-6 hover:text-white font-secondary"
										style={{
											textDecoration: "none",
											transition:
												"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
											listStyle: "outside none none",
										}}
									>
										CONSTRUCT
									</a>
									<ul className="mx-0 mb-0 mt-6 p-0 leading-7">
										<li
											id="menu-item-3086"
											className="mb-4 flex-shrink-0 flex-grow-0 basis-1/2 justify-end md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
											style={{ listStyle: "none" }}
										>
											<a
												href="/contact-us"
												className="mr-6 cursor-pointer text-xl font-secondary font-light text-white hover:text-white"
												style={{
													textDecoration: "none",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
													listStyle:
														"outside none none",
												}}
											>
												Contracting
											</a>
										</li>
										<li
											id="menu-item-3087"
											className="m-0 flex-shrink-0 flex-grow-0 basis-1/2 justify-end md:flex-none"
											style={{ listStyle: "none" }}
										>
											<a
												href="/contact-us"
												className="mr-6 cursor-pointer text-xl font-secondary font-light text-white hover:text-white"
												style={{
													textDecoration: "none",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
													listStyle:
														"outside none none",
												}}
											>
												Aviation Fueling
											</a>
										</li>
									</ul>
								</li>
								<li
									id="menu-item-3088"
									className="mb-8 flex-shrink-0 flex-grow-0 basis-1/2 justify-end text-left leading-normal text-yellow-500 md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
									style={{ listStyle: "none" }}
								>
									<a
										href="/contact-us"
										className="mb-6 cursor-pointer text-2xl font-bold leading-6 hover:text-white font-secondary"
										style={{
											textDecoration: "none",
											transition:
												"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
											listStyle: "outside none none",
										}}
									>
										MANUFACTURE
									</a>
									<ul className="mx-0 mb-0 mt-6 p-0 leading-7">
										<li
											id="menu-item-3092"
											className="mb-4 flex-shrink-0 flex-grow-0 basis-1/2 justify-end md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
											style={{ listStyle: "none" }}
										>
											<a
												href="/contact-us"
												className="mr-6 cursor-pointer text-xl font-secondary font-light text-white hover:text-white"
												style={{
													textDecoration: "none",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
													listStyle:
														"outside none none",
												}}
											>
												DuBox
											</a>
										</li>
										<li
											id="menu-item-4059"
											className="m-0 flex-shrink-0 flex-grow-0 basis-1/2 justify-end md:flex-none"
											style={{ listStyle: "none" }}
										>
											<a
												href="/contact-us"
												className="mr-6 cursor-pointer text-xl font-secondary font-light text-white hover:text-white"
												style={{
													textDecoration: "none",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
													listStyle:
														"outside none none",
												}}
											>
												DuPod
											</a>
										</li>
									</ul>
								</li>
								<li
									id="menu-item-3097"
									className="mb-8 flex-shrink-0 flex-grow-0 basis-1/2 justify-end text-left leading-normal text-green-700 md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
									style={{ listStyle: "none" }}
								>
									<a
										href="/contact-us"
										className="mb-6 cursor-pointer text-2xl font-bold leading-6 hover:text-white font-secondary"
										style={{
											textDecoration: "none",
											transition:
												"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
											listStyle: "outside none none",
										}}
									>
										ENHANCE
									</a>
									<ul className="mx-0 mb-0 mt-6 p-0 leading-7">
										<li
											id="menu-item-3099"
											className="mb-4 flex-shrink-0 flex-grow-0 basis-1/2 justify-end md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
											style={{ listStyle: "none" }}
										>
											<a
												href="/contact-us"
												className="mr-6 cursor-pointer text-xl font-secondary font-light text-white hover:text-white"
												style={{
													textDecoration: "none",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
													listStyle:
														"outside none none",
												}}
											>
												Solar
											</a>
										</li>
										<li
											id="menu-item-3098"
											className="mb-4 flex-shrink-0 flex-grow-0 basis-1/2 justify-end md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
											style={{ listStyle: "none" }}
										>
											<a
												href="/contact-us"
												className="mr-6 cursor-pointer text-xl font-secondary font-light text-white hover:text-white"
												style={{
													textDecoration: "none",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
													listStyle:
														"outside none none",
												}}
											>
												Energy-Saving
											</a>
										</li>

									</ul>
								</li>
								<li
									id="menu-item-5014"
									className="mb-8 hidden flex-shrink-0 flex-grow-0 basis-1/2 justify-end text-left leading-normal text-slate-500 md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
									style={{ listStyle: "none" }}
								>
									<a
										href="/contact-us"
										className="mb-6 cursor-pointer text-2xl font-bold leading-6 hover:text-white font-secondary"
										style={{
											textDecoration: "none",
											transition:
												"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
											listStyle: "outside none none",
										}}
									>
										DEVELOP
									</a>
								</li>
								<li
									id="menu-item-3103"
									className="mb-8 flex-shrink-0 flex-grow-0 basis-1/2 justify-end text-left font-normal leading-normal md:flex-none"
									style={{ listStyle: "none" }}
								>
									<a
										href="/contact-us"
										className="mb-6 cursor-pointer text-2xl font-secondary leading-6 text-white hover:text-white"
										style={{
											textDecoration: "none",
											transition:
												"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
											listStyle: "outside none none",
										}}
									>
										Why Fusion Next?
									</a>
									<ul className="mx-0 mb-0 mt-6 p-0 leading-7">
										<li
											id="menu-item-3100"
											className="mb-4 flex-shrink-0 flex-grow-0 basis-1/2 justify-end md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
											style={{ listStyle: "none" }}
										>
											<a
												href="/contact-us"
												className="mr-6 cursor-pointer text-xl font-secondary font-light text-white hover:text-white"
												style={{
													textDecoration: "none",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
													listStyle:
														"outside none none",
												}}
											>
												Sectors We serve
											</a>
										</li>
										<li
											id="menu-item-4496"
											className="mb-4 flex-shrink-0 flex-grow-0 basis-1/2 justify-end md:flex-shrink-0 md:flex-grow-0 md:basis-1/5"
											style={{ listStyle: "none" }}
										>
											<a
												href="/contact-us"
												className="mr-6 cursor-pointer text-xl font-secondary font-light text-white hover:text-white"
												style={{
													textDecoration: "none",
													transition:
														"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
													listStyle:
														"outside none none",
												}}
											>
												Sustainability
											</a>
										</li>




									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* .container */}
			<div className="border-t border-solid border-white pt-4 text-black">
				<div className="mx-auto w-full max-w-full p-0">
					<div className="-mx-4 mt-0 flex flex-wrap justify-between">
						<div className="mt-0 w-full max-w-full flex-shrink-0 px-4 md:w-1/3 md:flex-none">
							<ul
								className="m-0 flex list-outside list-disc flex-wrap p-0"
								style={{ listStyle: "none" }}
							>
								<li
									className="mb-4 text-left leading-normal"
									style={{ listStyle: "outside none none" }}
								>
									<a
										href="/contact-us"
										className="mr-6 cursor-pointer text-base font-normal text-white hover:text-white"
										style={{
											textDecoration: "none",
											transition:
												"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
											listStyle: "outside none none",
										}}
									>
										Privacy Policy
									</a>
								</li>
								<li
									className="mb-4 text-left leading-normal"
									style={{ listStyle: "outside none none" }}
								>
									<a
										href="/contact-us"
										className="mr-6 cursor-pointer text-base font-normal text-white hover:text-white"
										style={{
											textDecoration: "none",
											transition:
												"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
											listStyle: "outside none none",
										}}
									>
										Terms and Conditions
									</a>
								</li>
							</ul>
						</div>
						<div className="mt-0 w-full max-w-full flex-shrink-0 px-4 md:w-1/3 md:flex-none">
							{/*<div className="">*/}
							{/*	/!* Social Icons Loop *!/*/}
							{/*	<ul*/}
							{/*		className="my-0 ml-8 mr-0 flex list-outside list-disc flex-wrap justify-center p-0"*/}
							{/*		style={{ listStyle: "none" }}*/}
							{/*	>*/}
							{/*		<li*/}
							{/*			className="mb-0 mr-4 inline-block text-left leading-normal"*/}
							{/*			style={{*/}
							{/*				listStyle: "outside none none",*/}
							{/*			}}*/}
							{/*		>*/}
							{/*			<a*/}
							{/*				href="/contact-us"*/}
							{/*				className="inline-block h-6 w-6 cursor-pointer text-2xl font-medium leading-9 text-white hover:text-white"*/}
							{/*				style={{*/}
							{/*					textDecoration: "none",*/}
							{/*					transition:*/}
							{/*						"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",*/}
							{/*					listStyle: "outside none none",*/}
							{/*				}}*/}
							{/*			>*/}
							{/*				<img*/}
							{/*					src="/wp-content/uploads/2021/12/linkedin.svg"*/}
							{/*					alt=""*/}
							{/*					width={27}*/}
							{/*					height={27}*/}
							{/*					loading="lazy"*/}
							{/*					fetchPriority="low"*/}
							{/*					className="h-full w-full max-w-full object-contain align-middle"*/}
							{/*					style={{*/}
							{/*						listStyle:*/}
							{/*							"outside none none",*/}
							{/*					}}*/}
							{/*				/>*/}
							{/*			</a>*/}
							{/*		</li>*/}
							{/*		<li*/}
							{/*			className="mb-0 mr-4 inline-block text-left leading-normal"*/}
							{/*			style={{*/}
							{/*				listStyle: "outside none none",*/}
							{/*			}}*/}
							{/*		>*/}
							{/*			<a*/}
							{/*				href="/contact-us"*/}
							{/*				className="inline-block h-6 w-6 cursor-pointer text-2xl font-medium leading-9 text-white hover:text-white"*/}
							{/*				style={{*/}
							{/*					textDecoration: "none",*/}
							{/*					transition:*/}
							{/*						"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",*/}
							{/*					listStyle: "outside none none",*/}
							{/*				}}*/}
							{/*			>*/}
							{/*				<img*/}
							{/*					src="/wp-content/uploads/2021/12/twitter.svg"*/}
							{/*					alt=""*/}
							{/*					width={27}*/}
							{/*					height={22}*/}
							{/*					loading="lazy"*/}
							{/*					fetchPriority="low"*/}
							{/*					className="h-full w-full max-w-full object-contain align-middle"*/}
							{/*					style={{*/}
							{/*						listStyle:*/}
							{/*							"outside none none",*/}
							{/*					}}*/}
							{/*				/>*/}
							{/*			</a>*/}
							{/*		</li>*/}
							{/*		<li*/}
							{/*			className="mb-0 mr-4 inline-block text-left leading-normal"*/}
							{/*			style={{*/}
							{/*				listStyle: "outside none none",*/}
							{/*			}}*/}
							{/*		>*/}
							{/*			<a*/}
							{/*				href="/contact-us"*/}
							{/*				className="inline-block h-6 w-6 cursor-pointer text-2xl font-medium leading-9 text-white hover:text-white"*/}
							{/*				style={{*/}
							{/*					textDecoration: "none",*/}
							{/*					transition:*/}
							{/*						"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",*/}
							{/*					listStyle: "outside none none",*/}
							{/*				}}*/}
							{/*			>*/}
							{/*				<img*/}
							{/*					src="/wp-content/uploads/2021/12/youtube.svg"*/}
							{/*					alt=""*/}
							{/*					width={30}*/}
							{/*					height={22}*/}
							{/*					loading="lazy"*/}
							{/*					fetchPriority="low"*/}
							{/*					className="h-full w-full max-w-full object-contain align-middle"*/}
							{/*					style={{*/}
							{/*						listStyle:*/}
							{/*							"outside none none",*/}
							{/*					}}*/}
							{/*				/>*/}
							{/*			</a>*/}
							{/*		</li>*/}
							{/*		<li*/}
							{/*			className="mb-0 mr-4 inline-block text-left leading-normal"*/}
							{/*			style={{*/}
							{/*				listStyle: "outside none none",*/}
							{/*			}}*/}
							{/*		>*/}
							{/*			<a*/}
							{/*				href="/contact-us"*/}
							{/*				className="inline-block h-6 w-6 cursor-pointer text-2xl font-medium leading-9 text-white hover:text-white"*/}
							{/*				style={{*/}
							{/*					textDecoration: "none",*/}
							{/*					transition:*/}
							{/*						"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",*/}
							{/*					listStyle: "outside none none",*/}
							{/*				}}*/}
							{/*			>*/}
							{/*				<img*/}
							{/*					src="/wp-content/uploads/2022/03/i-facebook.svg"*/}
							{/*					alt=""*/}
							{/*					width={18}*/}
							{/*					height={32}*/}
							{/*					loading="lazy"*/}
							{/*					fetchPriority="low"*/}
							{/*					className="h-full w-full max-w-full object-contain align-middle"*/}
							{/*					style={{*/}
							{/*						listStyle:*/}
							{/*							"outside none none",*/}
							{/*					}}*/}
							{/*				/>*/}
							{/*			</a>*/}
							{/*		</li>*/}
							{/*		<li*/}
							{/*			className="mb-0 mr-4 inline-block text-left leading-normal"*/}
							{/*			style={{*/}
							{/*				listStyle: "outside none none",*/}
							{/*			}}*/}
							{/*		>*/}
							{/*			<a*/}
							{/*				href="/contact-us"*/}
							{/*				className="inline-block h-6 w-6 cursor-pointer text-2xl font-medium leading-9 text-white hover:text-white"*/}
							{/*				style={{*/}
							{/*					textDecoration: "none",*/}
							{/*					transition:*/}
							{/*						"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",*/}
							{/*					listStyle: "outside none none",*/}
							{/*				}}*/}
							{/*			>*/}
							{/*				<img*/}
							{/*					src="/wp-content/uploads/2022/03/i-instagram.svg"*/}
							{/*					alt=""*/}
							{/*					width={32}*/}
							{/*					height={32}*/}
							{/*					loading="lazy"*/}
							{/*					fetchPriority="low"*/}
							{/*					className="h-full w-full max-w-full object-contain align-middle"*/}
							{/*					style={{*/}
							{/*						listStyle:*/}
							{/*							"outside none none",*/}
							{/*					}}*/}
							{/*				/>*/}
							{/*			</a>*/}
							{/*		</li>*/}
							{/*	</ul>*/}
							{/*	/!* Social Icons Loop *!/*/}
							{/*</div>*/}
						</div>
						<div className="mt-0 w-full max-w-full flex-shrink-0 px-4 text-right md:w-1/3 md:flex-none">
							<p className="m-0 text-base font-normal leading-6 text-white">
								Copyright © 2024 Fusion Next. All Rights Reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
