import React,{useState,useRef,useEffect} from 'react';

const MutableRefs = () => {
    const [timer,setTimer] = useState(0)
    const intervalref = useRef<number|null>(null)
    const stopTimer = () => {
        if(intervalref.current) window.clearInterval(intervalref.current)
    }
    useEffect(()=>{
        intervalref.current = window.setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000)
        return () => {
            stopTimer()
        }
    })
  return (
    <div>
        {timer}
        <button onClick={()=>stopTimer()}>ClearInterval</button>
    </div>
  )
}

export default MutableRefs