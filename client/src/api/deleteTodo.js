import axios from 'axios';

export default (id) => {
  return axios.delete('/api/todos/' + id)
    .then(() => {})
}