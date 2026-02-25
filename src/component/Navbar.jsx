import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between  px-10 py-6 bg-(--c2) text-2xl font-semibold'>
                        <h2 className='font-medium text-2xl'>MediaSearch</h2>
                        <div className='text-xl  gap-5 items-center'></div>
                        <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to='/'>Search</Link>
                        <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' tp='/collection'>Collection</Link>
                        <div>

                        </div>
            </div>
  )
}

export default Navbar
