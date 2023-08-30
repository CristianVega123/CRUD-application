const fetchLogin = async (data, url) => {
   const dataResponse = await fetch(url, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }, 
    body: JSON.stringify(data),
    credentials: "include"
   }) 
    console.log(dataResponse); 
    return dataResponse.status
}

const fetchCatchSession = async (url) => {
    const dataResponse = await fetch(url, {
        credentials: "include"    
    });
    let data = await dataResponse.json();
    console.log(dataResponse)

    if (dataResponse.status !== 200) {
       return false; 
    } else {
        return {
            status: dataResponse.status,
            data: data
        }
    }
}

export { fetchLogin, fetchCatchSession }