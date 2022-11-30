import { useEffect, useState } from 'react';

import { API_URL, API_KEY} from '@env';

export function Popular() {

    const [DATA, setData] = useState([]);

    useEffect(() => {

        fetch(`${API_URL}popular?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => setData(json.results))
        .catch((error) => console.error(error))

    }, []);

    console.log(DATA)

    return DATA
}