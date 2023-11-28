/*
import Axios from "axios";
import { load as fingerPrintJsLoad } from "@fingerprintjs/fingerprintjs";
import { storeToRefs } from "pinia";
import { useAccountStore } from "~~/store/account";

export default defineNuxtPlugin(async () => {
  const axios = Axios.create();
  const runtimeConfig = useRuntimeConfig();

  const fingerAgent = await fingerPrintJsLoad();
  const fingerPrintAgentResult = await fingerAgent.get();
  const uid = fingerPrintAgentResult.visitorId;

  axios.defaults.baseURL = runtimeConfig.public.baseURL;
  axios.defaults.headers.common["X-JELLYWITH-APP-UID"] = uid;
  axios.defaults.headers.common["X-JELLYWITH-APP-TYPE"] = "WEB";
  axios.defaults.withCredentials = true;

  const authStore = useAccountStore();
  const { accessToken, authenticated } = storeToRefs(authStore);

  axios.interceptors.request.use(
    (config) => {
      if (authenticated.value) {
        config.headers.Authorization = `Bearer ${accessToken.value}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return {
    provide: {
      axios,
    },
  };
});
*/
