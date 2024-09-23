import { ActivityIndicator, View } from "react-native";
import { useAppearance } from "@/app/hooks/useAppearance";

export function LoaderScreen() {
	const { isDarkMode } = useAppearance()

	return <View className="flex-1 items-center justify-center bg-white dark:bg-slate-900">
		<ActivityIndicator size="large" color={isDarkMode ? "white" : "black"} />
	</View>
}

export function LoaderBtn() {
	return <ActivityIndicator
		size="small" color="white" />
}
