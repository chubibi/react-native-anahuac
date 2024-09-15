import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
export function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}