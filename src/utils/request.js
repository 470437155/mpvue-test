function createFly() {
  if (mpvuePlatform === "wx") {
    const fly = require("flyio/dist/npm/wx");
    return new fly();
  }
  return null;
}

function handleError(err) {
  console.log(err);
}
export function get(url, params = {}, showError = true) {
  const fly = createFly();
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then(res => {
          console.log(res);
          if (res && res.data && res.data.error_code === 0) {
            resolve(res);
          } else {
            if (showError) {
              const msg = (res && res.data && res.data.msg) || "请求失败";
              mpvue.showToast({
                title: msg, //提示的内容,
                icon: "cancel", //图标,
                duration: 2000 //延迟时间,
                // mask: true //显示透明蒙层，防止触摸穿透,
                // success: res => {}
              });
            }

            reject(res);
          }
        })
        .catch(err => {
          handleError(err);
          reject(err);
        });
    });
  }
}
export function post(url, params = {},showError = true) {
  const fly = createFly();
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then(res => {
          console.log(res);
          if (res && res.data && res.data.error_code === 0) {
            resolve(res);
          } else {
            if (showError) {
              const msg = (res && res.data && res.data.msg) || "请求失败";
              mpvue.showToast({
                title: msg, //提示的内容,
                icon: "cancel", //图标,
                duration: 2000 //延迟时间,
                // mask: true //显示透明蒙层，防止触摸穿透,
                // success: res => {}
              });
            }

            reject(res);
          }
        })
        .catch(err => {
          handleError(err);
          reject(err);
        });
    });
  }
}
