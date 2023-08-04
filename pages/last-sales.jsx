import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const { data, error } = useSWR('https://next-rendering-default-rtdb.firebaseio.com/sales.json', (url) => fetch(url).then((res) => res.json()));

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!sales || !data) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
