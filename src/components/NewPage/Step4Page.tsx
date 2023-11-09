import Title from '../typography/Title/Title';
import ActionButton from '../ui/ActionButton/ActionButton';

export default function Step4Page() {
  return (
    <>
      <Title size="xxl" color="gray800">
        3단계에서 추정된 위험성이 허용가능한지를 결정하고 위험성 감소대책을 작성해주세요
      </Title>
      {/* TODO: 과정 단계 */}
      <div>TODO: 과정 단계</div>

      <div className="flex ">
        <div className="flex flex-col">
          <Title size="l" color="gray800">
            세부작업 선택
          </Title>
          <ActionButton variant="tonal-gray" size="m" isFullWidth>
            1. 원료입고원료입고
          </ActionButton>
          <ActionButton variant="tonal-gray" size="m" isFullWidth>
            2. 소부
          </ActionButton>
          <ActionButton variant="tonal-gray" size="m" isFullWidth>
            3. 옵션인쇄
          </ActionButton>
          <ActionButton variant="tonal-gray" size="m" isFullWidth>
            4. 재단
          </ActionButton>
          <ActionButton variant="tonal-gray" size="m" isFullWidth>
            5. 출하
          </ActionButton>
          <ActionButton variant="filled" size="m" isFullWidth>
            다음 세부작업
          </ActionButton>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div>
              <Title size="l" color="gray800">
                위험성 결정
              </Title>
            </div>
          </div>
          {/* TODO: 테이블 */}
          <div>TODO: 테이블</div>
        </div>
      </div>

      <div className="flex items-center">
        <ActionButton variant="tonal-gray" size="l">
          이전 단계
        </ActionButton>
        <ActionButton variant="filled" size="l" disabled>
          다음 단계
        </ActionButton>
      </div>
    </>
  );
}