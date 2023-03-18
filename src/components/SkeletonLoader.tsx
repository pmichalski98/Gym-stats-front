import React from 'react';
import classNames from "classnames";

interface Props {
    times: number;
    className?: string
}

function SkeletonLoader({times, className}: Props) {



    const outerClasses = classNames(
        'relative',
        'overflow-hidden',
        // 'bg-gray-200',
        'bg-cyan',
        'rounded',
        'mb-2.5',
        className,
    );
    const innerClasses = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-cyan',
        'via-darkerCyan',
        'to-cyan',
        // 'from-gray-200',
        // 'via-white',
        // 'to-gray-200'
    );

    return (
        <>
            {
                Array(times).fill(0).map((_, i) => {
                    return <div className={outerClasses} key={i}>
                        <div className={innerClasses}/>
                    </div>
                })
            }
        </>
    )
}

export default SkeletonLoader;