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
export function get(url, params = {}) {
  const fly = createFly();
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then(res => {
          console.log(res);
          if (res && res.data && res.data.error_code === 0) {
            resolve(res);
          }else{
            reject(res)
          }
        })
        .catch(err => {
          handleError(err);
          reject(err);
        });
    });
  }
}
export function post(url, params = {}) {
  const fly = createFly();
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          handleError(err);
          reject(err);
        });
    });
  }
}
