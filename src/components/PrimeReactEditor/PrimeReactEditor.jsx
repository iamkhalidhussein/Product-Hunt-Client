import { Editor } from 'primereact/editor';
import { useState } from 'react';

const PrimeReactEditor = () => {
    const [text, setText] = useState('');

    return (
        <div>
                <div className="card" style={{width: '810px', borderRadius: '0',  backgroundColor: 'white'}}>
                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px', width: '810px', backgroundColor: 'white' }} />
            </div>
        </div>
    )

};

export default PrimeReactEditor;