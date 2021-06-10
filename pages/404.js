import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=> {
            // router.go(-1)
            router.push('/');
        },5000)
    }, [])
    return (  
        <div className='not-found'>
            <h1>Oops....</h1>
            <h2>This Page cannot be found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
            <h1>Redirecting to Homepage in 5...</h1>
        </div>
    )
        
}
 
export default NotFound;