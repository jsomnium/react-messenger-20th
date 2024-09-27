// OtherMessageBox 컴포넌트에 전달되는 props 타입 정의
type OtherMessageBoxProps = {
  message: string;
  timestamp: string;
};

// OtherMessageBox 컴포넌트: 상대방이 보낸 메시지 표시
const OtherMessageBox: React.FC<OtherMessageBoxProps> = ({ message, timestamp }) => {
  return (
    <div className="bg-gray-100 p-2 rounded-lg text-left">
      <p>{message}</p>
      <span className="text-xs text-gray-500">{timestamp}</span>
    </div>
  );
};

export default OtherMessageBox;
