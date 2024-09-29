// DateDivider 컴포넌트에 전달되는 props 타입 정의
type DateDividerProps = {
  date: string;  // date prop을 문자열로 받을 수 있도록 설정
};

// DateDivider 컴포넌트: 날짜 구분자를 표시
const DateDivider: React.FC<DateDividerProps> = ({ date }) => {
  return (
    <div className="flex items-center justify-center w-full my-4">
      {/* 왼쪽 선 */}
      <div className="flex-grow border-t border-gray-200"></div>

      {/* 날짜 텍스트 */}
      <span className="px-2 text-gray-400 text-xs">{date}</span>

      {/* 오른쪽 선 */}
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
};

export default DateDivider;
