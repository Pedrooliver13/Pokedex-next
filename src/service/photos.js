import client from 'service/api';

export const getPhotos = async (query = 'Nature', minPerPage = 40) => {
  return client.photos
    .search({ query, per_page: minPerPage })
    .then((photos) => photos);
};
