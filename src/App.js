import { useState, useEffect } from 'react'
import JobBoard from "./components/JobBoard";
import data from "./assets/data.json"
import Header from './components/Header';

export default function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  return (
    <>
      <Header />
      <div className='my-16'>
        {(jobs.map((job) => <JobBoard job={job} key={job.id}/>))}
      </div>
    </>
  );
}
