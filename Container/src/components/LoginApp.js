import React, {useRef, useEffect} from 'react';
import { mount } from 'login/LoginApp';

export default function LoginApp({onLogin}) {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current), onLogin
    },[])
    return (
        <div ref={ref}></div>
    )
}