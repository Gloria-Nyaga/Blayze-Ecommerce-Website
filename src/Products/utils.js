const baseURL = process.env.REACT_APP_BASE_URL

async function handleResponse(response) {
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
export const getProducts = () =>{
    fetch(`${baseURL}/products`).then(handleResponse)

    }





