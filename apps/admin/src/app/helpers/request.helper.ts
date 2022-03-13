import axios, {Method} from "axios";

axios.defaults.baseURL = process.env["API_BASE_URL"] || 'http://localhost:3333/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetcher = async (
  url: string,
  method: Method,
  body?: Record<string, any>
) => {
  try {
    const {data} = await axios.request({
      url,
      method,
      data: body || undefined,
    });
    return data;
  } catch (e) {
    throw new Error("Error returning Data");
  }
}
