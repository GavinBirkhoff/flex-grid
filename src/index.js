// config is object for maxWidth unit ...
export function flexViewport(config) {
  if (!window || !document) {
    console.warn("window or document go bad, flex-grid run failed");
    return;
  }

  let docEl = document.documentElement;
  let dpr = window.devicePixelRatio || 1;
  let maxWidth;
  let unit = 10;
  let defaultFontS = 12;
  if (config) {
    if (config.pcWidth) {
      maxWidth = config.pcWidth;
    }
    if (config.unit) {
      unit = config.unit;
    }
  }

  function getCurrentFontSize() {
    if (window.getComputedStyle) {
      let currentFontS = parseInt(window.getComputedStyle(docEl)["fontSize"]);
      if (currentFontS) {
        if (!docEl.style.fontSize) {
          let clientWidth =
            docEl.clientWidth > maxWidth ? maxWidth : docEl.clientWidth;
          currentFontS = clientWidth / unit;
        }
        return currentFontS;
      } else {
        return defaultFontS;
      }
    }
  }

  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = defaultFontS * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  function setRemUnit() {
    if (maxWidth && docEl.clientWidth > maxWidth && dpr === 1) {
      docEl.style.fontSize = getCurrentFontSize() + "px";
    } else {
      let rem = docEl.clientWidth / unit;
      docEl.style.fontSize = rem + "px";
    }
  }

  setRemUnit();

  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function(e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  if (dpr >= 2) {
    let fakeBody = document.createElement("body");
    let testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
}
