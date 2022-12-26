import React,{useState} from 'react'

function useFetchinator( requestConfig, applyData ) {

    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (body) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method:"GET",
                headers: requestConfig.headers ? requestConfig.headers: {},
                body: body? JSON.stringify(body) : null, 
            });
            console.log("fr?")
            if (!response.ok){
                throw new Error('Request Faild!');
            }

            const data = await response.json();

            applyData(data);
        } catch( err){
            setError(err.message || "Something Went Wrong")
            console.log("oooo")
        }
        setIsLoading(false);
    };

    return {
        isLoading,
        error,
        sendRequest,
    };
  
};

export default useFetchinator;
