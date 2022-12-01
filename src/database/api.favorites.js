import { useEffect, useState } from 'react';
import { API_REQ, API_KEY } from '@env';

import { PostGeneratedToken } from './api.request';

export function RequestFavorites() {

    const SESSION = PostGeneratedToken();

    const [DATA, setData] = useState([]);

    console.log(SESSION)

    useEffect(() => {

        fetch(`${API_REQ}account/${SESSION}/favorite/movies?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => setData(json.results))
        .catch((error) => console.error(error));
    }, []);

    console.log(DATA)

    return DATA;
}
