import React from 'react'
import CountDown from 'react-native-countdown-component';

interface CountdownProps {
    finishedGameBar: boolean,
    onFire: boolean,
    onFinish: any,
    secondsGame: number,
    secondsGameOnFire: number
}


const Countdown: React.FunctionComponent<CountdownProps> = ({ finishedGameBar, onFire, onFinish, secondsGame, secondsGameOnFire }) => {
    return (
        <CountDown
            until={finishedGameBar ? 1 : onFire ? secondsGameOnFire : secondsGame}
            onFinish={onFinish}
            size={20}
            timeToShow={['M', 'S']}
            timeLabels={{ m: 'Minutes', s: 'Seconds' }}
            timeLabelStyle={{ fontFamily: 'Arcade-Classic', color: 'black' }}
            digitStyle={{ fontFamily: 'Arcade-Classic', backgroundColor: onFire ? '#9C2A00' : '#FFF' }}
            digitTxtStyle={{ fontFamily: 'Arcade-Classic', color: onFire ? '#FFF' : '#1CC625' }}
        />
    )
}

Countdown.defaultProps = {
    finishedGameBar: false,
    onFire: false,
    onFinish: () => { console.log('Finished') },
}

export default Countdown