export const Select = ({
  selectContainer,
  onChange,
  selectStyle,
  list,
  value,
  label
}) => {
  return (
    <>
     <span className={`cursor-pointer   flex  text-sm text-dark border-gray-400 ${selectContainer}`}>
          <select onChange={onChange} className={`capitalize text-sm   outline-none border-0 ${selectStyle}`}>
            <option value='' className=" ">{label}</option>
              {list&&list.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
      ))}
          </select>
      </span></>
  )
}