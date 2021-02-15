import React, {useRef, useEffect} from 'react';
import { mountLogin } from 'login/LoginApp';

export default function LoginApp({ onLoginSuccess }) {
    const ref = useRef(null);
    useEffect(() => {
        mountLogin(ref.current, onLoginSuccess )
    },[])
    return (
        <div ref={ref}></div>
    )
}