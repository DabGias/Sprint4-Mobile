import 'react-native-gesture-handler'

import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './src/screens/Home'
import { UserForm } from './src/screens/UserForm'
import { Prodts } from './src/screens/Prodts'
import { InfoProdt } from "./src/screens/InfoProdt"
import { Cart } from './src/screens/Cart'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar
                hidden={true}
                animated={true} 
                hideTransitionAnimation='slide'
            />

            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='UserForm'
                    component={UserForm}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Prodts'
                    component={Prodts}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='InfoProdt'
                    component={InfoProdt}
                    options={({ route }) => ({ title: route.params.title })}
                />
                <Stack.Screen
                    name='Cart'
                    component={Cart}
                    options={{ title: "Carrinho" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
