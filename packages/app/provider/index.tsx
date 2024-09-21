"use client";

import { SafeAreaProvider } from "@showtime-xyz/universal.safe-area";
import { View } from "@showtime-xyz/universal.view";
import { ColorSchemeProvider } from "@showtime-xyz/universal.color-scheme";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<View tw="flex-1 bg-white dark:bg-black">
			<ColorSchemeProvider>
				<SafeAreaProvider>{children}</SafeAreaProvider>
			</ColorSchemeProvider>
		</View>
	);
}
