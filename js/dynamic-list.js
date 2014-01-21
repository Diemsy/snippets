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

    var Menu = {
        init: function (data, container) {
            var self = this;
            self.data = data;
            self.container = document.querySelector(container);
            self.container.appendChild(self.createList(self.data.list));
        },
        createList: function (data) {
            var self = this;
            var list = self.createElement('ul');
            for (var i = 0; i < data.length; i++) {
                var item = self.createElement('li');
                var link = self.createElement('a', {
                    href: data[i].href,
                    title: data[i].title
                });
                item.appendChild(link);
                if (data[i].list) {
                    item.appendChild(self.createList(data[i].list));
                }
                list.appendChild(item);
            }
            return list;
        },
        createElement: function (el, data) {
            var element = document.createElement(el);
            if (data) {
                element.href = data.href;
                element.innerHTML = data.title;
            }
            return element;
        }
    };

    Menu.init(data, '#menu');

})(window, document);
