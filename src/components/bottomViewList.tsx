const BottomViewList: React.FC = () => {
    return (
        <div className="w-full h-20 flex justify-center items-center space-x-7 pb-6">
            {/* 상단 그림자 추가 하기*/}
            <img src={require('../assets/friendIcon.svg').default} alt="Friend" />
            <img src={require('../assets/chatIcon.svg').default} alt="ChatRoom" />
            <img src={require('../assets/openChatIcon.svg').default} alt="OpenChat" />
            <img src={require('../assets/etcIcon.svg').default} alt="Etc" />
        </div>
    );
};

export default BottomViewList;
