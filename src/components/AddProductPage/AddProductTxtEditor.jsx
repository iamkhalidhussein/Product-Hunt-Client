import { Editor } from 'primereact/editor';
import PropTypes from 'prop-types';

const AddProductTxtEditor = ({ setText, text }) => {
    return (
        <div className='mt-3'>
            <label
                className="description-label"
                htmlFor="product-description"
            >
                Please, describe your product or resource. Must be unique and a minimum of 50 words is recommended.
            </label>
            <div className="card dark:text-black">
                <Editor
                    value={text}
                    onTextChange={(e) => setText(e.htmlValue)}
                    style={{ height: '320px', width: '810px', backgroundColor: 'white' }}
                />
            </div>
        </div>
    );
};

AddProductTxtEditor.propTypes = {
    setText: PropTypes.func.isRequired,
    text: PropTypes.string
}

export default AddProductTxtEditor;