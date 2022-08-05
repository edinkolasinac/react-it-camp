import { differenceInMilliseconds } from "date-fns";

const CountDown = (props) => {
    const { toDate, fromDate } = props;
    const currentDate = newDate();

    if (toDate) {
        const differnce = differenceInMilliseconds(
            currentDate,
            newDate
        )
    }
    return <div>{current.Date.toDateString()}</div>


}

export default CountDown;
