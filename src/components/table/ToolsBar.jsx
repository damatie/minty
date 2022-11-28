import { Select } from "../form/Select"
import { Input } from "../form/Input"
import { Icon } from '@iconify/react';

export const ToolsBar = ({
  SelectItem,
  SearchItem,
  showCount,
  value=10
}) => {
  return (
    <div className=" flex flex-row w-full">
      <div className="  flex flex-row  w-11/12 ">
        <div className=" mt-1.5 flex flex-row">
          <p className=" mt-1">
          Showing
          </p>
          <Select
            onChange={showCount}
            value={value}
            list={[20]}
            label={10}
            selectStyle={'px-0 bg-bgMain text-bluePrimary'}
            selectContainer={'py-0 px-2 border-0 '}
          />
          <p className=" mt-1">
            out of 500 payments
          </p>
        </div>
        <div className=" flex flex-col  w-[500px]">
          <div className="w-[336.5px] ml-10 h-8 flex flex-row border-b border-[#787878] ">
            <Icon icon="fluent:search-20-regular" className=' mt-2 text-[20px] text-[#0E1D25]' />
            <Input
              onChange={SearchItem}
              placeholder="Search..."
              value={value}
              InputStyle={ ' text-[11px]  py-0 outline-none border-0 bg-bgMain'} />
          </div>
        </div>
        <div className="">
          <Select
            onChange={SelectItem}
            value={value}
            list={['reconcilled','settled','unsettled']}
            label={'all'}
            selectStyle={'px-0 bg-bgMain text-[#414042] px-1.5 w-[150px]'}
            selectContainer={'border border-[#CED0DA]  w-[150px]  '}
          />
        </div>
      </div>
    </div>
  )
}