import { BaseToast } from "react-native-toast-message"
import { Ionicons } from "@expo/vector-icons"
import { useAppearance } from "../hooks/useAppearance"

function CustomToast({ props, height, iconName, colorIcon }) {
	const { isDarkMode } = useAppearance()

	return (
		<BaseToast
			{...props}
			text1NumberOfLines={1}
			text2NumberOfLines={2}
			text1Style={{
				fontSize: 18,
				fontWeight: "500",
				color: isDarkMode ? "#fff" : "#121212"
			}}
			text2Style={{
				fontSize: 17,
				fontWeight: "400",
				color: "#999"
			}}
			contentContainerStyle={{
				paddingHorizontal: 6,
			}}
			renderLeadingIcon={() => <Ionicons name={iconName} size={30} color={colorIcon} />}
			style={{
				height: height,
				width: '94%',
				marginTop: "8%",
				borderLeftColor: colorIcon,
				borderLeftWidth: 8,
				alignItems: 'center',
				paddingVertical: 6,
				paddingLeft: 10,
				backgroundColor: isDarkMode ? "#212529" : "#fff",
			}}
		/>
	)
}

export const toastConfig = {
	lgOk: props => (
		<CustomToast
			props={props}
			height={86}
			iconName="checkmark-circle"
			colorIcon={"#51cf66"} />
	),
	smOk: props => (
		<CustomToast
			props={props}
			height={58}
			iconName="checkmark-circle"
			colorIcon={"#51cf66"} />
	),
	lgErr: props => (
		<CustomToast
			props={props}
			height={86}
			iconName="alert-circle"
			colorIcon={"#fa5252"} />
	),
	smErr: props => (
		<CustomToast
			props={props}
			height={58}
			iconName="alert-circle"
			colorIcon={"#fa5252"} />
	),
}
