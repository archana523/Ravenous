const apiKey = 'yc99TGfMH9eDQFA3RbNDVI2J16GvHcpnjs3FrX0FkoqsJyTiLmutC2A5cc9E91T8zySMK8lDN598sdnojxU3g8iXm-NbN_fcbXIVS7z6H8CBlrjSRUWf8AP_6r2uY3Yx';
const Yelp = {
    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }).then((response) => {
            return response.json();
            console.log(response.json());
        }).then((jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                    }
                });
            }
        }))
    }
}
export default Yelp;