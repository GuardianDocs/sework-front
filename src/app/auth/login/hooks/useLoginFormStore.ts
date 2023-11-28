import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type LoginFormState = {
  id: string;
  password: string;
};

type LoginFormAction = {
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setDummyState: () => void;
  getId: () => string;
  getPassword: () => string;
  getLoginState: () => LoginFormState;
  isFormIncomplete: () => boolean;
  reset: () => void;
};

type LoginFormStore = LoginFormState & {
  actions: LoginFormAction;
};

const initialState: LoginFormState = {
  id: '',
  password: '',
};

const dummyState: LoginFormState = {
  id: '8973400618',
  // password: 'qwer1234',
  password: 'aaaa',
};

const useLoginFormStore = create(
  devtools<LoginFormStore>((set, get) => ({
    ...initialState,
    actions: {
      setId: id => set({ id }),
      setPassword: password => set({ password }),
      setDummyState: () => set(dummyState),
      getId: () => get().id,
      getPassword: () => get().password,
      getLoginState: () => {
        const { id, password } = get();
        return { id, password };
      },
      isFormIncomplete: () => {
        const { id, password } = get();
        return id === '' || password === '';
      },
      reset: () => set(initialState),
    },
  }))
);

export default useLoginFormStore;
