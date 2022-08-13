import axios from "axios";

export const baseUrl = 'https://realty-in-us.p.rapidapi.com'

export const fetchApi = async (url) => {




    const { data }  = await axios.get(
        (url), 
    {
        headers: {
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
            'X-RapidAPI-Key': 'ffc7b61a14msh4c2a5b9b7e21aa1p101d93jsn2e5af80d1651'
          }
    }
    )
    
    return data;

}

