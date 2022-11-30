import { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '@env';

export function Upcoming() {

    const [DATA, setData] = useState([]);

    useEffect(() => {

        fetch(`${API_URL}upcoming?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => setData(json.results))
        .catch((error) => console.error(error));
    }, []);

    return DATA;
}