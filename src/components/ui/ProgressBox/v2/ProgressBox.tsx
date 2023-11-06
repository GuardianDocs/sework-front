import React from 'react';

// Define props for each stage
type StageProps = {
  stageNumber: string;
  stageTitle: string;
  bgImage: string;
  strokeImage: string;
  textColor: string;
  textBoldColor: string;
  position: string;
};

// Component for each stage
const Stage: React.FC<StageProps> = props => {
  return (
    <div
      id="Bg"
      onClick={() => alert(`Clicked on stage: ${props.stageTitle}`)}
      onMouseOver={() => alert(`Hovering on stage: ${props.stageTitle}`)}
      className={`w-[307px] h-20 bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-[${props.position}] flex flex-col items-start`}
    >
      <div
        id="Stroke"
        className={`bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center pl-8 w-[307px] h-20 shrink-0 items-start`}
      >
        <div className={`text-sm font-['Pretendard'] font-bold leading-[20px] text-[${props.textColor}]`}>
          {props.stageNumber}
        </div>
        <div className={`font-['Pretendard'] font-bold leading-[24px] text-[${props.textBoldColor}]`}>
          {props.stageTitle}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="relative flex flex-col items-start w-full">
      <Stage
        stageNumber="4단계"
        stageTitle="감소대책 수립"
        bgImage="https://file.rendit.io/n/0T2z8xh8FCx0pwQwl4mO.svg"
        strokeImage="https://file.rendit.io/n/hs6s5CLU3Bwe0Q9OwxNC.svg"
        textColor="#a4a9b2"
        textBoldColor="#a4a9b2"
        position="894px"
      />
      <Stage
        stageNumber="3단계"
        stageTitle="위험성 수준 판단"
        bgImage="https://file.rendit.io/n/1epq1GkR9wSsf4RcRUDx.svg"
        strokeImage="https://file.rendit.io/n/CHNpAgtkXAJcgNo3PGlN.svg"
        textColor="#a4a9b2"
        textBoldColor="#a4a9b2"
        position="594px"
      />
      <Stage
        stageNumber="2단계"
        stageTitle="유해 위험요인 파악"
        bgImage="https://file.rendit.io/n/1epq1GkR9wSsf4RcRUDx.svg"
        strokeImage="https://file.rendit.io/n/CHNpAgtkXAJcgNo3PGlN.svg"
        textColor="#a4a9b2"
        textBoldColor="#a4a9b2"
        position="294px"
      />
      <img
        src="https://file.rendit.io/n/clA3O2yyDL6jjur4qPSv.svg"
        id="Bg3"
        className="w-[207px] h-20 absolute top-0 left-0"
      />
      <Stage
        stageNumber="1단계"
        stageTitle="사전준비"
        bgImage="https://file.rendit.io/n/12SX3SjhGafdnOvdlPo0.svg"
        strokeImage="https://file.rendit.io/n/glLPr7c0m2PrDYUJFvA1.svg"
        textColor="#004dbc"
        textBoldColor="#2a303b"
        position="0"
      />
    </div>
  );
};

export default App;
