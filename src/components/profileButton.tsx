import React from 'react';

interface ProfileButtonProps {
  toggleUserId: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ toggleUserId }) => {
  return (
    <button
      onClick={toggleUserId}
      className="w-9 rounded-full"
    >
      {/* 프로필 이미지 */}
      <img
        src={require('../assets/defaultProfileImg.svg').default}
        alt="Profile"
      />
    </button>
  );
};

export default ProfileButton;
