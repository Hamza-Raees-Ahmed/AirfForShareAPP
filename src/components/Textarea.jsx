import { useRef } from 'react';
import './textarea.css'
function TextArea({onChange}){
    const textarearef = useRef()
    const textareaincreser =(event)=>{
        textarearef.current.style.height = "24px"
        textarearef.current.style.height = textarearef.current.scrollHeight + 12 +"px";

    }

    return(<>
    <textarea onChange={onChange} onInput={textareaincreser} ref={textarearef}
    placeholder='Type Something....' className='textarea'>
        
    </textarea>


    </>)
}
export default TextArea;