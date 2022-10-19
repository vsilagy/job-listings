export default function JobBoard({
	job: {
		company,
		logo,
		new: newJob,
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
	handleTagClick,
}) {
	let tags = [role, level, ...languages, ...tools];
	console.log(tags);

	return (
		<div className="bg-lightGrayishCyanBg my-10 md:my-5 first:mt-8 ">
			<div
				className={`flex flex-col md:flex-row bg-white mx-4 p-7 gap-6 rounded shadow-lg ${
					featured && 'border-l-4 border-darkCyan'
				}`}>
				<div className="-mt-12 w-14 md:mt-0 md:w-24">
					<img src={logo} alt={company}></img>
				</div>
				<div className="flex flex-col gap-4 justify-between  md:gap-2 ">
					<p className="text-sm text-darkCyan font-bold md:text-base ">
						{company}
						{newJob && (
							<span className="text-xs p-2 ml-6 bg-darkCyan text-lightGrayishCyanBg md:text-[13px] uppercase rounded-full">
								New!
							</span>
						)}
						{featured && (
							<span className="text-xs p-2 mx-2 bg-black text-lightGrayishCyanBg md:text-[13px] uppercase rounded-full">
								Featured
							</span>
						)}
					</p>
					<h2 className="text-base font-bold hover:text-darkCyan cursor-pointer md:text-xl">
						{position}
					</h2>
					<p className=" text-sm text-darkGrayishCyan md:text-base">
						<span className="lg:mr-2">{postedAt}</span> •{' '}
						<span className="lg:mx-2">{contract}</span> •{' '}
						<span className="lg:ml-2">{location}</span>
					</p>
				</div>
				<div className="flex flex-wrap gap-4 justify-start items-center border-t border-t-darkGrayishCyan pt-6 md:border-none md:justify-end md:ml-auto md:pt-0">
					{tags
						? tags.map((tag) => (
								<span
									onClick={() => handleTagClick(tag)}
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
