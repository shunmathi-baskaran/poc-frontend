import React, {useRef, useEffect} from 'react';
import { mount } from 'customerAccInfo/CustomerAccInfoApp';

export default function CustomerAccInfoApp({transactionDetails, customerId, customerInfo}) {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current, {
            transactionDetails,
            customerId,
            customerInfo
        })
    },[])
    return (
        <div ref={ref}></div>
    )
}