import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState("00");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValid(false);
  };
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/live`; 
    navigate(path);
  }

  const handleSubmit = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(emailPattern)) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        // Start the countdown timer
        setCountdown(3);

        // After 3 seconds, redirect
        setTimeout(() => {
          setIsRedirecting(true);
          routeChange()
        }, 3000);
      }, 2000);
    } else {
      setIsValid(true);
    }
  };

  useEffect(() => {
    let timer;

    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1);
     
      },  1000);
      
    }

    return () => {
      clearInterval(timer);
      
    };  
  }, [countdown]);

  return (


    <>
    
<div className="timer-wraaper">
            <div className="min-cont">
           
              <span>
                <h1>00</h1>
              </span>{" "}
              <span>Minutes</span>
            </div>
            <div className="time-center">
              {" "}
              <h1>:</h1>
            </div>
            <div className="sec-cont">
              {" "}
              <span>
                <h1> {countdown !== 0 && (
        <div className="countdown-timer">{countdown}</div>
      )}    </h1>
              </span>{" "}
              <span>Seconds</span>
            </div>
          </div>
              <div className="input-sec">
              <p>
              {" "}
              Be the first to know! Share your email and We'll notify you when
              it's live
            </p>
    <div className="input-ar">
        <div className="email-arr">
        <input type="email" value={email} onChange={handleEmailChange} />
       {isValid && <div className="error">invalid email</div>}
        </div>
   <div className="button-cont">
      <button onClick={handleSubmit} disabled={isLoading || isRedirecting   }>
        {isLoading ? (
          <div className="loader"></div>
        ) : isRedirecting ? (
          '✓'
        ) : (
          'Notify Me'
        )}
      </button>
      </div>
     
    </div>
    </div>
   
    </>
  );
}

export default EmailForm;
