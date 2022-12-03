export default function JobFilters({
	filters,
	handleFilter,
	handleClearFilters,
}) {
	return (
		<div className="flex justify-between items-center mx-4 -mt-24 p-4 gap-4 mb-8 bg-white rounded shadow-lg">
			<div className="flex flex-wrap gap-4">
				{filters.map((filter) => (
					<span className=" bg-lightGrayishCyanFilter flex justify-center items-center font-bold text-center rounded-md">
						<span className="text-darkCyan py-1 px-2">{filter}</span>
						<img
							onClick={() => handleFilter(filter)}
							className="bg-darkCyan hover:bg-black p-2 rounded-r-md cursor-pointer"
							src={process.env.PUBLIC_URL + '/images/icon-remove.svg'}
						/>
					</span>
				))}
			</div>
			<button
				onClick={handleClearFilters}
				className=" text-darkGrayishCyan font-bold text-center  rounded-md hover:text-darkCyan hover:underline cursor-pointer">
				Clear
			</button>
		</div>
	);
}
