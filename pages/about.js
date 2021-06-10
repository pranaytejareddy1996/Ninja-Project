import {useState} from 'react'
import Head from 'next/head'

export default function About() {
    
    return (
        <>
        <Head>
            <title>About Page</title>
            <meta name='keywords' content='ninjas'/>
        </Head>
        <div>
            <h1>About Me</h1>
            <p>Training the ninjas has been in my family for a long time. My great grand father used to train the expert ninjas and assign them to the appropriate customers. </p>
            <p>My ancestors moved from Japan to India in 18th century.Initially for the living they created an ashram for training the ninjas. As the time progress this became an inherent profession in my family.</p>
            <p>Now i am representing my family and created an online website using Next Js to assign my own ninjas whom i trained personally to the customers</p>
        </div>
    </>
    )
  }
