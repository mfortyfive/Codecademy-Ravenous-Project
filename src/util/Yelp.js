const apiKey = 'yPlRzlkl6yq2k5Vk8QHUMje61KC2l_K6bBaeMmkEsd51TsY_tO1iNPST16KzzcjDi7DZbU3xvLKeBSlYmLgkklOSSUXuqkHXcmAOzrho5LA8sOCrKAUPumKVcDwHXHYx'

const Yelp = {
  async search(term, location, sortBy) {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=&${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
        Authorization: `Bearer ${apiKey}`
        }
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
      throw new Error('something wrong with Yelp?')
    }
    catch(error) {
      console.log(error);
    }
  }
};

export default Yelp;