import axios from 'axios';
export default (text) => {
  return axios.post('/api/todos/', {text})
    .then(({data}) => data)
}