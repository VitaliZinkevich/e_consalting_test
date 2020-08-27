function getTextNodesIn(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--; ) {
      var node = nodes[i],
        nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          textNodes.push(node);
        }
      } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}

checkNodes(getTextNodesIn(document));

function checkNodes(nodes) {
  nodes.forEach((node) => {
    let textArr = node.textContent.split(" ");
    let newText = textArr.map((el) => {
      if (/ing$/.test(el) || /ing[,.!?;]$/.test(el)) {
        return `<span style="color:red;">${el}</span>`;
      } else {
        return el;
      }
    });
    let elem = document.createElement("span");
    elem.innerHTML = newText.join(" ");
    node.parentNode.replaceChild(elem, node);
  });
}
