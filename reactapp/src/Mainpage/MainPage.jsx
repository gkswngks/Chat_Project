import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const [nickName, setNickName] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleNickNameSubmit = async () => {
        if (nickName) {
            try {
                const response = await fetch('http://localhost:5000/register', {
                    credentials: 'include',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nickName })
                });

                const result = await response.text();

                if (result === "non-existent") {
                    // navigate('/ChatPage', { state: { nickName: nickName } });
                }
            } catch (error) {
                console.log(error);
                alert("요청을 처리하는 도중 오류가 발생했습니다.");
            }
        }
    };

    const keypress = (e) => {
        if (e.key === "Enter") {
            handleNickNameSubmit();
        }
    };

    return (
        <div className="pullpage">
            <div className="Mainpage">
                <div className="main">
                    <h1>AI chat Support</h1>
                    <h2>Transforming<br />Conversations with<br />Ai - Powered Support</h2>
                    <input
                        type="text"
                        name="nickName"
                        placeholder="닉네임 입력"
                        value={nickName.replace(/\s+/g, '')}
                        ref={inputRef}
                        onChange={(e) => setNickName(e.target.value)}
                        onKeyDown={keypress}
                    />
                    <button onClick={handleNickNameSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}
