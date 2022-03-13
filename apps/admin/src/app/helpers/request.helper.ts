import axios, {Method} from "axios";


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
