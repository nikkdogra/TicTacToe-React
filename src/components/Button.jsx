
const Button = ({children,onBtnClick}) => {
  return (
    <button className="btn" onClick={onBtnClick}>{children}</button>
  )
}

export default Button
