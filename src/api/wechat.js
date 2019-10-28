export function getSetting(auth,onSuccess, onFail) {
  mpvue.getSetting({
    success(res) {
      console.log(res);
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res);
      }
    },
    fail(res) {
      onFail(res);//直接抛出异常
    }
  });
}

export function getUserInfo(onSuccess,onFail){
    mpvue.getUserInfo({
        success(res){
            // console.log(res);
            const {userInfo} = res
            if(userInfo){
                onSuccess(res)
            }else{
                onFail(res)
            }
        },
        fail(res){
            console.log(res);//直接抛出异常
        }
    })
}