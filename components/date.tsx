import { format } from 'date-fns'
import { Date as PrismicDate } from 'prismic-reactjs'

type Props = {
  dateString : string
}
export default function Date({ dateString }:Props) {
  const date = PrismicDate(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}