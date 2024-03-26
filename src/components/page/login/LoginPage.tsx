'use client';

import useLoginFormStore from '@/app/auth/login/hooks/useLoginFormStore';
import { Body, Headline, Label } from '@/components/typography';
import ActionButton from '@/components/ui/ActionButton/ActionButton';
import TextField from '@/components/ui/TextField/TextField';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';
import { DefaultApi } from '@/lib/axios/oas-axios';
import { type LoginCompanyAccountRequest } from '@/services';
import { load as fingerPrintJsLoad } from '@fingerprintjs/fingerprintjs';
import { useRouter } from 'next/navigation';

import { setCookie } from 'cookies-next';

export default function LoginPage() {
  // TODO: 로그인 Input 값은 굳이 store쓰지 말고, 그냥 useState로 관리하는게 나을 것 같다.
  // react-hook-form을 쓰면 더 좋을 것 같다.
  const { id, password, setId, setPassword, setDummyState, getLoginState } = useLoginFormStore(state => ({
    id: state.id,
    password: state.password,
    setId: state.actions.setId,
    setPassword: state.actions.setPassword,
    setDummyState: state.actions.setDummyState,
    getLoginState: state.actions.getLoginState,
  }));

  const { setLoggedInId, setCompanyName, setAccessToken, setRefreshTokenExpiredAt, setRequireAdditionalInfoYn } =
    useLoginInfoStore(state => ({
      setLoggedInId: state.setId,
      setCompanyName: state.setCompanyName,
      setAccessToken: state.setAccessToken,
      setRefreshTokenExpiredAt: state.setRefreshTokenExpiredAt,
      setRequireAdditionalInfoYn: state.setRequireAdditionalInfoYn,
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
    const {
      data: { data },
    } = await DefaultApi.loginCompanyUsingPOST(uid, loginRequest);

    if (data) {
      // setLoggedInId(data.id);
      // setCompanyName(data.companyName);
      // setAccessToken(data.accessToken);
      // setRefreshTokenExpiredAt(data.refreshTokenExpiredAt);
      // setRequireAdditionalInfoYn(data.requireAdditionalInfoYn);

      const cookieOptions = {
        expires: new Date(data.refreshTokenExpiredAt),
      };

      setCookie('accessToken', data.accessToken, cookieOptions);
      setCookie('id', data.id, cookieOptions);
      setCookie('companyName', data.companyName, cookieOptions);
      setCookie('requireAdditionalInfoYn', data.requireAdditionalInfoYn, cookieOptions);

      //TODO: 당분간 필요
      localStorage.clear();

      if (data.requireAdditionalInfoYn) router.push('/advance-information');
      else router.push('/');
    } else {
      alert('로그인 실패');
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
