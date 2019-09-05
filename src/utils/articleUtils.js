export const fixExternalLink = articleBody => {
  if (
    !articleBody ||
    typeof articleBody !== 'object' ||
    !('nodeType' in articleBody) ||
    articleBody.nodeType !== 1
  ) {
    return;
  }

  const anchors = articleBody.querySelectorAll('a');
  const domain = document.domain;
  if (!anchors || anchors.length === 0) return;
  [].slice.call(anchors).forEach(anchor => {
    const href = anchor.href;
    const reg = new RegExp('^(https?:)?//' + domain);
    if (!href.match(reg) && href.charAt(0) !== '/' && href.charAt(0) !== '#') {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('ref', 'noopener noreferer');
      anchor.classList.add('is-external');
    }
  });
};
