
import React from 'react'

export default function SettingUp() {
  return (
    <div className='p-8'>
      <span className='font-extrabold text-lg'>
        Pre requisites
      </span>
      <hr />
      <div className='m-4'>
        <ul className='list-decimal'>
          <li>
            Make sure you have the Access to the repository you want to review.
          </li>
          <li>
            Generate the Personal Access Token for the Repository to View Repository and Pull Requests.
          </li>
          <li>
            Make sure there is Additional Access to add comments and Suggestions to take full advantage of the Application.
          </li>
        </ul>
      </div>
    </div>
  )
}
