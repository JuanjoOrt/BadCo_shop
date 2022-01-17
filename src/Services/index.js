import { API } from './constants'

export default function fetchApi (method, path, body) {
  return fetch(`${API}/${path}`, {
    headers: {
      'Content-type': 'application/json'
    },
    method,
    body: JSON.stringify(body)
  }).then(response => response.json())
}
