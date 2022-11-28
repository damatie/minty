import { AppLayout } from "../layouts/AppLayout"
import SmallChatImg from '../assets/img/smallchart.svg'
import { SmallStatCard } from "../components/shared/SmallStatCard"
import { StatsCard } from "../components/shared/StatsCard"
import { Table } from "../components/table"
import { Select } from "../components/form/Select"
import { Icon } from '@iconify/react';
import LineChartArea from "../charts/LineChart"

export const tableData = [
  {
    id:1,
    itemType: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '73430',
    transactionNo: '1234567890',
    time: '12:30',
    status:'Reconcilled'
  },
  {
    id:2,
    itemType: 'Apple',
    price: '73430',
    transactionNo: '1234567890',
    time: '12:30',
    status:'Reconcilled'
  }
]

export const DashboardScreen = () => {
  return (
    <AppLayout>
      <main className=" flex flex-col">
        <section className=" grid grid-cols-4 gap-3">
          <SmallStatCard
            title={'Daily Transaction Volume'}
            total={'2,342'}
            chartIcon={SmallChatImg} />
          <SmallStatCard
            title={'Daily Transaction Value'}
            total={'₦4,000,000'}
            chartIcon={SmallChatImg} />
          <SmallStatCard
            title={'Total Transaction Volume'}
            total={'452,000'}
            chartIcon={SmallChatImg} />
          <SmallStatCard
            title={'Total Transaction Value'}
            total={'₦4,000,000'}
            chartIcon={SmallChatImg} />
        </section>
        <section className=" space-x-1 mt-7 flex flex-row w-full h-[329px]">
          <div className=" h-full flex-1  flex-col bg-white rounded-[2px]">
            <div className=" flex flex-row px-8 py-4">
              <p className=" text-lg font-Segoe-UI-Bold flex-1">Today: 5, Aug 2018</p>
              <div className=" flex flex-row space-x-3 ">
                <Select label={'Pick date'}
                  selectStyle={'text-[#7F8FA4]'}
                  selectContainer={' border rounded-[4.25px] border-[#DDE0E3]  py-1'} list={['1 Jan - 1 Jun']} />
                <div className=" flex flex-row mt-[5px] space-x-3">
                  <button className=" border rounded-[4px] h-[23px] w-[30px]  justify-center flex flex-col items-center">
                    <Icon icon="material-symbols:arrow-back-ios-new" className=' text-[10px] text-[#CCCFD4]' />
                  </button>
                  <button className=" border rounded-[4px] h-[23px] w-[30px]  justify-center flex flex-col items-center">
                    <Icon icon="material-symbols:arrow-forward-ios" className=' text-[10px] text-[#CCCFD4]' />
                  </button>
                </div>
              </div>
            </div>
            <div className=" ">
              <LineChartArea/>
              </div>

          </div>
          <div className=" flex flex-col w-[376px]  h-full space-y-1  ">
            <StatsCard
              Title={'Orders'}
              Reconcilled={80}
              Pending={20}
              PendingT={'Orders'}
              ReconcilledT={'Orders'}
              TotalT={'Orders'}
              Total={100} />
            <StatsCard
              Title={'Payments'}
              Reconcilled={80}
              Pending={20}
               PendingT={'Payments'}
              ReconcilledT={'Payments'}
              TotalT={'Payments'}
              Total={100} />
           
          </div>
        </section>

        <section className="mt-4">
          <h2 className=" text-[32px]">
            Payments
          </h2>
          <div className=" flex flex-col w-full mt-2">
            <Table items={tableData} />
          </div>
        </section>
      </main>
    </AppLayout>
  )
}