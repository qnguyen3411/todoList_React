import axios from 'axios';

export default function getTodos() {
  return axios.get('/api/todos')
    .then(({data}) => data.map(({ _id, text, finished }) =>
      ({ id: _id, text, finished })
    ));
}