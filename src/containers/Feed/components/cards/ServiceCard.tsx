import CONFIG from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">Resources</div>
            <ul className="rounded-2xl mb-9 bg-white dark:bg-zinc-700 p-1 flex flex-col">
        
          <AiFillCodeSandboxCircle className="text-2xl" />
          <div className="text-sm">{CONFIG.projects[0].name}</div>
        </a>
      </ul>
    </>
  )
}

export default ServiceCard
