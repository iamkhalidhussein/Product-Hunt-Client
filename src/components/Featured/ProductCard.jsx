import { CiBookmark } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import PropTypes from 'prop-types';

const ProductCard = ({ 
    image, 
    title, 
    truncatedDescription, 
    _id, 
    handleUpvoteCount, 
    upvotee, 
    upvote, 
    visit_site,
    itemRef
}) => {
    return (
        <div ref={itemRef} className="flex justify-center">
            <div className="border rounded-lg">
                <ImageSection image={image} />
                <TitleSection title={title} />
                <DescriptionSection truncatedDescription={truncatedDescription} />
                <hr />
            <ActionsSection
                _id={_id}
                handleUpvoteCount={handleUpvoteCount}
                upvotee={upvotee}
                upvote={upvote}
                visit_site={visit_site}
            />
            </div>
        </div>
    );
};

export default ProductCard;

const ImageSection = ({ image }) => {
    return (
        <div className="p-5 pl-6">
            <img className="w-96 h-56 border rounded-md" src={image} alt="#" />
        </div>
    )
};

const TitleSection = ({ title }) => {
    return (
        <div className="flex justify-between px-6">
            <p className="text-[#1B2530] text-xl font-medium hover:text-[#686EF8] duration-150 cursor-pointer">
                {title}
            </p>
            <CiBookmark
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Bookmark"
                className="hover:text-[#6A6EF8] text-[26px] cursor-pointer text-[#79808A]"
            />
            <Tooltip id="my-tooltip" />
        </div>
    )
};

const DescriptionSection = ({ truncatedDescription  }) => {
    return (
        <p className="text-[#79808A] pt-4 pb-5 h-32 px-7 text-base inter font-medium">
            {truncatedDescription}
        </p>
    )
};

const ActionsSection = ({ _id, handleUpvoteCount, upvotee, upvote, visit_site }) => {
    return (
        <div className="flex justify-between py-5 px-5">
            <div
                onClick={() => handleUpvoteCount(_id)}
                className="flex gap-2 border pl-4 pr-6 h-11 cursor-pointer rounded-[5px] border-[#6A6EF8] items-center text-[#6A6EF8] text-base inter font-medium"
            >
            <img src={upvotee} alt="#" />
            Upvote<span>{upvote}</span>
            </div>
            <div className="flex items-center text-[#79808A] cursor-pointer text-base inter font-medium hover:text-[#6A6EF8] duration-200">
            <a href={visit_site}>Visit Site</a>
            <MdArrowOutward />
            </div>
        </div>
    )
};


ProductCard.propTypes = {
    image: PropTypes.string, 
    title: PropTypes.string, 
    truncatedDescription: PropTypes.string, 
    _id: PropTypes.string, 
    handleUpvoteCount: PropTypes.func, 
    upvotee: PropTypes.string, 
    upvote: PropTypes.number, 
    visit_site: PropTypes.string 
};

ImageSection.propTypes = {
    image: PropTypes.string
};

TitleSection.propTypes = {
    title: PropTypes.string
};

DescriptionSection.propTypes = {
    truncatedDescription: PropTypes.string
};

ActionsSection.propTypes = {
    _id: PropTypes.string, 
    handleUpvoteCount: PropTypes.func, 
    upvotee: PropTypes.string, 
    upvote: PropTypes.number, 
    visit_site: PropTypes.string
}