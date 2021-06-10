export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params : { id : ninja.id.toString() }
        }
    })

    return {
        paths, 
        fallback : false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();

    return {
        props : {ninja:data}
    }
}


import React from 'react'

function Deatils({ninja}) {
    return (
        <div>
            <h1>Name of the Ninja : {ninja.name}</h1>
            <p>Email Id : {ninja.email}</p>
            <p>His personal website : {ninja.website}</p>
            <p>Current location : {ninja.address.city}</p>

        </div>
    )
}

export default Deatils
