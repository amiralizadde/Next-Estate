import React from 'react'

export default function index({name}) {
  return (
    <div>add new state...</div>
  )
}


export async function getStaticProps(context) {

    console.log('context add new State page ->' , context.params);
    
    return{
        props:{name:'amir'}
    }
}