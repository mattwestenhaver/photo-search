const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export const searchByQuery = async (query: string) => {
    const response = await fetch(
        `https://api.pexels.com/v1/search?page=1&per_page=10&query=${query}`,
        {
            headers: {
                Authorization: API_KEY,
            },
        }
    );
    const responseJson = await response.json();
    return responseJson;
};

export const getPhotosByPage = async (query = 'nature', page: number) => {
    const response = await fetch(
        `https://api.pexels.com/v1/search?page=${page}&per_page=10&query=${query}`,
        {
            headers: {
                Authorization: API_KEY,
            },
        }
    );
    const responseJson = await response.json();
    return responseJson;
};

export const getDefaultPhotos = async () => {
    const query = 'nature';

    return searchByQuery(query);
};
