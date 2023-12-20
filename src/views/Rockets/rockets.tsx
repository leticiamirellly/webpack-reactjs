import { useState, useEffect } from 'react';
import { useRequest } from "./../../shared/hooks/useRequest";
import Carousel from '../../components/carouselRocket';
import { Rocket } from '../../shared/types/Rocket';
import Loading from '../../components/loading';
import ErrorRequest from '../../components/errorRequest';


const Rockets = () => {
  const [rocketsData, setRocketsData] = useState<Rocket[] | undefined>([]);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const { getRequest } = useRequest();

  
  useEffect(() => {
    const fetchData =  async () => {
      setLoading(true);
      try {
        const data = await getRequest<Rocket[]>('/rockets');
        setRocketsData(data)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true)
      }
      };
      fetchData()
  }, []);
      return (
        <section>
          <div className='space-y-6'>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl md:text-6xl">
                SpaceX Rockets
            </h1>
            <div className='border-t-2 h-4 w-full'></div>
            </div>
            {
            !!rocketsData?.length &&
            <div className='mt-6'>
             <Carousel props={rocketsData}/>
            </div>
            } 
          {loading && <Loading/>}
          {error && <ErrorRequest/>}
        </section>
      );
    
}

export default Rockets;