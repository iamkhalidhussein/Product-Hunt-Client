
const AddProductInputs = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div><label className="text-[#1B2530] dark:text-white text-base inter font-medium" htmlFor="">Resource or Product Title (Keep it Short)</label> 
            <input className="bg-white dark:text-black py-4 pl-5 rounded mt-1 w-full" type="text" name="product_title" id="" placeholder="Tailgrids" required/></div>
            <div><label className="text-[#1B2530] dark:text-white text-base inter font-medium" htmlFor="">Subtitle (Maximum 40 Characters)</label>
            <input className="bg-white dark:text-black py-4 pl-5 rounded mt-1 w-full " type="text" name="product_subtitle" id="" placeholder="Tailwind UI Components and Blocks" required/></div>
            <div><label className="text-[#1B2530] dark:text-white text-base inter font-medium" htmlFor="">Direct Link to Resource or Product</label>
            <input className="bg-white dark:text-black py-4 pl-5 rounded mt-1 w-full" type="text" name="product_directLink" id="" placeholder="http://tailgrids.com" required/></div>
            <div><label className="text-[#1B2530] dark:text-white text-base inter font-medium" htmlFor="">Select Category (Maximum 3)</label><select className="w-full appearance-none rounded mt-1 dark:text-black bg-white pl-5 py-4 font-body text-base text-dark-text outline-none transition" name="product_category" id="" required>
                <option value="">Select</option>
                <option value="110">AI (Artificial Intelligence)</option>
                <option value="112">Serverless</option>
                <option value="113">Productivity</option>
                <option value="114">Cloud Storage</option>
                <option value="115">API</option>
                <option value="116">No-Code</option>
                <option value="117">Web Templates</option>
                <option value="118">Logos</option>
                <option value="119">Developer Tools</option>
                <option value="120">Newletters</option>
                <option value="121">Skill Development</option>
                <option value="122">Design Tools</option>
                <option value="123">Colors and Gradients</option>
                <option value="124">Chrome Extensions</option>
                <option value="125">Web Development</option>
                <option value="126">Web3</option>
                <option value="127">Design Inspiration</option>
                <option value="128">UI Libraries</option>
                <option value="129">Payment Gateways</option>
                <option value="130">Stock Photos</option>
                <option value="131">Illustrations</option>
                <option value="132">Hosting</option>
                <option value="133">Open Source</option>
                <option value="134">Design Resources</option>
                <option value="135">Marketing</option>
                <option value="136">Fonts</option>
                <option value="137">Icons</option>
            </select></div>
        </div>
    );
};

export default AddProductInputs;