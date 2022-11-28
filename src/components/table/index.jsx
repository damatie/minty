import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { ToolsBar } from './ToolsBar';
 

export const Table = ({
  items
}) => {

  const [pageNumber, setPageNumber] = useState(0)
  const [tableDataPerPage, setTableDataPerPage]= useState(10)
  const pagesVisited = pageNumber*tableDataPerPage;
  const pageCount = Math.ceil(items.length / tableDataPerPage);
  const [query, setQuery] = useState('')
 
  // const handleSearch = (value) => {
  //   if (value === 'all') {
  //      setQuery('')
  //   }
  //   setQuery(value)
  // }

  useEffect(() => {
  setTableDataPerPage(10)
  }, [])
  
  const changePage = ({selected}) => {
    setPageNumber(selected);

  };
  

  console.log(query)

  const tableData =
    items && items.filter((dataLists) => dataLists.itemType.toLowerCase().includes(query) || dataLists.price.toLowerCase().includes(query) || dataLists.transactionNo.toLowerCase().includes(query) || dataLists.status.toLowerCase().includes(query)
    ).slice(pagesVisited, pagesVisited + tableDataPerPage)
  console.log(tableData)

  return (
    <>
      <ToolsBar value={query}
        // showCount={(e) => setTableDataPerPage(e.target.value)}
        SelectItem={(e) => setQuery(e.target.value)}
        SearchItem={(e) => setQuery(e.target.value)} />
      <div className="overflow-x-auto w-full mt-4">
      <table className="table w-full  first:rounded-full ">
        <thead className=" first:rounded-full" >
          <tr className=" text-whiteGray first:rounded-full ">
            <th className=" first:rounded-tl-[2px]  bg-tableHead text-sm capitalize">Item Type</th>
            <th className="bg-tableHead text-sm capitalize">Price</th>
            <th className="bg-tableHead text-sm capitalize">Transaction No</th>
            <th className="bg-tableHead text-sm capitalize">Time</th>
            <th className="bg-tableHead text-sm capitalize">Status</th>
            <th className="last:rounded-tr-[2px] bg-tableHead"></th>
          </tr>
        </thead>
        <tbody>
            {tableData && tableData.map((obj, index) => (
            <tr key={index} className=" text-sm ">
            <td className="first:rounded-bl-[2px] w-6/12">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle rounded-full w-9 h-9 bg-[#7F8FA4]">
                    {/* <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                  </div>
                </div>
                <div>
                      <div className=" text-[#414042]">{obj.itemType}</div>
                </div>
              </div>
            </td>
            <td className=" text-whiteGray">
              ${obj.price}
          </td>
            <td className=" text-whiteGray" >{obj.transactionNo}</td>
                <td className=" text-whiteGray w-1/12">{obj.time}</td>
          <td>
            <span className="  flex flex-row space-x-[1px] border rounded-full py-2 px-2 w-[120px]">
              <Icon icon="octicon:dot-fill-24" className={`text-[16px] text-primaryGreen`} />
              <p></p>
              <p className={`text-xs text-primaryGreen`}>Reconcilled</p>
            </span>
          </td>
            <th className="last:rounded-br-[2px]">
            <button className="  btn-xs">
              <Icon icon="material-symbols:keyboard-arrow-down" className={`text-[24px] text-[#CCCFD4]`} />
            </button>
            </th>
          </tr>
            ))}
          </tbody>
          
        </table>
        {/* Return if no data found */}
        {tableData&&tableData.length===0 &&<p className=' text-center w-full  py-4 text-whiteGray'> No Data Found</p>}
      {tableData&&tableData.length > 0 && <div className=' flex flex-row justify-between mt-4'>
        <div className=' flex-1 flex '>
          <p className=' text-black text-[13px]'>Showing 1 to {tableDataPerPage} of {items.length} entries</p>
        </div>
          
            <div className="">
            <ReactPaginate
              previousLabel= {'Previous'}
              nextLabel= {'Next'}
              pageCount= {pageCount}
              onPageChange= {changePage}
              containerClassName= {'paginationBtns'}
              previousLinkClassName = {'prevBtn'}
              nextLinkClassName = {'nextBtn'}
              disabledClassName = { 'paginationDisabled'}
              activeClassName = {'paginationActive'}
              />
            </div>
        </div>}
        
    </div>
    </>
  )
}