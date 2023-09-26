import logo from '../assets/binarySchoolLogo.png'
import Image  from 'next/image'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], weight: '700' })

const Header = () => {
    return (
        <header className="flex justify-between w-full flex-row">
            <Image src={logo} height={150} width={150}/>
            <nav className={`text-lg ${quicksand.className} py-12 pl-20 pr-4`}>
                <ul className="w-full flex gap-10">
                    <li>
                        <a href="#">Haqqında</a>
                    </li>
                    <li>
                        <a href="#">Sponsorlar</a>
                    </li>
                    <li>
                        <a href="#">Spikerlər</a>
                    </li>
                    <li>
                        <a href="#">Əlaqə</a>
                    </li>
                    <li>
                        <a href="#"></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
