import axios from 'axios';

export default async function getProducts(): Promise<Product[]> {
  const { data } = await axios.get('/cats.json');

  return data;
}
