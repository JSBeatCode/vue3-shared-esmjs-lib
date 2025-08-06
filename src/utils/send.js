import axios from 'axios'

export async function send(url, data = {}, config = {}) {
  try {
    const response = await axios.post(url, data, config)
    return response.data
  } catch (error) {
    console.error('[shared-lib:send]', error)
    throw error
  }
}
