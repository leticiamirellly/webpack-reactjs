import { useState, useEffect } from 'react';
import { useRequest } from "./../../shared/hooks/useRequest";
import Loading from '../../components/loading';
import CardHistory from '../../components/cardHistory';
import { HistoryItem } from '../../shared/types/HistoryItem';
import ErrorRequest from '../../components/errorRequest';
import { connectionAPIGet } from '../../shared/api/connection';

const Home = () => {
    const [historyData, setHistoryData] = useState<HistoryItem[] | undefined>([]);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const { getRequest } = useRequest();

    useEffect(() => {
      const fetchData =  async () => {
        setLoading(true);
        try {
          const data = await getRequest<HistoryItem[]>('/history');
          setLoading(false);
          setError(false)
          setHistoryData(data);
        } catch (error) {
          setLoading(false);
          setError(true)
        }
        };
        fetchData()
    }, []);

      return (
        <section>
          <div className='space-y-6 pb-8 pt-6 md:space-y-5'>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Detailed info on SpaceX historical events
            </h1>
            <p className='text-lg leading-7 text-gray-500'>
              Some of history's latest events
            </p>
          </div>
          {
          !!historyData?.length && historyData?.map((item: HistoryItem) => 
            ( <CardHistory itemProps={item} key={item.id}/>)) 
          }
          {loading && <Loading/>}
          {error && <ErrorRequest/>}
        </section>
      );
    
}

export default Home;