// MyMessageBox 컴포넌트에 전달되는 props 타입 정의
type MyMessageBoxProps = {
  message: string;
  timestamp: string;
};

// MyMessageBox 컴포넌트: 사용자가 보낸 메시지 표시
const MyMessageBox: React.FC<MyMessageBoxProps> = ({ message, timestamp }) => {
    return (
        <div className="flex justify-end mb-2">
        {/* 타임스탬프 */}
        <span className="text-xs text-gray-500 mr-2 self-end">{timestamp}</span>
      
        {/* 메시지 박스 */}
        <div className="bg-yellow-100 text-gray-900 px-4 py-2 rounded-xl border border-yellow-300 max-w-xs">
            <p className="text-sm">{message}</p>
        </div>
        </div>
    );
};

export default MyMessageBox;
