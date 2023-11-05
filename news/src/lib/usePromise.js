import { useEffect, useState } from "react";

export default function usePromise(promiseCreator, deps){
  const [loading, setLoading] = useState(false)//대기중, 불리언처리
  const [resolved, setResolved] = useState(null); //완료결과, 객체처리
  const [error, setError] = useState(null) //실패 결과, 객체처리

useEffect(() => {
  const process = async() => {
    setLoading(true);
    try{
      const resolved = await promiseCreator();
      setResolved(resolved)
    }catch(e) {
      setError(e)
    }
    setLoading(false)
  }
  process()
}, deps);
return [loading, resolved, error]
}