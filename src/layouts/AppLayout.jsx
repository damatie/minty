import { TopNav } from "../components/shared/TopNav"

export const AppLayout = (props) => {
  return (
    <div className='
      flex
      flex-col
      h-screen
      w-screen
      overflow-x-hidden
      overflow-y-hidden'>
      <div className=" w-full shadow">
        <TopNav />
      </div>
      <div className=' flex flex-row bg-offBlue h-full w-full mt-1'>
        <div className='w-[280px]  overflow-y-auto h-screen bg-slate-500 '>
        </div>
        <div className=" flex-1 h-full overflow-y-auto bg-gray-400  px-10 pt-10 pb-20 mb-20">
          {props.children}
        </div>
      </div>
    </div>
  )
}