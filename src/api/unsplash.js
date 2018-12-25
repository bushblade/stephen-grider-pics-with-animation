import axios from 'axios'

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: 'Client-ID 372c817c54db5650c3ca9ab825aa1b164a8750c2cc53cb8baf02d14ffb9e04f6'
  }
})
