export const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  const browsers = {
    chrome: /chrome/i.test(ua),
    safari: /safari/i.test(ua) && !/chrome/i.test(ua),
    firefox: /firefox/i.test(ua),
    edge: /edg/i.test(ua),
    ie: /msie|trident/i.test(ua)
  };
  
  return browsers;
};

export const checkFeatureSupport = () => {
  return {
    webp: testWebP(),
    gridLayout: CSS.supports('display', 'grid'),
    flexbox: CSS.supports('display', 'flex'),
    webgl: testWebGL()
  };
};

const testWebP = () => {
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

const testWebGL = () => {
  const canvas = document.createElement('canvas');
  return !!(window.WebGLRenderingContext && 
    (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
};