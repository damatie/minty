import { Icon } from '@iconify/react';
import BellIcon from '../../assets/icons/bell-icon.svg'
import UserImg from '../../assets/img/user.png'
import { Input } from '../form/Input';

export const TopNav = () => {
  return (
    <div className=" w-full flex flex-row h-[60px] ">
      <div className=" flex flex-row flex-1">
        <div className=" w-[280px]  text-2xl font-black text-center pt-3 text-blueLight font-Roboto">TransMonitor</div>
        <div className=' pl-10 pt-[18px] flex flex-row text-[#979797] space-x-3'>
          <Icon icon="fluent:search-20-regular" className=' text-[24px] text-[#0E1D25]' />
          <p>
            <Input placeholder={'Search...'}
              InputStyle={'outline-none border-0 text-sm'} />
         </p>
        </div>
      </div>
      <div className='  flex flex-row text-[#647787] pr-16 space-x-10  text-sm'>
        <div className=' pt-5 flex flex-row space-x-10'>
          <p>
            <a href='/#'>Support</a>
          </p>
          <p>
            <a href='/#'>FAQ</a>
          </p>
        </div>
        <div className='relative pt-[22px] cursor-pointer'>
          <img alt="bell icon" src={BellIcon}  className=" w-5"/>
          <p className=' absolute top-4 -right-1 flex flex-col justify-center bg-blue h-[15px] w-[15px] text-center rounded-full text-white text-[10px]'>
            2
          </p>
        </div>
        <div className=' flex flex-row pt-3 space-x-3 cursor-pointer'>
          <div className=' flex flex-col items-end'>
            <p className=' text-[10px] -mb-2'>Hello</p>
            <p className=' text-sm'>Oluwaleke Ojo</p>
          </div>
          <p className='h-[40px] w-[40px] bg-gray-400 rounded-full'>
            <img alt="user img" src={UserImg}  className=" rounded-full w-full object-contain"/>
          </p>
        </div>
      </div>
    </div>
  )
}