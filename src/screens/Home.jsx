import { Pressable, SafeAreaView, Text, View } from "react-native"

export function Home({ navigation }) {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, marginBottom: 20 }}>Bem-vindo(a) ao Station</Text>
                <Pressable
                    style={{ backgroundColor: "#248ad8", width: "40%", padding: 15, borderRadius: 10 }} 
                    onPress={() => { 
                        navigation.navigate("UserForm") 
                    }}
                >
                    <Text style={{ textAlign: "center", color: "#f0f0f0", fontWeight: "bold" }}>Entrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
