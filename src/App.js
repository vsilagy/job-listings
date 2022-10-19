import { useState, useEffect } from 'react';
import JobBoard from './components/JobBoard';
import data from './assets/data.json';
import Header from './components/Header';

export default function App() {
	const [jobs, setJobs] = useState([]);
	const [filters, setFilters] = useState([]);

	useEffect(() => setJobs(data), []);

	const jobsFiltering = (jobs) => {
		const { role, level, languages, tools } = jobs;
		const tags = [role, level, ...languages, ...tools];

		if (filters.length === 0) {
			return true;
		}
		return tags.some((tag) => filters.includes(tag));
	};

	const handleTagClick = (tag) => {
		if (filters.includes(tag)) return;
		setFilters([...filters, tag]);
	};

	const handleFilterClick = (clickedFilter) => {
		setFilters(filters.filter((filter) => filter !== clickedFilter));
	};

	const filteredJobs = jobs.filter(jobsFiltering);

	return (
		<>
			<Header />
			<main className="my-16 max-w-screen-lg mx-auto">
				{filters.length > 0 && (
					<div className="flex justify-between items-center bg-white mx-4 -mt-24 p-4 gap-4 mb-8 rounded shadow-lg">
						<div className="flex flex-wrap gap-4">
							{filters.map((filter) => (
								<span className=" bg-lightGrayishCyanFilter flex justify-center items-center font-bold text-center rounded-md">
									<span className="text-darkCyan py-1 px-2">
										{filter}
									</span>
									<img
										onClick={() => handleFilterClick(filter)}
										className="bg-darkCyan hover:bg-black p-2 rounded-r-md cursor-pointer"
										src="/images/icon-remove.svg"
									/>
								</span>
							))}
						</div>
						<button
							onClick={() => setFilters([])}
							className=" text-darkGrayishCyan font-bold text-center  rounded-md hover:text-darkCyan hover:underline cursor-pointer">
							Clear
						</button>
					</div>
				)}

				{filteredJobs.map((job) => (
					<JobBoard
						job={job}
						key={job.id}
						handleTagClick={handleTagClick}
					/>
				))}
			</main>
		</>
	);
}
