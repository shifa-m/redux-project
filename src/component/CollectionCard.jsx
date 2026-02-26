import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToast , removeCollection  } from '../redux/features/collectionSlice'


const CollectionCard = (item) => {

            const dispatch=useDispatch()
            const removeFromCollection=({item})=>{
                        dispatch(removeCollection(item.id))
                        dispatch(removeToast())

            }


            return (
                        <div className='w-[18vw]  relative  h-80 bg-white  rounded-xl overflow-hidden'>
                                    <a target='_blank' className='h-full ' href={item.url}></a>
                                    {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.thumbnail} alt='' /> : ''}
                                    {item.type == 'video' ? <video autoPlay loop muted src={item.src}></video> : ''}

                                    <a />
                                    <div id='bottom' className='flex justify-between items-center h-[35%] gap-3 w-full px-6 py-6 absolute bottom-0 text-white'>
                                                <h2 className='text-lg font-semibold capitalize text-white h-14 overflow-hidden'>{item.title}</h2>
                                                <button
                                                            onClick={() => {
                                                                        removeFromCollection(item)
                                                            }

                                                            } className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-2 cursor-pointer font-medium'>Remove</button></div>

                        </div>
            )
}

export default CollectionCard
