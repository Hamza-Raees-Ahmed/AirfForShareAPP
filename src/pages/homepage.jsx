import { useState } from 'react'
import filescolor from '../assets/files-color.svg'
import filesgrey from '../assets/files-grey.svg'
import logo from '../assets/logo.svg'
import textcolor from '../assets/text-color.svg'
import textgrey from '../assets/text-grey.svg'
import TextArea from '../components/Textarea'
import '../pages/home.css'
import ThemeBtn from '../components/btn'

function HomePage() {
    const [type, setType] = useState("text")
    const [textValue, setTextValue] = useState("")

    return (
        <>
            <div className="container">
                <div className="menu-left">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className="right-menu">
                        <li>How it works</li>
                        <li>Download </li>
                        <li>Upgrade </li>
                        <li>Feedback</li>
                        <li className="menu-last-item">Login / Register</li>
                    </ul>
                </div>
            </div>
            <div className="home-section">
                <div className="home-section-left">
                    <div>
                        <img onClick={() => setType("text")} src={type === "text" ? textcolor : textgrey} alt="" />
                    </div>
                    <div>
                        <img onClick={() => setType("file")} src={type === "file" ? filescolor : filesgrey} alt="" />
                    </div>
                </div>
                <div className="home-section-middle">
                    {type === "text" ? (
                        <div className="text-section">
                            <h1>Text</h1>
                            <div className='text-section-area'>
                                <TextArea value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                            </div>
                            <div className='save-btn'>
                                <span>Clear</span>
                                <ThemeBtn disabled={!textValue} title={"Save"} />
                            </div>
                        </div>
                    ) : (
                        <div className="files-section">
                            <h1>File</h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomePage;
