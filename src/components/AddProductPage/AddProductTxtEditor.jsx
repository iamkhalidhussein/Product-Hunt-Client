import { Editor } from 'primereact/editor';
import PropTypes from 'prop-types';

const AddProductTxtEditor = ({ setText, text }) => {
    return (
        <>
            <label className="text-[#1B2530] bg-[#F5F8F9 dark:text-white pt-5 pb-1 grid grid-cols-0 text-base inter w-full font-medium" htmlFor="">Please, describe your product or resource. Must be unique and minimum of 50 words recommended.</label>
            <div className="card dark:text-black" style={{width: '810px', borderRadius: '0',  backgroundColor: 'white',}}>
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px', width: '810px', backgroundColor: 'white' }} />
            </div>
        </>
    );
};

AddProductTxtEditor.propTypes = {
    setText: PropTypes.func.isRequired,
    text: PropTypes.func
}

export default AddProductTxtEditor;