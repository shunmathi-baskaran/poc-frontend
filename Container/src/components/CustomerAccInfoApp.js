import React, {useRef, useEffect} from 'react';
import { mount } from 'customerAccInfo/CustomerAccInfoApp';

export default function CustomerAccInfoApp({manageGlobalStore, customerInfo}) {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current, 
            customerInfo,
            manageGlobalStore
        )
    },[])
    return (
        <div ref={ref}></div>
    )
}