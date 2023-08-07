import NavBarPage from './navbar/NavBarPage';

export default function NavBar() {
  const allPages = ['Home', 'Reviews']
  return (
    <div className='h-screen  bg-dark-secondary w-1/24 z-20'>
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
