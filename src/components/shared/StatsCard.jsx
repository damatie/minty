export const StatsCard = ({
  Reconcilled,
  Pending,
  Total,
  Title,
  ReconcilledT,
  PendingT,
  TotalT

}) => {
  return (
    <div className=" w-full space-y-3 justify-center  flex-1 bg-white rounded-[2px] px-7 pt-[16.5px] text-sm ">
      <p className=" font-Segoe-UI-Bold">{Title}</p>
      <div className=" h-[4px] bg-gray-400 flex flex-row  w-full rounded-full">
        <div
            style={{ width: Reconcilled +'%'}}
          className={` h-full   bg-primaryGreen rounded-l-full`}></div>
        <div
          style={{ width: Pending +'%'}}
          className={`h-full bg-yelloPrimary rounded-r-full `}></div>
      </div>
      <div className=" text-sm space-y-2">
        <p>Pending {PendingT}: <span className=" font-Segoe-UI-Bold text-yelloPrimary">{Pending}</span></p>
        <p>Reconcilled {ReconcilledT}:  <span className=" font-Segoe-UI-Bold text-primaryGreen">{Reconcilled}</span></p>
        <p>Total {TotalT}: <span className=" font-Segoe-UI-Bold text-bluePrimary">
          {Total}</span></p>
      </div>

    </div>
  )
}