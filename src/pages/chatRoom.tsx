import React from 'react';
import NavBar from '../components/navBar';
import DateDivider from '../components/dateDivider';
import MyMessageBox from '../components/myMessageBox';
import OtherMessageBox from '../components/otherMessageBox';
import ProfileButton from '../components/profileButton';
import PlusButton from '../components/plusButton';

const ChatRoom: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />
            <div className="h-11 flex">
                백버튼 김나나 점
            </div>
            <div className="flex-grow bg-aliceblue">
                <DateDivider />
                <MyMessageBox />
                <ProfileButton />
                <OtherMessageBox />
            </div>
            <div className="h-16">
                <PlusButton />
            </div>
        </div>
    );
};

export default ChatRoom;
