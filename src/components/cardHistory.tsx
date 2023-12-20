import { HistoryItem } from "../shared/types/HistoryItem";


const CardHistory = ({itemProps}: 
    {itemProps: HistoryItem
    }
    ) => {
    return (
            <div className="py-6 border-t-2">
                <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dd className="text-base leading-6 text-neutral-400">
                                {new Date(itemProps.event_date_utc)?.toLocaleDateString()}
                            </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold leading-8 ">
                                    <a className="text-gray-600 hover:text-gray-800" href={itemProps.links?.article} target="_blank">{itemProps.title}
                                    </a>
                                    </h2>
                                </div>
                                <div className="max-w-none text-gray-500">
                                {itemProps.details}
                                </div>
                            </div>
                            <div className="text-base font-medium leading-6">
                              {itemProps.links?.article && 
                              <a className="text-sky-500 hover:text-sky-700" target="_blank" href={itemProps.links.article}>Read more →
                              </a>
                              }  
                            </div>
                        </div>
                    </div>
                </article>
            </div>
    )
}
export default CardHistory;