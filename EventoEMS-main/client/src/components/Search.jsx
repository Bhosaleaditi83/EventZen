import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';


const Search = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isSearchPage,setIsSearchPage] = useState(false)
    const [ isMobile ] = useMobile()
    //const params = useLocation()
    //const searchText = params.search.slice(3)

    useEffect(()=>{
        const isSearch = location.pathname === "/search"
        setIsSearchPage(isSearch)
    },[location])


    const redirectToSearchPage = ()=>{
        navigate("/search")
    }

    const handleOnChange = (e)=>{
        const value = e.target.value
        const url = `/search?q=${value}`
        navigate(url)
    }

   // console.log("search", isSearchPage)

  return (
    <div className='w-full  min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200 '>
        <div>
            {
                (isMobile && isSearchPage ) ? (
                    <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
                        <FaArrowLeft size={20}/>
                    </Link>
                ) :(
                    <button className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
                        <IoSearch size={22}/>
                    </button>
                )
            }
        </div>
        <div className='w-full h-full'>
            {
                !isSearchPage ? (
                     //not in search page
                     <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
                        <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Search "Music Concerts"',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Search "Dance Events"',
                                    1000,
                                    'Search "Food Festivals"',
                                    1000,
                                    'Search "Wedding Party"',
                                    1000,
                                    'Search "Movie Screening"',
                                    1000,
                                    'Search "Theater Shows"',
                                    1000,
                                    'Search "Birthday Party"',
                                    1000,
                                    'Search "Art Exhibitions"',
                                    1000,
                                    'Search "Sports Events"',
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                     </div>
                ) : (
                    //when i was search page
                    <div className='w-full h-full'>
                        <input
                            type='text'
                            placeholder='Search for Classical Music Event.'
                            autoFocus
                            defaultValue={searchText}
                            className='bg-transparent w-full h-full outline-none'
                            onChange={handleOnChange}
                        />
                    </div>
                )
            }
        </div>
        
    </div>
  )
}

export default Search