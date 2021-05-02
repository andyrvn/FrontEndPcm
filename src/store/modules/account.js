import { storage } from "@/utils";
import accountsAPI from "@/api/account";
import axios from "@/utils/axios";

const initialState = {
  user: storage.get("auth")
};

export default {
  state: initialState,
  mutations: {
    SET_USER_DATA(state, { userName, token, ...rest }) {
      state.user = {
        userName,
        ...rest
      };
      // Store the token in local storage
      storage.set("auth", { userName, token });
      // Set token in the header for future requests
      axios.defaults.headers.common = {
        Authorization: token
      };
    },
    RESET_USER_DATA(state) {
      state.user = null;
      storage.clear();
    }
  },
  actions: {
    login: {
      root: true,
      handler({ commit }, loginDetails) {
        return accountsAPI.login(loginDetails).then(({ headers }) => {
          commit("SET_USER_DATA", {
            userName: loginDetails.userName,
            token: headers["x-auth-token"]
          });
        });
      }
    },
    logout: {
      root: true,
      handler({ commit }) {
        commit("RESET_USER_DATA");
      }
    },
    register: {
      root: true,
      handler(ctx, {userName, name, email, password }) {
        return accountsAPI.register({userName, name, email, password });
      }
    }
  },
  getters: {
    userDetails(state) {
      return state.user;
    },
    isLoggedIn({ token = null, userName = null }) {
      return Boolean(token && userName);
    }
  }
};
