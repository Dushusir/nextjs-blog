import {parseISO, format } from 'date-fns'

export default function Date({ dateString }){
    // console.info('date===',dateString)
    const date = parseISO(dateString)
    
    return <time dateTime={dateString}>{format(date,'LLL d,yyyy')}</time>
}