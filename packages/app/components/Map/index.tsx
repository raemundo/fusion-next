import { View } from "@showtime-xyz/universal.view";
import { WebView } from "react-native-webview";

const Map = ({ source }) => {
	const iframeHtml = `
        <iframe src="${source}" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

	return (
		<View className="h-[400px] w-full overflow-hidden rounded-3xl md:h-[500px]">
			<WebView
				source={{ html: iframeHtml }}
				style={{ width: "100%", height: "100%" }}
			/>
		</View>
	);
};

export default Map;
