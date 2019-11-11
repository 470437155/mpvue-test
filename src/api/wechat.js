import { getOpenId } from "./index";

export function getSetting(auth, onSuccess, onFail) {
  mpvue.getSetting({
    success(res) {
      console.log(res);
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res);
      }else{
        onFail(res);
      }
    },
    fail(res) {
      onFail(res); //直接抛出异常
    }
  });
}

export function getUserInfo(onSuccess, onFail) {
  mpvue.getUserInfo({
    success(res) {
      // console.log(res);
      const { userInfo } = res;
      if (userInfo) {
        onSuccess(userInfo);
      } else {
        onFail(res);
      }
    },
    fail(res) {
      console.log(res); //直接抛出异常
    }
  });
}

export function setStorageSync(key, data) {
  mpvue.setStorageSync(key, data);
}

export function getStorageSync(key) {
  return mpvue.getStorageSync(key);
}

export function getUserOpenId(callback) {
  mpvue.login({
    success(res) {
      console.log(res);
      if (res.code) {
        const { code } = res;
        getOpenId(code)
          .then(res => {
            console.log(res);
            const {data: {data:{openid}}} = res
            setStorageSync('openId',openid)     
            callback && callback(openid)       
          })
          .catch(err => {
            console.log(err);
          });
      } else {
      }
    },
    fail(res) {
      console.log(res); //直接抛出异常
    }
  });
}


export function showLoading(title) {
  mpvue.showLoading({
    title,
    mask:true
  })
}

export function hideLoading(){
  mpvue.hideLoading()
}