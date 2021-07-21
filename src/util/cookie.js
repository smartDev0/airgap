import isSSR from './isSSR';

// Reads cookie property by key
function readCookie(key) {
  var keyEQ = key + "=";
  var cookieArray = (!isSSR) ? document.cookie.split(';') : [];

  for (var i = 0; i < cookieArray.length; i++) {
    var cookieItem = cookieArray[i];
    while (cookieItem.charAt(0) === ' ') {
      cookieItem = cookieItem.substring(1, cookieItem.length);
    }
    if (cookieItem.indexOf(keyEQ) === 0) {
      return cookieItem.substring(keyEQ.length, cookieItem.length);
    }
  }
  return null;
}

// Writes cookie property
function writeCookie(key, value, days) {
  var expiration = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expiration = "; expires=" + date.toGMTString();
  }

  if (!isSSR) {
    document.cookie = key + "=" + value + expiration + "; path=/";
  }
}

export { writeCookie, readCookie };
