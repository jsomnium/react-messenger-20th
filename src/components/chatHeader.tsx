const chatHeader: React.FC = () => {
    return (
        <div className="h-11 flex">
            <img src={require('../assets/backArrowImg.svg').default} alt="backArrowImg" />
            <div>
                김나나
            </div>
            <img src={require('../assets/morePointImg.svg').default} alt="morePointImg" />
        </div>
  );
};

export default chatHeader;