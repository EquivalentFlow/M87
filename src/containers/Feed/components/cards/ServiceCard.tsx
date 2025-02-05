import CONFIG from "site.config"
import React from "react"
import { BiArchive } from "react-icons/bi"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <div className="p-1 mb-1 dark:text-white"></div>
            <ul className="rounded-2xl mb-1 bg-white dark:bg-zinc-700 p-1 flex flex-col">
        <a
          href={`${CONFIG.projects[0].href}`}
          rel="noreferrer"
          target="_blank"
          className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
        >
          <BiArchive className="text-2xl" />
          <div className="text-sm">{CONFIG.projects[0].name}</div>
        </a>
      </ul>
    </>
  )
}

export default ServiceCard
