import { TopNav } from "../components/shared/TopNav"
import { SideNav } from "../components/shared/SideNav"

export const AppLayout = (props) => {
  return (
    <div className='
      flex
      flex-col
      h-screen
      w-screen
      overflow-x-hidden
      overflow-y-hidden bg-bgMain'>
      <div className=" w-full bg-white shadow-sm">
        <TopNav />
      </div>
      <div className=' flex flex-row bg-offBlue h-full w-full mt-[2px]'>
        <div className='w-[260px]  overflow-y-auto h-screen  bg-white '>
          <SideNav/>
        </div>
        <div className=" flex-1 h-full overflow-y-auto  px-10 pr-[70px] pt-7 pb-20 mb-20">
          {props.children}
        </div>
      </div>
    </div>
  )
}