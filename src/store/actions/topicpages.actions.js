import axios from 'axios'
import { apiConfig } from '../../../config/apiConfig'
import { getS3SingedUploadUrlAndUpload } from '@/utils/uploadImage.utils'
const BASE_URL = apiConfig.BASE_URL

export default {
  
  getTopicPage: (_, slug ) => {
    return axios.get(`${BASE_URL}/topicpage/${slug}`)
    .then((response) => {
      return response.data
    })
  },

  getTopicPageEdit: (_, slug ) => {
    return axios.get(`${BASE_URL}/topicpage/${slug}/edit`)
    .then((response) => {
      return response.data
    })
  },

  saveTopicPage: (_, { slug, data } ) => {
    return axios.put(`${BASE_URL}/topicpage/${slug}`, data)
    .then((response) => {
      return response.data
    })
  },

  getTopicPageImages: (_, slug ) => {
    return axios.get(`${BASE_URL}/topicpage/${slug}/images`)
    .then((response) => {
      return response.data
    })
  },

  getTopicEpisodes: (_, slug ) => {
    return axios.get(`${BASE_URL}/topic/${slug}/episodes`)
    .then((response) => {
      return response.data
    })
  },

  saveTopicPageImage: (_, { slug , file} ) => {
    const endpointUrl = `${BASE_URL}/topicpage/${slug}/images`
    return getS3SingedUploadUrlAndUpload({ imageFile: file, endpointUrl })
  },

  saveTopicPageLogo: (_, { slug , file} ) => {
    const endpointUrl = `${BASE_URL}/topicpage/${slug}/logo`
    return getS3SingedUploadUrlAndUpload({ imageFile: file, endpointUrl })
  },

  deleteTopicPageImage: (_, { slug , imageId} ) => {
    return axios.delete(`${BASE_URL}/topicpage/${slug}/images/${imageId}`)
    .then((response) => {
      return response.data
    })
  },

  mostRecentPages: () => {
    return axios.get(`${BASE_URL}/topicpage/recentPages`).then((response) => {
      return response.data
    })
  },

  publishTopicPage: (_, { slug } ) => {
    return axios.put(`${BASE_URL}/topicpage/${slug}/publish`)
    .then((response) => {
      return response.data
    })
  },

  unpublishTopicPage: (_, { slug } ) => {
    return axios.put(`${BASE_URL}/topicpage/${slug}/unpublish`)
    .then((response) => {
      return response.data
    })
  }
}
