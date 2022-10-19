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
			<main className="my-16 max-w-screen-xl mx-auto">
				{filters.length > 0 && (
					<div className="flex justify-between items-center bg-white mx-4 -mt-28 mb-12 p-8 gap-6 rounded shadow-lg">
						<div>
							{filters.map((filter) => (
								<span
									onClick={() => handleFilterClick(filter)}
									className="text-darkCyan bg-lightGrayishCyanFilter font-bold text-center  px-2 py-2 mx-2 rounded-md">
									{filter}
								</span>
							))}
						</div>
						<button
							onClick={() => setFilters('')}
							className=" text-darkGrayishCyan font-bold text-center  px-2 py-1 rounded-md hover:text-darkCyan hover:underline cursor-pointer">
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
