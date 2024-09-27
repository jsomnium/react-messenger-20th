const ChatHeader: React.FC = () => {
    return (
        <div className="h-11 flex justify-between items-center px-4">
        {/* 왼쪽 뒤로가기 버튼 */}
        <div className="flex items-center">
            <img src={require('../assets/backArrowImg.svg').default} alt="backArrowImg" className="w-4 h-4" />
        </div>

        {/* 중앙 이름 */}
        <div className="text-lg font-semibold">
            김나나
        </div>

        {/* 오른쪽 더보기 버튼 */}
        <div className="flex items-center">
            <img src={require('../assets/morePointImg.svg').default} alt="morePointImg" className="w-4 h-4" />
        </div>
        </div>
    );
};

export default ChatHeader;
