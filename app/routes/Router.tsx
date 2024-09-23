import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "../core/login/SignUp";

export function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
