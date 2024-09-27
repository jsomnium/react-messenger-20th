// MyMessageBox 컴포넌트에 전달되는 props 타입 정의
type MyMessageBoxProps = {
  message: string;
  timestamp: string;
};

// MyMessageBox 컴포넌트: 사용자가 보낸 메시지 표시
const MyMessageBox: React.FC<MyMessageBoxProps> = ({ message, timestamp }) => {
  return (
    <div className="bg-blue-100 p-2 rounded-lg text-right">
      <p>{message}</p>
      <span className="text-xs text-gray-500">{timestamp}</span>
    </div>
  );
};

export default MyMessageBox;
