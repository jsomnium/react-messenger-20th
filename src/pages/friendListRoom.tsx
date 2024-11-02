import React from 'react';
import NavBar from '../components/navBar';
import BottomViewList from '../components/bottomViewList';

const FriendListRoom: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />
            <div className="flex-1 px-5">
                <div className="flex items-center justify-center space-x-44 my-1 h-12">
                    <p className="text-xl font-semibold text-gray-700">친구</p>
                    <div className="flex space-x-4">
                        <img src={require('../assets/searchIcon.svg').default} alt="Search" />
                        <img src={require('../assets/addFriendIcon.svg').default} alt="Add Friend" />
                        <img src={require('../assets/settingIcon.svg').default} alt="Settings" />
                    </div>
                </div>

                {/* 본인 프로필 */}
                <div className="flex items-center py-4 border-b border-gray-100">
                    <img src={require('../assets/myProfileImg.svg').default} alt="My Profile" className="w-10 h-10" />
                    <span className="ml-4 font-semibold text-base text-gray-700">선우</span>
                </div>

                {/* 생일인 친구 */}
                <div className="mt-4 border-b border-gray-100">
                    <div className="text-gray-500 mb-2 text-xs">
                        생일인 친구
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                            <img src={require('../assets/defaultProfileImg.svg').default} alt="Search" className="w-8 h-8" />
                            <p className="ml-4 text-gray-700 text-base font-semibold">
                                김나나
                            </p>
                        </div>
                        <img src={require('../assets/giftIcon.svg').default} alt="Gift" />
                    </div>
                </div>

                {/* 친구 목록 */}
                <div className="mt-4">
                    <div className="text-gray-500 mb-2 text-xs">
                        친구 4
                    </div>
                    <div className="flex items-center py-2">
                            <img src={require('../assets/defaultProfileImg.svg').default} alt="Search" className="w-8 h-8" />
                        <p className="ml-4 text-gray-700 text-base font-semibold">
                            권미미
                        </p>
                    </div>
                </div>
            </div>
            <BottomViewList />
        </div>
    );
}

export default FriendListRoom;
