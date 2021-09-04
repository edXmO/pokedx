const Dot = ({ active } : {active: Boolean}) => {
  return (
    <div className={`h-2 w-2 mx-1 rounded-lg  border-2 border-black ${active ? 'bg-black' : 'bg-white'}`} />
  )
}

export default Dot;