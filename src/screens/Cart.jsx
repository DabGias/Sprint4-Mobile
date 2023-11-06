import { FlatList, Image, Pressable, SafeAreaView, Text, View } from "react-native"
import { prodtCard } from "../style/style"
import { LogBox } from "react-native"

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
])

function CartCard({ navigation, title, price, description, category, image }) {
    return(
        <Pressable 
            style={prodtCard.card}
            onPress={() => { 
                navigation.navigate("InfoProdt", { title, price, description, category, image }) 
            }}
        >
            <View style={prodtCard.viewImg}>
                <Image source={{ uri: image }} style={prodtCard.img}/>
            </View>
            <View style={prodtCard.viewInfo}>
                <Text>{title}</Text>
                <Text>{price.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
            </View>
        </Pressable>
    )
}

export function Cart({ navigation, route }) {
    const cart = route.params.cart

    return(
        <SafeAreaView style={prodtCard.cartView}>
            {
                cart.length === 0 ?
                    <Text style={{ fontSize: 20, textAlign: "center", width: "70%", marginLeft: "auto", marginRight: "auto" }}>Você não adicionou nenhum produto ao carrinho</Text>
                :
                    <FlatList
                        data={cart}
                        keyExtractor={prodt => prodt["id"]}
                        renderItem={({ item }) => <CartCard navigation={navigation} {...item.data()}/>}
                    />
            }
        </SafeAreaView>
    )
}
