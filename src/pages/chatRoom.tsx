import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import DateDivider from '../components/dateDivider';
import MyMessageBox from '../components/myMessageBox';
import OtherMessageBox from '../components/otherMessageBox';
import ProfileButton from '../components/profileButton';
import PlusButton from '../components/plusButton';
import ChatHeader from '../components/chatHeader';
import messagesData from '../data/chatData.json';

// Message 타입 정의 : 타입 스크립트 쓰니까 편하네요!!!
type Message = {
    messageId: number;
    // 메세지 아이디를 따로 저장해두면 좋을 것 같아서 일단 넣어줬습니다! 습관 비스무리한..
    senderId: number;
    // 사용자 전환 시 메세지 디자인도 변경도 변경됩니다. 이를 위해 senderId를 넣어줬습니다!
    message: string;
    // 메세지 내용은 string으로 저장했습니다!
    timestamp: string;
    // 일단 시간을 데이터로 저장하기 위해 string으로 저장했습니다!
};

const ChatRoom: React.FC = () => {
    // 현재 사용자 ID 상태 (기본값: 1)
    const [userId, setUserId] = useState<number>(1);

    // 메시지 데이터 상태 (초기값: 빈 배열)
    const [messages, setMessages] = useState<Message[]>([]);

    // 컴포넌트 첫 랜더링시 JSON 데이터를 상태에 설정함
    useEffect(() => {
        setMessages(messagesData.messages);
    }, []);

    // 버튼 클릭 시 사용자 ID 변경
    const toggleUserId = () => {
        setUserId(userId === 1 ? 2 : 1);
    };

    // 입력된 메시지 상태 (메시지 입력값 저장)
    const [inputMessage, setInputMessage] = useState<string>("");

    // 메시지 입력 시 마다 호출됨 (input 값 변화 추적)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
        // 인풋의 value를 그대로 추적해서 inputMessage 상태에 담습니다!
    };

    // Enter 키 입력 시 메시지를 상태에 추가함 (사실 전송의 기능을 수행합니다!)
    const sendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputMessage.trim()) {
            // 현재 시간을 타임스탬프로 저장
            const newTimestamp = new Date().toLocaleString();

            // 입력된 메세지 기반으로 새 메세지를 생성합니다!
            const newMessage: Message = {
                messageId: messages.length + 1,  // 메시지 ID는 기존 메시지 수에 +1
                senderId: userId,  // 현재 사용자 ID를 저장함
                message: inputMessage,  // 입력된 메시지 내용 저장
                timestamp: newTimestamp,  // 현재 시간
            };

            // 기존 메시지에 새 메시지 추가
            setMessages([...messages, newMessage]);

            // 입력창 초기화.. 까먹을뻔
            setInputMessage("");
        }
    };

    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />
            <ChatHeader />

            {/* 채팅 메세지 메인 Body */ }
            <div className="flex-grow bg-aliceblue p-4">
                {/* 메시지 리스트 순회하면서 각각 렌더링 */}
                {messages.map((message) => (
                <div key={message.messageId}>
                    {/* 날짜 구분자 (timestamp에서 날짜 부분만 추출되도록 일단 했습니다!) */}
                    <DateDivider date={message.timestamp.split(' ')[0]} />
                    
                    {/* senderId와 userId 동일 여부에 따라 메시지 박스를 렌더링했습니다! */}
                    {message.senderId === userId ? (
                    <MyMessageBox message={message.message} timestamp={message.timestamp} />
                    ) : (
                    <OtherMessageBox message={message.message} timestamp={message.timestamp} />
                    )}

                    {/* 상대방 메시지일 때만 메시지 아래에 프로필이 렌더링 되도록 했습니다! */}
                    {message.senderId !== userId && <ProfileButton />}
                        
                </div>
                ))}

                {/* 임시로 유저 Id 변경 버튼을 만들었습니다! 이 기능을 다른 버튼에 넣으면 될듯합니다 */}
                    <button onClick={toggleUserId} className="bg-gray-200 p-2">
                    {userId === 1 ? "Switch to User 2" : "Switch to User 1"}
                    </button>
            </div>

            {/* 하단 입력 영역 */}
            <div className="h-16 flex items-center px-4">
                {/* 좌측의 추가 버튼 */}
                <PlusButton />

                {/* 메시지 입력 영역 (Enter 키 입력 시 메시지 등록) */}
                <input
                    type="text"
                    placeholder="메시지를 입력하세요"
                    value={inputMessage}
                    onChange={handleInputChange}  // onChange로 입력값 변경 추적
                    onKeyDown={sendMessage}  // onKeyPress가 사용이 안된다네요? 왜지
                    className="flex-grow p-2 border rounded"
                />
            </div>
        </div>
    );
};

export default ChatRoom;
