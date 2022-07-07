import react, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Tecla, {TeclaLimpar} from './Teclas'
import Calcular from '../Classe/Calcular'


const Teclado = () => { 

    const [valor, setValor] = useState("")
    const [resultado, setResultado] = useState("")
    return(
        <View style={{width: "100%"}} onTouchEnd={() => {
            const result = Calcular.getValor()
            setValor(result)
            try{
                setResultado(eval(result))
            }catch(e){
            }
        }}>
            <View style={styleTeclado.screenResult}>
                <Text style={styleTeclado.text1}>{valor}</Text>
                <Text style={styleTeclado.text2}>{resultado}</Text>
            </View>
            <View style={styleTeclado.container}>
                <Tecla text="/"/>
                <Tecla text="*"/>
                <Tecla text="-"/>
            </View>
            <View style={styleTeclado.container}>
                <Tecla text="7"/>
                <Tecla text="8"/>
                <Tecla text="9"/>
            </View>
            <View style={styleTeclado.container}>
                <Tecla text="4"/>
                <Tecla text="5"/>
                <Tecla text="6"/>
            </View>
            <View style={styleTeclado.container}>
                <Tecla text="1"/>
                <Tecla text="2"/>
                <Tecla text="3"/>
            </View>
            <View style={styleTeclado.container}>
                <Tecla text="0" />
                <Tecla text="." />
                <Tecla text="+"/>            
            </View>
            <View style={styleTeclado.container}>
                <Tecla text="("/>
                <Tecla text=")"/>  
                <TeclaLimpar />  
            </View>
        </View>
    )
}

const styleTeclado = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
    },
    screenResult: {
        width: "100%", 
    },
    text1: {
        textAlign: "right",
        fontSize: 40
    },
    text2: {
        textAlign: "right",
        fontSize: 25,
    }
})

export default Teclado