import FileUpload from "../FileUpload/FileUpload";
import PrimeReactEditor from "../PrimeReactEditor/PrimeReactEditor";

const AddProductPage = () => {
    return (
        <div className="mt-12">
            <h3 className="text-[#1B2530] text-[35px] font-medium  pb-1">Submit a Product</h3>
            <p className="text-[#79808A] text-base pb-8 inter">
            Please, fill the form to submit a product or resource. <br />
            We will manually review, will approve your submission ASAP and send you a success email. All fields are required.
            </p>

            <form className="">
                <div className="grid grid-cols-2 gap-5">
                    <div><label className="text-[#1B2530] text-base inter font-medium" htmlFor="">Resource or Product Title (Keep it Short)</label> 
                    <input className="bg-white py-4 pl-5 rounded mt-1 w-full" type="text" name="" id="" placeholder="Tailgrids"/></div>
                    <div><label className="text-[#1B2530] text-base inter font-medium" htmlFor="">Subtitle (Maximum 40 Characters)</label>
                    <input className="bg-white py-4 pl-5 rounded mt-1 w-full " type="text" name="" id="" placeholder="Tailwind UI Components and Blocks"/></div>
                    <div><label className="text-[#1B2530] text-base inter font-medium" htmlFor="">Direct Link to Resource or Product</label>
                    <input className="bg-white py-4 pl-5 rounded mt-1 w-full" type="text" name="" id="" placeholder="http://tailgrids.com"/></div>
                    <div><label className="text-[#1B2530] text-base inter font-medium" htmlFor="">Direct Link to Resource or Product</label><select className="w-full appearance-none rounded mt-1  bg-white pl-5 py-4 font-body text-base text-dark-text outline-none transition" name="" id="">
                        <option value="">Select</option>
                        <option value="112">Dhaka</option>
                    </select></div>
                </div>
                <label className="text-[#1B2530] bg-[#F5F8F9] pt-5 pb-1 grid grid-cols-0 text-base inter w-full font-medium" htmlFor="">Please, describe your product or resource. Must be unique and minimum of 50 words recommended.</label>
                <PrimeReactEditor></PrimeReactEditor> <br />
                <div className="pt-5">
                    <h2 className="text-[#1B2530] text-[30px] font-medium">Upload Images for Details Page</h2>
                    <p className="text-base inter text-[#79808A] font-normal pb-7">First image will be displayed as featured image. You can add multiple images these will be visible on detailes page scroller
                    (Required image size is 1270px*760px and not more than 1MB)</p>
                    <FileUpload></FileUpload>
                </div>
                <div className="flex gap-5 pt-10">
                    <button className="bg-[#79808A] text-white text-[18px] py-3 px-7 rounded">Cancel</button>
                    <button className="bg-[#686EF9] text-[18px] text-white py-3 px-8 rounded">Submit Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductPage;