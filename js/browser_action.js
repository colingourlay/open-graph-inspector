chrome.tabs.query({
    'active': true,
    'lastFocusedWindow': true
}, function (tabs) {
    var src = 'https://developers.facebook.com/tools/debug/og/object?q=' + tabs[0].url;
    var req = new XMLHttpRequest();
    req.open('GET', src, true);
    req.onload = function (e) {
        var doc = document.implementation.createHTMLDocument("");
        doc.documentElement.innerHTML = e.target.response;
        document.body.className = "";
        doc.getElementById('messages') && document.body.appendChild(doc.getElementById('messages'));
        doc.getElementById('object_properties') && document.body.appendChild(doc.getElementById('object_properties'));
        doc.getElementById('raw_og_properties') && document.body.appendChild(doc.getElementById('raw_og_properties'));
        var sourceLink = document.createElement('a');
        sourceLink.href = src;
        sourceLink.target = '_blank';
        sourceLink.textContent = 'Facebook Open Graph object debugger';
        var source = document.createElement('div');
        source.className = 'source';
        source.appendChild(sourceLink);
        document.body.appendChild(source);
    };
    req.send(null);
});