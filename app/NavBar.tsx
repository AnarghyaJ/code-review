import { page } from '../types/ModuleTypes';
import NavBarPage from './navbar/NavBarPage';
export default function NavBar() {
  const allPages: Array<page> = ['home', 'reviews']
  return (
    <div className='h-screen p-1 bg-dark-secondary w-1/24 z-20'>
      {
        allPages.map((page, index) => {
          return (
            <NavBarPage key={index} index={index} page={page} />
          )
        })
      }
    </div>
  )
}
