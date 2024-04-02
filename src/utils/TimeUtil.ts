import { useEffect, useState } from 'react';

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownTimerResType {
  timeRemaining: TimeRemaining;
  isFinished: boolean;
}

export function calculateTimeRemaining(deadline: string): TimeRemaining {
  const now = new Date();
  const targetTime = new Date(deadline);
  const difference = targetTime.getTime() - now.getTime();

  if (difference < 0 || isNaN(difference)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export const useCountdownTimer = (deadline: string): CountdownTimerResType => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining(deadline));
    if (deadline) {
      const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(deadline));
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(timer);
    }
  }, [deadline]);

  const isFinished: boolean =
    timeRemaining.hours === 0 &&
    timeRemaining.seconds === 0 &&
    timeRemaining.minutes === 0;

  return { timeRemaining, isFinished };
};
