export const NEW_REPORT_STEP = [
  {
    step: 1,
    title: '평가 관련 정보를 알려주세요',
    description: '설문을 통해 보다 정확한 보고서를 출력해드릴 수 있습니다.',
  },
  {
    step: 2,
    title: '사고 및 근로자 관련 정보를 알려주세요',
    description: '설문을 통해 보다 정확한 보고서를 출력해드릴 수 있습니다.',
  },
  {
    step: 3,
    title: '안전보건체계의 담당자를 입력해주세요',
    description: '설문을 통해 보다 정확한 보고서를 출력해드릴 수 있습니다.',
  },
  {
    step: 4,
    title: '귀하의 회사에 대해서 알려주세요',
    description: '설문을 통해 보다 정확한 보고서를 출력해드릴 수 있습니다.',
  },
];

export const REPORT_TYPE = [
  {
    label: '최초평가',
    value: 'INITIAL',
  },
  {
    label: '수시평가',
    value: 'CONTINUOUS',
  },
  {
    label: '정기평가',
    value: 'REGULAR',
  },
];

export const DEMOGRAPHY_LIST = [
  {
    value: 'WOMEN',
    text: '여성근로자',
  },
  {
    value: 'ROOKIE',
    text: '1년미만 미숙련자 (신입)',
  },
  {
    value: 'ELDERLY',
    text: '고령근로자 (만60세 이상)',
  },
  {
    value: 'TEMPORARY',
    text: '비정규직 근로자 (계약직, 용역, 파견, 프리랜서 포함)',
  },
  {
    value: 'FOREIGN',
    text: '외국인근로자 (불법체류자 포함)',
  },
  {
    value: 'HANDICAPPED',
    text: '장애근로자',
  },
  {
    value: 'NONE',
    text: '해당사항 없음',
  },
];
