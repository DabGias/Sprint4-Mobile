import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, SafeAreaView, Text } from "react-native"
import { getUser, insertIntoCart, removeFromCart, selectCart, selectProdts } from "../../firebaseConfig"
import { prodtInfoStyle, prodtListStyle } from "../style/style"
import { Header } from "../components/Header"

function Prodt({ navigation, cart, id_prodt, title, price, description, category, image }) {
    function isOnCart() {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].data()["id_prodt"] == id_prodt) {
                return true
            }
        }

        return false
    }   

    async function handleCart() {
        if (isOnCart()) {
            await removeFromCart(id_prodt)
        } else {
            const user_email = getUser()["email"]

            await insertIntoCart({ id_prodt, title, price, description, category, image, user_email })
        }
    }

    return(
        <Pressable
            style={prodtListStyle.card}
            onPress={() => { 
                navigation.navigate("InfoProdt", { title, price, description, category, image }) 
            }}
        >
            <Image source={{ uri: image }} style={prodtListStyle.cardImg}/>
            <Text style={prodtListStyle.cardTitle}>{title}</Text>
            <Text>{price.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
            <Pressable 
                style={prodtInfoStyle.prodInfoButton}
                onPress={() => { 
                    handleCart() 
                }}
            >
                <Text style={prodtInfoStyle.prodInfoButtonTxt}>{ isOnCart() ? "✔" : "+ 🛒" }</Text>
            </Pressable>
        </Pressable>
    )
}

export function Prodts({ navigation }) {
    const [prodts, setProdts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        async function fetchProdts() {
            setProdts(await selectProdts())
        }
        
        fetchProdts()
    }, [])

    useEffect(() => {
        async function fetchCart() {
            setCart(await selectCart())
        }

        fetchCart()
    })

    return(
        <SafeAreaView style={prodtListStyle.listView}>
            <Header navigation={navigation} cart={cart}/>
            <FlatList
                data={prodts}
                keyExtractor={prodt => prodt["id"]}
                renderItem={({ item }) => <Prodt navigation={navigation} cart={cart} id_prodt={item["id"]} {...item.data()}/>}
                numColumns={2}
            />
        </SafeAreaView>
    )
}
