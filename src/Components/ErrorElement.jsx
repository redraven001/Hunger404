import React from 'react'
import {useRouteError} from "react-router-dom";

export default function ErrorElement() {
    const err=useRouteError();
    console.log("error in routing",err);
  return (
    <div>
      <h1 className='text-center'>{`OPSS we ran into a problem: ${err?.error?.message}`}</h1>
    </div>
  )
}
