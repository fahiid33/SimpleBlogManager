import { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import HomePage, { getStaticProps as getHomePageStaticProps } from '../pages/index';

type HomeProps = Parameters<typeof getHomePageStaticProps>[0];

const fetchData = async (): Promise<HomeProps> => {
  const { props } = await getHomePageStaticProps({});
  return props;
};

const FirstPage: React.FC = () => {
  const [data, setData] = useState<HomeProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <HomePage {...data} />;
};

export default FirstPage;
