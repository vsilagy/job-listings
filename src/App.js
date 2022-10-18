import { useState, useEffect } from 'react'
import JobBoard from "./components/JobBoard";
import data from "./assets/data.json"

export default function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  return (
    <div>
      {(jobs.map((job) => <JobBoard job={job} key={job.id}/>))}
    </div>
  );
}
