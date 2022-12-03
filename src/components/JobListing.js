export default function JobListing({ job, handleTagSearch }) {
	let tags = [job.role, job.level, ...job.languages, ...job.tools];

	return (
		<div className="bg-lightGrayishCyanBg my-10 md:my-5 first:mt-8 ">
			<div
				className={`flex flex-col md:flex-row bg-white mx-4 p-7 gap-6 rounded shadow-lg ${
					job.featured && 'border-l-4 border-darkCyan'
				}`}>
				<div className="-mt-12 w-14 h-auto md:w-20 md:mt-0 lg:w-24">
					<img
						src={process.env.PUBLIC_URL + job.logo}
						alt={job.company}
					/>
				</div>
				<div className="flex flex-col gap-4 justify-between  md:gap-2 ">
					<p className="text-sm text-darkCyan font-bold  md:text-base ">
						{job.company}
						{job.new && (
							<span className="text-xs py-2 px-3 ml-4 bg-darkCyan text-lightGrayishCyanBg md:text-[13px] uppercase rounded-full">
								New!
							</span>
						)}
						{job.featured && (
							<span className="text-xs py-2 px-3 mx-2 bg-black text-lightGrayishCyanBg md:text-[13px] uppercase rounded-full">
								Featured
							</span>
						)}
					</p>
					<h2 className="text-base font-bold hover:text-darkCyan cursor-pointer md:text-lg lg:text-xl">
						{job.position}
					</h2>
					<p className=" text-sm text-darkGrayishCyan md:text-base">
						<span className="lg:mr-2">{job.postedAt}</span> •{' '}
						<span className="lg:mx-2">{job.contract}</span> •{' '}
						<span className="lg:ml-2">{job.location}</span>
					</p>
				</div>
				<div className="flex flex-wrap gap-x-4 gap-y-2 justify-start items-center border-t border-t-darkGrayishCyan pt-4 text-sm md:text-base md:border-none md:justify-end md:ml-auto md:pt-0">
					{tags
						? tags.map((tag, index) => (
								<span
									key={index}
									onClick={() => handleTagSearch(tag)}
									className="text-darkCyan bg-lightGrayishCyanFilter font-bold text-center  py-1 px-2 rounded-md hover:text-lightGrayishCyanBg hover:bg-darkCyan cursor-pointer">
									{tag}
								</span>
						  ))
						: ''}
				</div>
			</div>
		</div>
	);
}
