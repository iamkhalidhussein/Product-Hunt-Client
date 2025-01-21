import categories from './categories.json';
import PropTypes from 'prop-types';

const AddProductInputs = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <InputField
                label="Resource or Product Title (Keep it Short)"
                name="product_title"
                placeholder="Tailgrids"
                required
            />
            <InputField
                label="Subtitle (Maximum 40 Characters)"
                name="product_subtitle"
                placeholder="Tailwind UI Components and Blocks"
                required
            />
            <InputField
                label="Direct Link to Resource or Product"
                name="product_directLink"
                placeholder="http://tailgrids.com"
                required
            />

            <SelectField
                label="Select Category (Maximum 3)"
                name="product_category"
                options={categories}
                required
            />
        </div>
    );
};

export default AddProductInputs;

const InputField = ({ label, name, placeholder, required }) => {
    return (
        <div>
            <label className="text-[#1B2530] dark:text-white text-base inter font-medium">
                {label}
            </label>
            <input
                className="bg-white dark:text-black py-4 pl-5 rounded mt-1 w-full"
                type="text"
                name={name}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
};

const SelectField = ({ label, name, options, required }) => {
    return (
        <div>
            <label className="text-[#1B2530] dark:text-white text-base inter font-medium">
                {label}
            </label>
            <select
                className="w-full appearance-none rounded mt-1 dark:text-black bg-white pl-5 py-4 font-body text-base text-dark-text outline-none transition"
                name={name}
                required={required}
            >
                <option value="">Select</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
};


InputField.propTypes = {
    label: PropTypes.string, 
    name: PropTypes.string, 
    placeholder: PropTypes.string, 
    required: PropTypes.bool
};

SelectField.propTypes = {
    label: PropTypes.string, 
    name: PropTypes.string, 
    options: PropTypes.array, 
    required: PropTypes.bool
};