import React from "react"
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Tabs from './components/Tabs'
import Accordian from './components/Accordian'

const generateClassName = createGenerateClassName({
    productionPrefix: 'cainfo'
})

export default function App(props){
    const {  customerInfo, transactionDetails } = props;
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Accordian  customerInfo={customerInfo} transactionDetails={transactionDetails}/>
        {/* <Tabs  customerInfo={customerInfo} transactionDetails={transactionDetails} /> */}
        </StylesProvider>
    )
}