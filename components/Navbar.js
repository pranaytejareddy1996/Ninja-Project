import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <nav>
            <div className="logo">
            <Image src='/ninja.jpg' width={128} height={100}/>
            </div>
            <Link href='/'><a>home</a></Link>
            <Link href='/about'><a>about</a></Link>
            <Link href='/ninjas'><a>ninjas</a></Link>                   
        
        </nav>
        
    )
}

export default Navbar
