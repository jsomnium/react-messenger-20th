const ChatRoomList: React.FC = () => {
    return (
        <div className="flex items-center px-4 py-3 space-x-4">
            {/* 프로필 이미지 */}
            <img 
                src={require('../assets/defaultProfileImg.svg').default} 
                alt="profile"
            />

            {/* 이름과 메시지 */}
            <div className="flex-1">
                <div className="text-gray-700 font-semibold text-base">김나나</div>
                <div className="text-gray-500 text-xs">생일 축하해 ㅎㅎ</div>
            </div>

            {/* 날짜 */}
            <div className="text-gray-400 text-sm">
                9월 12일
            </div>
        </div>
    );
};

export default ChatRoomList;
