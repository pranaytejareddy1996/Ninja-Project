import {useState} from 'react'
import Head from 'next/head'

export default function About() {
    const [name,setName] = useState('pranay')
    const changeName = () => {
        setName('teja')
    }
    return (
        <>
        <Head>
            <title>About Page</title>
            <meta name='keywords' content='ninjas'/>
        </Head>
        <div>
            <h1>About Me</h1>
            <p>Training the ninjas has been in my family from a long time. My great grand father used to train the expert ninjas and assign them to the appropriate customers. </p>
            <p>My ancestors moved from Japan to India in 18th century.Initially for the living they created a ashram for training the ninjas. As the time goes it become an inherent profession in my family.</p>
            <p>Now i am represnting my family and created an online website using Next Js to assgin my own ninjas whom i trained personally for the customers</p>
        </div>
    </>
    )
  }
