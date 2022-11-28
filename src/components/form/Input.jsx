export const Input = ({
  type,
  placeholder = "Type text",
  InputStyle,
  onChange,
  value
}) => {
  return (
    <>
      <input onChange={onChange} type={type}  value={value} placeholder={placeholder}
        className={` w-full px-3 ${InputStyle}`} />
    </>
  )
}