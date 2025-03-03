import { useEffect, useState } from "react";

function useFetch(url) {

    let [data, setData] = useState(null);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);

    useEffect(()=> {
        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true);
        fetch(url, {
            signal
        })
        .then(res => {
            if(!res.ok) {
                throw Error("something went wrong");
            }
            return res.json();
        })
        .then(data => {
            setData(data)
            setError(null)
            setLoading(false)
        })
        .catch(e => {
            setError(e.message);
            setLoading(false)
        })

        // cleanup function
        return () =>{
            abortController.abort();
        }
    },[url])

    return { data, loading, error }
}

export default useFetch;