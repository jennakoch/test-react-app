const USER_DATA_API_URL = 'https://randomuser.me/api/?results=30';

export const fetchUsers = async (urlRoute = USER_DATA_API_URL) => {
  return await fetch(urlRoute)
    .then((res) => res.json())
    .then((response) => {
      return {
        result: transformResponse(response)
      };
    })
    .catch((error) => {
      return {
        error
      };
    });
};

export const transformResponse = (response) => {
  return response.results;
};
