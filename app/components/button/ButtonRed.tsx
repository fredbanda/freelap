interface ButtonRedProps {
    text: string
}

const ButtonRed = ({text}: ButtonRedProps) => {
  return (
    <>
    <button className='rounded-md px-4 py-1 text-[22px] md:px-8 md:py-2.5 overflow-hidden group bg-red-600 relative hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all duration-300 ease-out'>
    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 ease transform translate-x-12 bg-white opacity-10 group-hover:-translate-x-32 rotate-12'></span>
    <span className="relative">{text}</span>
    </button>
    </>
  )
}

export default ButtonRed
