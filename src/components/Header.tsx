import { Suspense } from 'react'
import { 
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
} from '@nextui-org/react'
import Link from 'next/link'
import HeaderAuth from './HeaderAuth'
import SearchInput from './SearchInput'

export default function Header() {
  return (
    <Navbar className='shadow mb-6'>
        <NavbarBrand>
            <Link href='/' className='font-bold'>Reddit Clone Home</Link>
        </NavbarBrand>

        <NavbarContent justify="center">
            <NavbarItem>
                <Suspense>
                   <SearchInput />
                </Suspense>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent justify='end'>
            <HeaderAuth />
        </NavbarContent>
    </Navbar>
  )
}
