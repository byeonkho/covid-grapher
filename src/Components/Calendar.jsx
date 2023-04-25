import Calendar from "react-calendar";
import "../calendar.css";

function Cal(props) {
    return (
        <div>
            <h1 className="text-center">React Calendar with Range</h1>
            <div className="calendar-container">
                <Calendar
                    onChange={props.setDate}
                    value={props.date}
                    selectRange={true}
                    maxDate={new Date()}
                />
            </div>
            <div>
                {props.date.length > 0 ? (
                    <p className="text-center">
                        <span className="bold">Start:</span>{" "}
                        {props.date[0].toDateString()}
                        &nbsp;|&nbsp;
                        <span className="bold">End:</span>{" "}
                        {props.date[1].toDateString()}
                    </p>
                ) : (
                    <p className="text-center">
                        <span className="bold">Default selected date:</span>{" "}
                        {props.date.toDateString()}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Cal;
