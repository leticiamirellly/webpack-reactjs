export interface HistoryItem {
    details: string,
    event_date_unix: number,
    event_date_utc: 'string',
    id: string,
    title: string,
    links: {
        article: string;
    }
}