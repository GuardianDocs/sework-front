import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { convertDateToZonedDateTime } from '@/utils/dateUtil';

export type JoinFormState = {
  baddress: string;
  businessNumber: string;
  companyName: string;
  detailAddress: string;
  email: string;
  // TODO: to be deprecated, delete after api update
  employeeNumber: number;
  ownerName: string;
  password: string;
  postNumber: string;
  startDate: string;
};

type JoinFormAction = {
  setBaddress: (baddress: string) => void;
  setBusinessNumber: (businessNumber: string) => void;
  setCompanyName: (companyName: string) => void;
  setDetailAddress: (detailAddress: string) => void;
  setEmail: (email: string) => void;
  setEmployeeNumber: (employeeNumber: number) => void;
  setOwnerName: (ownerName: string) => void;
  setPassword: (password: string) => void;
  setPostNumber: (postNumber: string) => void;
  setStartDate: (startDate: string) => void;

  setDummyState: () => void;

  getBaddress: () => string;
  getBusinessNumber: () => string;
  getCompanyName: () => string;
  getDetailAddress: () => string;
  getEmail: () => string;
  getEmployeeNumber: () => number;
  getOwnerName: () => string;
  getPassword: () => string;
  getPostNumber: () => string;
  getStartDate: () => string;

  getAllState: () => JoinFormState;

  isFormIncomplete: () => boolean;

  reset: () => void;
};

type JoinFormStore = JoinFormState & {
  actions: JoinFormAction;
};

const initialState: JoinFormState = {
  baddress: '',
  businessNumber: '',
  companyName: '',
  detailAddress: '',
  email: '',
  employeeNumber: 0,
  ownerName: '',
  password: '',
  postNumber: '',
  startDate: '',
};

const dummyState: JoinFormState = {
  baddress: '',
  businessNumber: '8973400618',
  companyName: '테스트',
  detailAddress: '',
  email: 'test@email.com',
  employeeNumber: 10,
  ownerName: '고금주',
  password: 'qwer1234',
  postNumber: '',
  startDate: '2019-09-05T00:00:00.000Z',
};

const useJoinFormStore = create(
  devtools<JoinFormStore>((set, get) => ({
    ...initialState,
    actions: {
      setBaddress: baddress => set({ baddress }),
      setBusinessNumber: businessNumber => set({ businessNumber }),
      setCompanyName: companyName => set({ companyName }),
      setDetailAddress: detailAddress => set({ detailAddress }),
      setEmail: email => set({ email }),
      setEmployeeNumber: employeeNumber => set({ employeeNumber }),
      setOwnerName: ownerName => set({ ownerName }),
      setPassword: password => set({ password }),
      setPostNumber: postNumber => set({ postNumber }),
      setStartDate: startDate => set({ startDate: convertDateToZonedDateTime(startDate) }),

      setDummyState: () => set(dummyState),

      getBaddress: () => get().baddress,
      getBusinessNumber: () => get().businessNumber,
      getCompanyName: () => get().companyName,
      getDetailAddress: () => get().detailAddress,
      getEmail: () => get().email,
      getEmployeeNumber: () => get().employeeNumber,
      getOwnerName: () => get().ownerName,
      getPassword: () => get().password,
      getPostNumber: () => get().postNumber,
      getStartDate: () => get().startDate,

      getAllState: () => get(),

      isFormIncomplete: () => {
        const {
          baddress,
          businessNumber,
          companyName,
          detailAddress,
          email,
          employeeNumber,
          ownerName,
          password,
          postNumber,
          startDate,
        } = get();

        return (
          baddress === '' ||
          businessNumber === '' ||
          companyName === '' ||
          detailAddress === '' ||
          email === '' ||
          employeeNumber === 0 ||
          ownerName === '' ||
          password === '' ||
          postNumber === '' ||
          startDate === ''
        );
      },

      reset: () => set(initialState),
    },
  }))
);

export default useJoinFormStore;
