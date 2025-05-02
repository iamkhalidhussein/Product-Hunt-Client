import { useContext, useState } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import PropTypes from 'prop-types';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState("approved");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    
    return (
        <div>
          <div className="flex mt-14 border items-start justify-between pl-5 pr-5 rounded-lg py-10 bg-white">
            <div className="flex gap-3 items-end">
              <img
                className="rounded-full w-[100px] h-[100px]"
                src={user?.photoURL}
                alt="Profile"
                onError={(e) => {
                  e.target.src = "https://example.com/default-profile.png";
                }}
              />
              <div>
                <h3 className="text-[#1B2530] text-xl font-medium hover:text-primary cursor-pointer pb-2">
                  {user.displayName}
                </h3>
                <div className="flex items-center text-white bg-primary justify-center rounded-3xl py-1 px-3">
                  <MdOutlineMarkEmailUnread className="text-xl mr-1" aria-hidden="true" />
                  <span className="mr-1">Email:</span>
                  {user.email}
                </div>
              </div>
            </div>
            <Link
              to="/dashboard/settings"
              className="flex items-center bg-primary px-3 py-1 rounded-sm text-[18px] text-white font-normal gap-1"
              aria-label="Edit Profile"
            >
              <CiEdit className="text-2xl" aria-hidden="true" />
              <span>Edit</span>
            </Link>
          </div>
    
          <h2 className="text-[#1B2530] text-[36px] font-semibold py-9">Your Submission</h2>
          <TabButtonGroup 
            activeTab={activeTab} 
            handleTabChange={handleTabChange}
            />
    
          <RenderTabContent activeTab={activeTab}/>
        </div>
      );
};

export default Profile;

const EmptyState = () => {
    return (
        <div className="flex justify-center border py-28 rounded-md mt-8 bg-white">
            <div>
                <img
                    className="mx-auto bg-[#686EF80D] rounded-full p-5"
                    src="https://i.postimg.cc/7h42M6WJ/empty.png"
                    alt="Empty State"
                />
                <h3 className="text-[#000000] text-2xl font-medium pt-7">OOOPS! It&apos Empty</h3>
                <p className="text-[#79808A] text-base font-normal">There are no items to show</p>
            </div>
        </div>
    )
};

const TabButton = ({ id, label, isActive, onClick }) => {
    return (
        <button
            id={`${id}-btn`}
            className={`px-5 py-2.5 rounded text-white ${
            isActive ? "bg-[#686EF8]" : "bg-[#2C3743]"
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    )
};

const TabButtonGroup = ({ activeTab, handleTabChange }) => {
  return (
    <div className="border flex justify-start gap-3 p-4 rounded bg-white">
            <TabButton
              id="approved"
              label="Approved"
              isActive={activeTab === "approved"}
              onClick={() => handleTabChange("approved")}
            />
            <TabButton
              id="underReview"
              label="Under Review"
              isActive={activeTab === "underReview"}
              onClick={() => handleTabChange("underReview")}
            />
            <TabButton
              id="rejected"
              label="Rejected"
              isActive={activeTab === "rejected"}
              onClick={() => handleTabChange("rejected")}
            />
      </div>
  )
};

const RenderTabContent = ({ activeTab }) => {
  return (
    <div className="mt-8">
            {activeTab === "approved" && (
              <div key="approved">
                <p>Approved</p>
                <EmptyState tab="approved" />
              </div>
            )}
            {activeTab === "underReview" && (
              <div key="underReview">
                <p>Under Review</p>
                <EmptyState tab="under review" />
              </div>
            )}
            {activeTab === "rejected" && (
              <div key="rejected">
                <p>Rejected</p>
                <EmptyState tab="rejected" />
              </div>
            )}
      </div>
  )
};

RenderTabContent.propTypes = {
  activeTab: PropTypes.string
};

TabButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

TabButtonGroup.propTypes = {
  activeTab: PropTypes.string,
  handleTabChange: PropTypes.func
};