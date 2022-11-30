import { useEffect, useState } from 'react';

import { API_URL, API_KEY} from '@env';

export function Details({ ID }) {

    const [DATA, setData] = useState([]);

    useEffect(() => {

        fetch(`${API_URL + ID}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))

    }, []);

    console.log(DATA)

    return DATA
}