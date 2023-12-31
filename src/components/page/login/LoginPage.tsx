'use client';

import { Body, Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import TextField from '@/components/ui/TextField/TextField';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';
import useLoginFormStore from '@/app/auth/login/hooks/useLoginFormStore';
import { DefaultApi } from '@/lib/axios/oas-axios';
import { useRouter } from 'next/navigation';
import { type ResponseResultLoginCompanyAccountResponse, type LoginCompanyAccountRequest } from '@/services';
import { load as fingerPrintJsLoad } from '@fingerprintjs/fingerprintjs';

export default function LoginPage() {
  const { id, password, setId, setPassword, setDummyState, getLoginState } = useLoginFormStore(state => ({
    id: state.id,
    password: state.password,
    setId: state.actions.setId,
    setPassword: state.actions.setPassword,
    setDummyState: state.actions.setDummyState,
    getLoginState: state.actions.getLoginState,
  }));

  const {
    setLoggedInId,
    setBusinessNumber,
    setCompanyId, // TODO: 필요 없는 것 같은데?
    setCompanyName,
    setOwnerName,
    setAccessToken,
    setRefreshTokenExpiredAt,
  } = useLoginInfoStore(state => ({
    setLoggedInId: state.setId,
    setBusinessNumber: state.setBusinessNumber,
    setCompanyId: state.setCompanyId,
    setCompanyName: state.setCompanyName,
    setOwnerName: state.setOwnerName,
    setAccessToken: state.setAccessToken,
    setRefreshTokenExpiredAt: state.setRefreshTokenExpiredAt,
  }));

  const router = useRouter();

  const loginCompanyAccount = async () => {
    const loginInfo = getLoginState();
    const loginRequest: LoginCompanyAccountRequest = {
      email: loginInfo.id,
      password: loginInfo.password,
    };

    const fingerAgent = await fingerPrintJsLoad();
    const fingerPrintAgentResult = await fingerAgent.get();
    const uid = fingerPrintAgentResult.visitorId;

    const response = await DefaultApi.loginCompanyUsingPOST(uid, loginRequest);

    const { code, message, data } = response?.data as ResponseResultLoginCompanyAccountResponse;

    if (code === '0001' && data) {
      console.log('로그인 성공');
      console.log(data);

      setLoggedInId(data.id);
      // setBusinessNumber(data.businessNumber);
      setCompanyName(data.companyName);
      // setOwnerName(data.ownerName);
      setAccessToken(data.accessToken);
      setRefreshTokenExpiredAt(data.refreshTokenExpiredAt);

      // TODO: 회사 정보가 없으면 기본 정보 입력 페이지로 이동
      router.push('/landing/basic-info');
    } else {
      alert(message);
    }
  };

  return (
    <div className="flex p-2.5 justify-center items-center gap-2.5 shrink-0">
      <div className="flex flex-col items-center gap-12 pb-12 w-[384px]">
        <div className="self-stretch">
          <Headline size="s" color="gray800">
            로그인
          </Headline>
        </div>
        {/* 이메일, 비밀번호 */}
        <div className="flex flex-col items-start self-stretch gap-6">
          {/* 이메일 */}
          <div className="flex flex-col items-start self-stretch gap-2">
            <Label size="s" color="gray600">
              이메일
            </Label>
            <TextField.Single
              sizeVariant="m"
              isFullWidth
              value={id}
              onChange={event => {
                setId(event.target.value);
              }}
            />
          </div>
          {/* 비밀번호 */}
          <div className="flex flex-col items-start self-stretch gap-2">
            <Label size="s" color="gray600">
              비밀번호
            </Label>
            <TextField.Single
              sizeVariant="m"
              isFullWidth
              type="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        {/* 로그인 버튼 */}
        <div className="flex flex-col items-center self-stretch gap-4">
          <ActionButton variant="filled" size="l" onClick={loginCompanyAccount} isFullWidth>
            로그인
          </ActionButton>
          {/* TODO: 수정 필요 */}
          <div className="flex items-center gap-2">
            <Body size="m" color="gray600">
              비밀번호가 기억나지 않으시나요?
            </Body>
            <ActionButton variant="tonal-blue" size="s" onClick={setDummyState}>
              비밀번호 찾기
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
