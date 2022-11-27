export const Input = ({
  type,
  placeholder = "Type text",
  InputStyle,
  onCLick
}) => {
  return (
    <>
      <input onCLick={onCLick} type={type} placeholder={placeholder}
        className={` w-full px-3 ${InputStyle}`} />
    </>
  )
}