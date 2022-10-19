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
    <section className="max-w-screen-xl mx-auto my-10 bg-lightGrayishCyanBg">
      <div className="flex flex-col md:flex-row bg-white mx-4 p-6 gap-4 rounded-md shadow-lg">
        <div className="-mt-12 w-14 md:mt-0 md:w-24">
          <img src={logo} alt={company} ></img>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-darkCyan font-bold" >{company}</p>
            
          </div>
          <h2 className="text-xl font-bold hover:text-darkCyan cursor-pointer">{position}</h2>
          <p className="text-darkGrayishCyan"> {postedAt} • {contract} • {location}</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-start items-center border-t border-t-darkGrayishCyan pt-6 md:border-none md:justify-end md:ml-auto md:pt-0">
            {filters ? (filters.map((filter) => <span className="text-darkCyan bg-lightGrayishCyanFilter font-bold text-center  px-2 py-1 rounded-md hover:text-lightGrayishCyanBg hover:bg-darkCyan cursor-pointer">{filter}</span>)) : ""}
        </div>
      </div>
    </section>
  )
}