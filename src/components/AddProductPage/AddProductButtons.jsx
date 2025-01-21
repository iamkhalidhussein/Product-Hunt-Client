import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react"

const AddProductButtons = ({ loading }) => {
    return (
        <div className="flex gap-5 pt-10">

        <Link
            to="/dashboard/userProfile"
            className="bg-[#79808A] text-white text-[18px] py-3 px-7 rounded"
        >
            Cancel
        </Link>

        <button
            disabled={loading}
            className="bg-[#686EF9] text-[18px] text-white py-3 px-8 rounded"
        >
            {loading ? (
                <div className="flex gap-1 items-center">
                    Submitting <Loader2 className="animate-spin" />
                </div>
            ) : (
                "Submit Product"
            )}
        </button>
    </div>
    );
};

AddProductButtons.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default AddProductButtons;