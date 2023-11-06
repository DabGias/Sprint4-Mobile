import { StyleSheet } from "react-native"

export const headerStyle = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15
    },

    headerTitle: {
        fontSize: 40,
        fontWeight: "bold"
    },

    signInButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#248ad8"
    },

    signInButtonText: {
        textAlign: "center",
        color: "#f0f0f0",
        fontWeight: "bold"
    },

    cartButton: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 50
    }
})

export const formStyle = StyleSheet.create({
    // Success: "#4BB543"
    // Neutral: "#248ad8"
    // Error: "#ff5c5c"

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        marginBottom: 20,
        textAlign: "center",
        width: "80%",
        fontSize: 30,
        fontWeight: "bold"
    },

    subtitle: {
        textAlign: "center",
        width: "70%",
        fontSize: 15
    },
    
    input: {
        width: "70%",
        padding: 15,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: "#248ad8"
    },

    inputError: {
        width: "70%",
        padding: 15,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: "#ff5c5c"
    },

    inputSuccess: {
        width: "70%",
        padding: 15,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: "#4BB543"
    },
    
    buttonView: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 15,
        width: "70%",
        marginTop: 25
    },

    button: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    },

    actionButton: {
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#4BB543",
        borderRadius: 10
    },

    actionButtonText: {
        color: "#e2e2e2",
        textAlign: "center",
        fontWeight: "bold"
    },

    cancelButton: {
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: "#ff5c5c",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10
    },

    cancelButtonText: {
        color: "#ff5c5c",
        textAlign: "center",
        fontWeight: "bold"
    },

    disabledButton: {
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#d1d1d1",
        borderRadius: 10
    },

    disabledButtonText: {
        color: "#121212",
        textAlign: "center",
        fontWeight: "bold"
    }
})

export const prodtListStyle = StyleSheet.create({
    listView: {
        height: "100%"
    },

    card: {
        flex: 1/2,
        padding: 15,
        margin: 7,
        borderRadius: 10,
        backgroundColor: "#fff"
    },

    cardImg: { 
        width: "100%", 
        height: 150,
        marginBottom: 50, 
        resizeMode: "center" 
    },

    cardTitle: { 
        marginTop: "auto" 
    }
})

export const prodtInfoStyle = StyleSheet.create({ 
    prodtInfoImgView: {
        width: "90%",
        padding: 15,
        marginTop: 25,
        marginBottom: 25,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fff",
        borderRadius: 10
    },

    prodtInfoImg: {
        width: "90%", 
        height: 400,
        resizeMode: "center",
    },

    prodtInfoTitle: {
        padding: 10,
        fontSize: 25,
        textAlign: "center"
    },

    prodtInfoPrice: {
        fontWeight: "bold",
        paddingHorizontal: 10,
        fontSize: 30
    },

    prodtInfoCategory: {
        marginBottom: 50,
        paddingHorizontal: 10,
        fontSize: 17
    },

    
    prodtInfoDesc: {
        textAlign: "justify",
        paddingHorizontal: 10,
        fontSize: 17
    },

    prodInfoButton: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        backgroundColor: "#5b32f9",
        borderRadius: 10
    },

    prodInfoButtonTxt: {
        fontSize: 15,
        textAlign: "center",
        color: "#e1e1e1",
        fontWeight: "bold"
    }
})

export const prodtCard = StyleSheet.create({
    cartView: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },

    card: { 
        flex: 1, 
        flexDirection: "row", 
        width: "90%", 
        height: 150, 
        marginVertical: 10, 
        marginLeft: "auto", 
        marginRight: "auto", 
        borderRadius: 10, 
        backgroundColor: "#fff" 
    },

    viewImg: { 
        width: "30%", 
        padding: 15 
    },

    img: { 
        width: "100%", 
        height: "100%", 
        resizeMode: "center" 
    },

    viewInfo: { 
        display: "flex", 
        justifyContent: "center", 
        width: "70%", 
        padding: 15 
    }
})
