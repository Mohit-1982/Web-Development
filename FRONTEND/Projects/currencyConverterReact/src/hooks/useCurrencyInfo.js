import { useState, useEffect } from 'react'

function useCurrencyInfo(from, to) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v2/rate/${from}/${to}`)
        .then((res) => res.json())
        .then((res) => setData(res.rate));
        console.log(data);
    }, [from, to])

    return data;
}

export default useCurrencyInfo;