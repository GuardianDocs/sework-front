'use client';

import Body from '../typography/Body/Body';
import Title from '../typography/Title/Title';
import ActionButton from '../ui/ActionButton/ActionButton';
import ProgressBox from '../ui/ProgressBox/ProgressBox';
import ProgressBoxV2 from '../ui/ProgressBox/v2/ProgressBox';

export default function Step1Page() {
  return (
    <>
      <Title size="xxl" color="gray800">
        평가대상 세부작업을 선택 또는 직접 입력해주세요
      </Title>
      {/* TODO: 과정 단계 */}
      <ProgressBox />
      <ProgressBoxV2 />
      <Title size="l" color="gray800">
        업종
      </Title>
      <div className="flex items-center w-full gap-4 p-6 rounded bg-gray-50">
        <Body size="l" color="gray800">
          인쇄업
        </Body>
      </div>
      <div className="flex items-center">
        <div>
          <Title size="l" color="gray800">
            세부작업 확정
          </Title>
        </div>
        <div>
          <ActionButton variant="tonal-gray" size="s">
            직접 추가
          </ActionButton>
          <ActionButton variant="filled" size="s">
            자동 추천 추가
          </ActionButton>
          <ActionButton variant="filled" size="s">
            저장
          </ActionButton>
        </div>
      </div>
      {/* TODO: 테이블 */}
      <div>TODO: 테이블</div>
      <ActionButton variant="filled" size="l">
        저장 후 다음 단계
      </ActionButton>
    </>
  );
}
