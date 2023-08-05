import { makeObservable, observable, action, runInAction } from 'mobx';
import api from '@/api';
class User {
  info = {};
  constructor() {
    makeObservable(this, {
      info: observable,
      changeInfo: action,
      queryUserInfoAsync: action,
      clearUserInfo: action,
    });
  }

  changeInfo(info: any) {
    this.info = info;
  }

  clearUserInfo() {
    this.info = {};
  }

  // 查询用户信息
  queryUserInfoAsync() {
    runInAction(async () => {
      try {
        const { code, data } = await api.queryUserInfo();
        if (code === 0) {
          this.info = data;
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
}
const user = new User();
export default user;
