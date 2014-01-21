(function (window, document, undefined) {

    'use strict';

    var data = {
        list: [{
            href: 'link-1-level-1.html',
            title: 'Link 1 Level 1',
            list: [{
                href: 'link-1-level-2.html',
                title: 'Link 1 Level 2',
                list: [{
                    href: 'link-1-level-3',
                    title: 'Link 1 Level 3'
                }]
            }]
        }, {
            href: 'link-2-level-1.html',
            title: 'Link 2 Level 1',
            list: [{
                href: 'link-2-level-2',
                title: 'Link 2 Level2'
            }]
        }, {
            href: 'link-3-level-1.html',
            title: 'Link 3 Level 1'
        }]
    };

    var createMenu = function (data) {
        var list = document.createElement('ul');
        for (var i = 0; i < data.length; i++) {
            var item = document.createElement('li');
            var link = document.createElement('a');
            link.href = data[i].href;
            link.innerHTML = data[i].title;
            item.appendChild(link);
            if (data[i].list) {
                item.appendChild(createMenu(data[i].list));
            }
            list.appendChild(item);
        }
        return list;
    };

    var nav = document.querySelector('.main-navigation');
    nav.appendChild(createMenu(data.list));

})(window, document);
