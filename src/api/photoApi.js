import axiosClient from './axiosClient';

const photoApi = {
  get(params) {
    const url = '/photos';
    return axiosClient.get(url, { params });
  },
};

export default photoApi;
