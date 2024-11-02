import React from 'react';
import NavBar from '../components/navBar';
import ViewList from '../components/viewList';
import ChatRoomList from '../components/chatRomList';

const ChatList:React.FC = () => {
    return <div>
        <NavBar/>

        <div className='flex items-center space-x-48 h-14'>
            <div className='text-xl font-semibold'>
                채팅
            </div>
            <div className='flex justify-center space-x-4'>
                <img src={require('../assets/glassesIcon.svg').default} alt="search" />
                <img src={require('../assets/chatMoreIcon.svg').default} alt="moreChat" />
                <img src={require('../assets/settingIcon.svg').default} alt="setting" />
            </div>
        </div>

        <div> {/*채팅목록 컴포넌트*/}
            <ChatRoomList/>
        </div>

        <ViewList/>
    </div>
}
export default ChatList;