import { Carousel as CarouselAntd } from 'antd';
import { Rocket } from '../shared/types/Rocket';
import type { DotPosition } from 'antd/es/carousel';
import { useState } from 'react';


const Carousel = ({ props }:
    {
        props: Rocket[] | undefined
    }) => {
    const [dotPosition, setDotPosition] = useState<DotPosition>('top');
    return (
        <div>
            <CarouselAntd  dotPosition={dotPosition}>
                {!!props?.length && props.map((rocket: Rocket) =>
                    <div className='p-8 bg-slate-800 rounded-xl' key={rocket.id}>
                        <div className='h-80 w-full'>
                            <img className='rounded h-full w-full' src={rocket.flickr_images[0]} />
                        </div>
                        <ol className='items-center h-64'>
                            <li className="relative mb-6 sm:mb-0">
                               <div className="mt-3 sm:pe-8">
                                    <h2 className="py-2 text-lg font-semibold text-gray-300">{rocket.name}</h2>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-600">{new Date(rocket.first_flight)?.toLocaleDateString()}</time>
                                    <p className="text-base font-normal text-gray-400 overflow-auto">{rocket.description}</p>
                                    <a className="text-sky-500 hover:text-sky-700" target="_blank" href={rocket.wikipedia}>Read more →
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </div>
                )}


            </CarouselAntd>
        </div>

    )
}

export default Carousel;