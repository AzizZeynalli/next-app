import { Inter } from 'next/font/google'
import Image  from 'next/image'
import logo from '../assets/binarySchoolLogo.png'
import Header from '@components/Header'


const inter = Inter({ subsets: ['latin'], weight: '800' })

const Home = () => {
    return (
        <>
            <Header />
            <section className="w-full flex justify-center flex-col">
                <h1 className={`tracking-wide leading-[1.4] text-6xl font-extrabold text-center ${inter.className}`}>Empowering
                    <br className="max-md:hidden" />
                    <span className="text-center bg-clip-text text-transparent bg-gradient-to-br from-indigo-900 via-cyan-600 to-sky-300">AI Innovation</span>
                    <br className="max-md:hidden" />
                    Together
                </h1>
            </section>
        </>
    );
}

export default Home
