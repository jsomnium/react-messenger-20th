import React from 'react';
import NavBar from '../components/navBar';
import BottomViewList from '../components/bottomViewList';
import ChatRoomList from '../components/chatRoomList';

const ChatListRoom:React.FC = () => {
    return <div className='w-full h-full flex flex-col '>
        <NavBar/>

        <div className='flex items-center space-x-48 h-14'>
            <div className="text-xl font-semibold ml-5 text-gray-700">
                채팅
            </div>
            <div className='flex justify-center space-x-4'>
                <img src={require('../assets/glassesIcon.svg').default} alt="search" />
                <img src={require('../assets/chatMoreIcon.svg').default} alt="moreChat" />
                <img src={require('../assets/settingIcon.svg').default} alt="setting" />
            </div>
        </div>

        <div className='flex-1'>
            <ChatRoomList/>
        </div>

        <BottomViewList/>
    </div>
}
export default ChatListRoom;