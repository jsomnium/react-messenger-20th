// DateDivider 컴포넌트에 전달되는 props 타입 정의
type DateDividerProps = {
  date: string;  // date prop을 문자열로 받을 수 있도록 설정
};

// DateDivider 컴포넌트: 날짜 구분자를 표시
const DateDivider: React.FC<DateDividerProps> = ({ date }) => {
  return (
    <div className="text-gray-500 text-center py-2">
      {date}
    </div>
  );
};

export default DateDivider;
