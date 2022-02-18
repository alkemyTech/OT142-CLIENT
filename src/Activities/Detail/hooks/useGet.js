/*import {useEffect, useState, useCallback} from 'react';
import {API} from '../hooks/API';

export const useGet = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    const getData = useCallback (async () => {
        try {
            const {data} = await API.get();
            setData(data.data);
            setLoading(false);
        } catch (e) {
            setError(true);
        }
    }, [])

    useEffect(() => {
        getData();
    }, [getData]);

    return { getData,
            data,
            loading,
            error
    }
}
*/