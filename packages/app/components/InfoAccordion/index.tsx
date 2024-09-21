import { Accordion } from "@showtime-xyz/universal.accordion";
import { Text } from "@showtime-xyz/universal.text";
import { View } from "@showtime-xyz/universal.view";
import MainTitle from "app/components/MainTitle";
import { InfoAccordionProps } from "./types";

const InfoAccordion = (props: InfoAccordionProps) => {
	const { content, ...rest } = props.infoAccordionProp;

	return (
		<View tw="w-full gap-8">
			{(rest.title || rest.description || rest.display) && (
				<MainTitle {...rest} />
			)}
			<Accordion.Root>
				{content.map((item) => (
					<Accordion.Item
						key={item.heading}
						value={item.heading}
						tw="rounded-none border-b border-[#6a6d7833] bg-white !p-0 dark:border-[#434651] dark:bg-black"
					>
						<Accordion.Trigger tw="gap-6 !px-0 py-4 md:py-8 lg:py-12">
							<Accordion.Label>
								<Text
									tw="font-secondary text-3xl font-semibold text-black dark:text-white"
									role="heading"
									aria-level={3}
								>
									{item.heading}
								</Text>
							</Accordion.Label>
							<Accordion.Chevron />
						</Accordion.Trigger>
						<Accordion.Content tw="!px-0">
							<Text
								tw="text-md font-secondary pb-4 font-normal text-black dark:text-white md:pb-8 md:text-xl lg:pb-12"
								role="paragraph"
							>
								{item.text}
							</Text>
						</Accordion.Content>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</View>
	);
};

export default InfoAccordion;
