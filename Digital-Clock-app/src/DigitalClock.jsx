import { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{time.toLocaleTimeString()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;