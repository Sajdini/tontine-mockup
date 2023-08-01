import { getProjects } from '@/sanity/sanity-utils'
import React from 'react'

const Projects= async() => {

  const projects=await getProjects()
  console.log(projects)
  return (
    <div>is there something {projects[0]?.title}</div>
  )
}

export default Projects

