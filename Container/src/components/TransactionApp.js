import React, {useRef, useEffect} from 'react';
import { mount } from 'transaction/TransactionApp';

export default function TransactionApp({accountNumber}) {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current, {
            accountNumber
        })
    },[accountNumber])
    return (
        <div ref={ref}></div>
    )
}