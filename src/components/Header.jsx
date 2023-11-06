import { Pressable, SafeAreaView, Text } from "react-native"
import { headerStyle } from "../style/style"

export function Header({ navigation, cart }) {
    return(
        <SafeAreaView style={headerStyle.header}>
            <Text style={headerStyle.headerTitle}>Station</Text>
            <Pressable 
                style={headerStyle.cartButton}
                onPress={() => {
                    navigation.navigate("Cart", { cart })
                }}
            >
                <Text>🛒</Text>
            </Pressable>
        </SafeAreaView>
    )
}
