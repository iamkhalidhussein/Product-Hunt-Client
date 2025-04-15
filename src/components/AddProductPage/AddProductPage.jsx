import { lazy } from 'react';
import useProductSubmit from '../../hooks/useProductSubmit.js';

const AddProductButtons = lazy(() => import("./AddProductButtons.jsx"));
const AddProductFileInput = lazy(() => import('./AddProductFileInput.jsx'));
const AddProductTxtEditor = lazy(() => import('./AddProductTxtEditor.jsx'));
const AddProductHeader = lazy(() => import('./AddProductHeader.jsx'));
const AddProductInputs = lazy(() => import('./AddProductInputs.jsx'));

const AddProductPage = () => {

    // console.log(files)
    const { 
        handleProductSubmit, 
        setText, 
        loading, 
        text, 
        image, 
        onDrop 
    } = useProductSubmit();

    return (
        <div className="mt-12">
            <AddProductHeader/>
            <form onSubmit={handleProductSubmit} className="">
                <AddProductInputs/>
                <AddProductTxtEditor setText={setText} text={text}/>
                <br />
                <AddProductFileInput onDrop={onDrop} image={image}/>
                <AddProductButtons loading={loading}/>
            </form>
        </div>
    );
};

export default AddProductPage;