 import "./btn.css"
function ThemeBtn({disabled,title,onClick}){

    return(<>
<button onClick={onClick} className="theme-btn" disabled={disabled}
 style={{borderColor: disabled && "#a1a3a1"}}>{title}</button>
    </>)
}
export default ThemeBtn;