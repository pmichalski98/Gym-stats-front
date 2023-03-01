import {useEffect, useState} from "react";

const useCountdown = (startValue:number, endValue:number, interval:number):number => {
    const [countDown, setCountDown] = useState(startValue);

    useEffect(() => {
        const counting = setInterval(() => {
            if (countDown <=endValue) {
                setCountDown(countDown + 1);
            }
        }, interval);

        return () => clearInterval(counting);
    }, [countDown]);

    return countDown;
};

export default useCountdown;