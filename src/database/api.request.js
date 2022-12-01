import { useEffect, useState } from 'react';
import { API_REQ, API_KEY } from '@env';

export function GenerateToken() {

    const [DATA, setData] = useState(null);

    useEffect(() => {

        fetch(`${API_REQ}authentication/token/new?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => setData(json.request_token))
        .catch((error) => console.error(error));

    }, []);

    console.log(DATA)

    return DATA;
}

export function PostGeneratedToken() {

    const [DATA, setData] = useState(null);

    const TOKEN = GenerateToken()

    fetch(`${API_REQ}authentication/session/new?api_key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify({
            request_token: TOKEN
        }),
        headers: {
            'Content-type': 'application/json;',
            'Authorization': `Bearer ${TOKEN}`
        },
    })
    .then((reponse) => reponse.json())
    .then((json) => setData(json.session_id))

    console.log(DATA)
    
    return DATA
}
