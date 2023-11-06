import { prodtInfoStyle } from "../style/style"
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"

export function InfoProdt({ route }) {
    const { title, price, description, category, image } = route.params

    return(
        <SafeAreaView>
            <ScrollView>
                <Text style={prodtInfoStyle.prodtInfoTitle}>{title}</Text>
                <View style={prodtInfoStyle.prodtInfoImgView}>
                    <Image source={{ uri: image }} style={prodtInfoStyle.prodtInfoImg}/>
                </View>
                <Text style={prodtInfoStyle.prodtInfoPrice}>{price.toLocaleString('pt-br', { style: "currency", currency: 'BRL' })}</Text>
                <Text style={prodtInfoStyle.prodtInfoCategory}>Categoria: {category}</Text>
                <Text style={prodtInfoStyle.prodtInfoDesc}>{description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}
