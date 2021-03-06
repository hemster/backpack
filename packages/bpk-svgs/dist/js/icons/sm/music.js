function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M11.4 3C6.6 3.3 3 7.5 3 12.3V19c0 1.1.9 2 2 2h1c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H5v-1.8C5 8.6 7.6 5.5 11.1 5c4.2-.5 7.9 2.8 7.9 7v2h-1c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1c1.1 0 2-.9 2-2v-7c0-5.2-4.4-9.3-9.6-9z" /></svg>;
});