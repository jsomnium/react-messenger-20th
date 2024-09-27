// OtherMessageBox 컴포넌트에 전달되는 props 타입 정의
type OtherMessageBoxProps = {
  message: string;
  timestamp: string;
};

// OtherMessageBox 컴포넌트: 상대방이 보낸 메시지 표시
const OtherMessageBox: React.FC<OtherMessageBoxProps> = ({ message, timestamp }) => {
    return (
      <div className="flex items-start mb-3">
        {/* 프로필 아이콘 */}
        <div className="flex-shrink-0 mr-2">
          <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
            {/* 프로필 아이콘 이미지 대신 아이콘 모양 */}
            <svg className="w-4 h-4 text-yellow-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* 메시지 박스 */}
        <div className="bg-gray-100 p-3 rounded-lg text-left max-w-xs">
          <p className="text-sm">{message}</p>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
      </div>
    );
};

export default OtherMessageBox;
