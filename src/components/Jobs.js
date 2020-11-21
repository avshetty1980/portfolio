import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        desc {
          id
          name
        }     
        
        position
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const [ value, setValue ] = useState(0)

  const { 
    //alias jobs
    allStrapiJobs:{nodes:jobs},
       } = data

    const { company, position, date, desc} = jobs[value]

    //console.log(company, desc, date, position)

  return <section className="section jobs">
    <Title title="experience" />
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container">
        {jobs.map((job, index) => {
          return (
          <button
            key={job.strapiId}
            onClick={() => setValue(index)}
            className={`job-btn ${index === value && "active-btn"}`}
            >
              {job.company}
          </button>
          )
        })}
      </div>
      {/* jobs info */}
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item) => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })
        }

      </article>

    </div>
    <Link to="/about" className="btn center-btn">
      More Info...
    </Link>
  </section>
}

export default Jobs
