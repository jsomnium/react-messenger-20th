import React from 'react';

interface ProfileButtonProps {
  toggleUserId: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ toggleUserId }) => {
  return (
    <button
      onClick={toggleUserId}
      className="w-[45px] h-[45px] rounded-full bg-gray-200 flex items-center justify-center"
    >
      {/* 프로필 이미지 */}
      <img
        src={require('../assets/defaultProfileImg.svg').default}
        alt="Profile"
        className="w-[35px] h-[35px]"
      />
    </button>
  );
};

export default ProfileButton;
