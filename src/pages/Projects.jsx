import React from 'react'
import {schedularBoard} from '../data/data'
const Projects = () => {
  return (
    <div className="h-full w-full p-2 m-0 bg-white/10 backdrop-blur-sm overflow-y-auto">
      <div className="w-full h-auto">
        <table className='w-full h-auto overflow-y-auto border-solid'>
          <tr>
            <th className='bg-slate-900/50 text-white h-12'>Project name</th>
            <th className='bg-slate-900/50 text-white h-12'>Description</th>
            <th className='bg-slate-900/50 text-white h-12'>Assignees</th>
            <th className='bg-slate-900/50 text-white h-12'>Due Date</th>
            <th className='bg-slate-900/50 text-white h-12'>Priority</th>
            <th className='bg-slate-900/50 text-white h-12'>Progress</th>
            <th className='bg-slate-900/50 text-white h-12'>Creation date</th>
          </tr>
          {schedularBoard.map((element,index)=>(<tr key={index} className='max-h-[12px] w-full bg-white/15 overflow-hidden '> 
            <td className='h-[inherit] border-solid border-slate-500 border-[1px] pl-2 bg-transparent hover:bg-white/20 hover:backdrop-blur-lg'>{element.projectName}</td>
            <td className='h-[inherit] border-solid border-slate-500 border-[1px] pl-2 bg-transparent hover:bg-white/20 hover:backdrop-blur-lg'>{element.projectDescription}</td>
            <td className='h-[inherit] border-solid border-slate-500 border-[1px] text-center bg-transparent hover:bg-white/20 hover:backdrop-blur-lg'>{element.progress}</td>
            <td className='h-[inherit] border-solid border-slate-500 border-[1px] bg-transparent hover:bg-white/20 hover:backdrop-blur-lg'>{element.priority}</td>
            <td className='h-[inherit] border-solid border-slate-500 border-[1px] bg-transparent hover:bg-white/20 hover:backdrop-blur-lg'>{element.dueDate}</td>
            <td className='h-[inherit] border-solid border-slate-500 border-[1px] text-center'>{element.assignedIndividuals.map((element,index)=>(<article key={index} className='bg-transparent hover:bg-white/20 hover:backdrop-blur-lg '>{element}</article>))}</td>
            <td className='h-[inherit] border-solid border-slate-500 border-[1px] bg-transparent hover:bg-white/20 hover:backdrop-blur-lg'>{element.creationDate}</td>
          </tr>))}
          
        </table>
      </div>
    </div>
  )
}

export default Projects