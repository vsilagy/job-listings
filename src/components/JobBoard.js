export default function JobBoard( {
  job : {
    company,
    logo,
    newJob,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) {

  let filters = []
  filters.push(role, level)
  filters = [...filters,...languages, ...tools];
    
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex bg-white mx-4 my-8 p-6 gap-4 shadow-lg">
        <div>
          <img src={logo} alt={company} ></img>
        </div>
        <div className="flex flex-col justify-between">
          <h4 className="text-darkCyan font-bold">{company}</h4>
          <h3 className="text-xl font-bold">{position}</h3>
          <p className="text-darkGrayishCyan"> {postedAt} • {contract} • {location}</p>
        </div>
        <div className="flex ml-auto items-center ">
            {filters ? (filters.map((filter) => <span className="text-darkCyan font-bold text-center bg-lightGrayishCyanFilter ml-3 px-2 py-1 rounded-md">{filter}</span>)) : ""}
        </div>
      </div>
    </div>
  )
}