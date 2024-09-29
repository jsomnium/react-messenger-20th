// OtherMessageBox 컴포넌트에 전달되는 props 타입 정의
type OtherMessageBoxProps = {
  message: string;
  timestamp: string;
};

// OtherMessageBox 컴포넌트: 상대방이 보낸 메시지 표시
const OtherMessageBox: React.FC<OtherMessageBoxProps> = ({ message, timestamp }) => {
    return (
      <div className="flex items-start mb-3">

        {/* 메시지 박스 */}
        <div className="bg-gray-50 p-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-left max-w-xs border border-gray-200">
          <p className="text-sm font-semibold">{message}</p>
          <span className="text-xs text-gray-400">{timestamp}</span>
        </div>
      </div>
    );
};

export default OtherMessageBox;
