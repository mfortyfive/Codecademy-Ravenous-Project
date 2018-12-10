const apiKey = 'yPlRzlkl6yq2k5Vk8QHUMje61KC2l_K6bBaeMmkEsd51TsY_tO1iNPST16KzzcjDi7DZbU3xvLKeBSlYmLgkklOSSUXuqkHXcmAOzrho5LA8sOCrKAUPumKVcDwHXHYx'

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=&${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Autorization: `Bearer ${apiKey}`
      }
    })
      .then((response) => {
        return response.json(response)
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.state,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          })
        }
      })
  }
};

export default Yelp;