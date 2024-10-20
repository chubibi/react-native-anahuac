import { AvoiderKeyboard } from "@/app/components/AvoiderKeyboard";
import { CustomLinearGradient } from "@/app/components/Gradients";
import { LoaderBtn } from "@/app/components/Loaders";
import { btnBase, inp, labelInp, txtBtnBase, wrView } from "@/app/utils/tw-ui";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function SignUp() {
	const [name, setName] = useState<string>(null)
	const [firstLastName, setFirstLastName] = useState<string>(null)
	const [secondLastName, setSecondLastName] = useState<string>(null)
	const [isSending, setIsSending] = useState<boolean>(true)

	return <View className={wrView}>
		<AvoiderKeyboard>
			<View className="px-4 pt-8">
				<Text numberOfLines={2} className="text-4xl dark:text-white font-bold tracking-[-.8px]">
					{(name && name.trim()) ? `Hola ${name.trim()} 👋. ` : "Registrate."}
				</Text>
				<Text className={labelInp}>Nombre(s)</Text>
				<TextInput
					className={inp}
					value={name}
					onChangeText={v => setName(v)}
					placeholder="Ej. David"
					placeholderTextColor="gray"
				/>

				<Text className={labelInp}>Primer Apellido</Text>
				<TextInput
					className={inp}
					value={firstLastName}
					onChangeText={v => setFirstLastName(v)}
					placeholder="Ej. Reyes"
					placeholderTextColor="gray"
				/>
				<Text className={labelInp}>Segundo Apellido - Opcional</Text>
				<TextInput
					className={inp}
					value={secondLastName}
					onChangeText={v => setSecondLastName(v)}
					placeholder="Ej. Valencia"
					placeholderTextColor="gray"
				/>

				{/* <Pressable className={btnBase}>
					<CustomLinearGradient colors={}>
						{!isSending
							? <LoaderBtn />
							: <>
								<FontAwesome name="send" size={24} color="gray" />
								<Text className={txtBtnBase}>Enviar Datos</Text>
							</>}
					</CustomLinearGradient>
				</Pressable> */}
			</View>
		</AvoiderKeyboard>
	</View>
}