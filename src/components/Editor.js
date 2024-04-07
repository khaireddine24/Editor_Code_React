import React,{useState} from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import "../index.css"

const Editor = (props) => {
    const [open, setOpen] = useState(true)
    const {language, label, onChange} = props

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {label}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="expand-collapse-btn"
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <CodeMirror
                value={props.value}
                className="code-mirror-wrapper"
                onBeforeChange={(editor, data, value) => onChange(value)}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: "material"
                }}
            />
        </div>
  )
}

export default Editor
