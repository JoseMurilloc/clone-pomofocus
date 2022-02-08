import React, { useState, useEffect } from 'react'
import { Status } from '../../commons/types/status';
import { ContentTime, ButtonCountDown } from "./styles";

interface CountdownProps {
  typePomo: Status
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>
  startCountdown: () => void;
  active: boolean,
  activeButton: boolean,
}

export function Countdown({
  typePomo, 
  setActiveButton, 
  startCountdown, 
  active,
  activeButton
}: CountdownProps) {
  const [time, setTime] = useState(25*60);

  
  useEffect(() => {
    switch (typePomo) {
      case 'pomodoro':
        setTime(25*60);
        return;
      case 'short_break':
        setTime(5*60);
        return;
      case 'long_break':
        setTime(15*60);
        return;
      default:
        setTime(25*60);
        return;
    }
  }, [typePomo])

  useEffect(() => {
    if (active && time > 0) { 
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

  const {minutes, seconds} = React.useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return { minutes, seconds}
  }, [time])

  const [minutesLeft, minutesRight] = React.useMemo(() => {
    return String(minutes).padStart(2, '0').split('');
  }, [minutes])

  const [secondLeft, secondRight] = React.useMemo(() => {
    return String(seconds).padStart(2, '0').split('');
  }, [seconds])

  return (
    <ContentTime>
      <div className="time">
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <ButtonCountDown 
        typePomo={typePomo} 
        activeButton={activeButton} 
        onClick={startCountdown} 
      >
      {!activeButton ? 'START' : 'STOP'}
    </ButtonCountDown>
    </ContentTime>
  )
}