
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var wxlaunch = (function () {
    'use strict';

    class Wxlaunch {
        observer;
        constructor(options) {
            this.observer = observer;
        }
        observe(elt) {
            this.observer.observe(elt, {
                childList: true,
                subtree: true
            });
            return this.observer;
        }
        add(elt) {
            elt.appendChild(genWxTag());
            const position = getComputedStyle(elt).position;
            if (position === 'static')
                elt.style.position = 'relative';
            return this.observer;
        }
    }
    const genWxTag = () => {
        const wxTag = document.createElement('wx-open-launch-app');
        const script = document.createElement('script');
        const div = document.createElement('div');
        script.type = 'text/wxtag-template';
        div.style = 'display: block; width: 100%; height: 100%;';
        wxTag.style = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, .3)';
        wxTag.appid = 'soulAppId';
        wxTag.extinfo = '{}';
        script.appendChild(div);
        wxTag.appendChild(script);
        wxTag.addEventListener('click', () => { alert('唤起app'); });
        wxTag.addEventListener('launch', () => { });
        wxTag.addEventListener('error', () => { });
        return wxTag;
    };
    const observer = new MutationObserver(function (mutationsList, mutationObserver) {
        // mutationsList参数是个MutationRecord对象数组，描述了每个发生的变化
        mutationsList.forEach(function (mutation) {
            console.log('mutation====>', mutation);
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== 1)
                    return;
                const elt = node;
                if (elt.hasAttribute('data-wx-tag')) {
                    elt.appendChild(genWxTag());
                    const position = getComputedStyle(elt).position;
                    if (position === 'static')
                        elt.style.position = 'relative';
                }
            });
        });
    });

    return Wxlaunch;

})();
//# sourceMappingURL=bundle.js.map
