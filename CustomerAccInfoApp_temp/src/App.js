import React from "react"
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Accordian from './components/Accordian'

const generateClassName = createGenerateClassName({
    seed: 'cainfo'
})

export default function App(props){
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Accordian  {...props} />
        </StylesProvider>
    )
}