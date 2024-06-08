import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CustomEditor.css'

const TextEditor = () => {
    return (
        <div className='App col-span-2 border'>
            <h2 className='pb-1 text-[#1B2530] text-base inter font-medium'>Please, describe your product or resource. Must be unique and minimum of 50 words recommended.</h2>
            <CKEditor
                editor={ ClassicEditor }
                data="<p></p>"
                onReady={ ( editor ) => {
                console.log( "CKEditor5 React Component is ready to use!", editor );
                } }
                onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
                } }
                className="custom-editor ck-editor__editable"
            />
        </div>
    );
};

export default TextEditor;
