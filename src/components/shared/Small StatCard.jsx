export const SmallStatCard = ({
  chartIcon, 
  title,
  total
}) => {
  return (
    <div className="w-full h-[75px] px-[18px] pt-[15px] bg-white rounded-sm flex flex-row space-x-2">
      <div className=" flex flex-col flex-1  ">
        <p className=" text-grayPrimary text-sm">{title}</p>
        <p className=" text-dark text-lg">{total}</p>
      </div>
      <div>
          <img alt="icon" src={chartIcon}  className="  w-full object-contain"/>
      </div>
    </div>
  )
} 