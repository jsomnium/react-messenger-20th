const ViewList: React.FC = () => {
    return (
        <div className="flex justify-center space-x-7">
            <img src={require('../assets/friendIcon.svg').default} alt="Friend" />
            <img src={require('../assets/chatIcon.svg').default} alt="ChatRoom" />
            <img src={require('../assets/openChatIcon.svg').default} alt="OpenChat" />
            <img src={require('../assets/etcIcon.svg').default} alt="Etc" />
        </div>
    );
};

export default ViewList;
