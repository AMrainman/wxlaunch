export default class Wxlaunch {
  observer: MutationObserver

  constructor(options) {
    this.observer = observer
  }

  observe(elt: HTMLDivElement) {
    this.observer.observe(elt, {
      childList: true,
      subtree: true
    })
    return this.observer
  }

  add(elt: HTMLDivElement) {
    elt.appendChild(genWxTag())
    const position = getComputedStyle(elt).position
    if (position === 'static') elt.style.position = 'relative'

    return this.observer
  }
}

const genWxTag = () => {
  const wxTag: any = document.createElement('wx-open-launch-app')
  const script = document.createElement('script')
  const div: any = document.createElement('div')
  script.type = 'text/wxtag-template'
  div.style = 'display: block; width: 100%; height: 100%;'
  wxTag.style = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, .3)'
  wxTag.appid = 'soulAppId'
  wxTag.extinfo = '{}'
  script.appendChild(div)
  wxTag.appendChild(script)
  wxTag.addEventListener('click', () => {alert('唤起app')})
  wxTag.addEventListener('launch', () => {})
  wxTag.addEventListener('error', () => {})
  return wxTag
}

const observer = new MutationObserver(function (mutationsList, mutationObserver) {
  // mutationsList参数是个MutationRecord对象数组，描述了每个发生的变化
  mutationsList.forEach(function (mutation) {
    console.log('mutation====>', mutation)
    mutation.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return

      const elt = node as HTMLDivElement
      if (elt.hasAttribute('data-wx-tag')) {
        elt.appendChild(genWxTag())
        
        const position = getComputedStyle(elt).position
        if (position === 'static') elt.style.position = 'relative'
      }
    })
  })
})