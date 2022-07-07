import react from 'react'
import {View,Text, StyleSheet} from 'react-native'

import Calcular from '../Classe/Calcular'

type props = {text: string};

const Tecla = (props: props) => {
    return(
        <View style={styleTecla.container} onTouchEnd={() => {
            Calcular.setValor(Calcular.getValor()+props.text)
        }}>
            <Text style={styleTecla.text}>{props.text}</Text>
        </View>
    )
}

export const TeclaLimpar = () => {
    return(
        <View style={styleTecla.containerLimpar} onTouchEnd={() => {
            let index = Calcular.getValor().split("")
            index.pop()
            let valor = index.join("")

            Calcular.setValor(valor)
            
        }}>
            <Text style={styleTecla.text}>C</Text>
        </View>
    )
}

const styleTecla = StyleSheet.create({
    container: {
        width: "34%",
        height: 70,
        backgroundColor: "#ffaa00",
        borderWidth: 0.5,
        justifyContent: "center",
        display: "flex",
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 25,
        fontWeight: 'bold',
    },
    containerLimpar: {
        width: "34%",
        height: 70,
        backgroundColor: "#ffaa00",
        borderWidth: 0.5,
        justifyContent: "center",
        display: "flex",
    }
})

export default Tecla