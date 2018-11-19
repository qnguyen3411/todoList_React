import axios from 'axios';

export default (id) => {
  return axios.put('/api/todos/' + id, {})
    .then(() => {})
}