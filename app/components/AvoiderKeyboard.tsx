import { isiOS } from "../constants/platform"
import { KeyboardAvoidingView, ScrollView } from "react-native"

export function AvoiderKeyboard({ children, offset = 0 }: {
	children: React.ReactNode,
	offset?: number
}) {
	return <KeyboardAvoidingView
		behavior={isiOS ? "padding" : undefined}
		keyboardVerticalOffset={offset}
		className="flex-1">
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			showsVerticalScrollIndicator={false}
			keyboardDismissMode="on-drag"
			keyboardShouldPersistTaps='handled'
			contentContainerStyle={{
				overflow: "visible",
				minHeight: "100%",
				flexGrow: 1,
			}}>
			{children}
		</ScrollView>
	</KeyboardAvoidingView>
}
