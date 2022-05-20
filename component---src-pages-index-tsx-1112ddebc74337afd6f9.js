'use strict';
(self.webpackChunkandrixb_github_io = self.webpackChunkandrixb_github_io || []).push([
    [691],
    {
        4385: function (t, e, o) {
            o.r(e);
            var r = o(4942),
                i = o(7294);
            function n(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        o.push.apply(o, r);
                }
                return o;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? n(Object(o), !0).forEach(function (e) {
                              (0, r.Z)(t, e, o[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                        : n(Object(o)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                          });
                }
                return t;
            }
            var a = { color: '#232129', padding: 96, fontFamily: '-apple-system, Roboto, sans-serif, serif' },
                l = { marginTop: 0, marginBottom: 64, maxWidth: 320 },
                c = { color: '#663399' },
                u = { marginBottom: 48 },
                p = { color: '#8A6534', padding: 4, backgroundColor: '#FFF4DB', fontSize: '1.25rem', borderRadius: 4 },
                d = { marginBottom: 96, paddingLeft: 0 },
                m = { fontWeight: 300, fontSize: 24, maxWidth: 560, marginBottom: 30 },
                g = { color: '#8954A8', fontWeight: 'bold', fontSize: 16, verticalAlign: '5%' },
                y = s(s({}, g), {}, { listStyleType: 'none', marginBottom: 24 }),
                b = { color: '#232129', fontSize: 14, marginTop: 10, marginBottom: 0, lineHeight: 1.25 },
                f = 'TypeScript Documentation',
                h = 'https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/',
                w = {
                    color: '#fff',
                    backgroundColor: '#088413',
                    border: '1px solid #088413',
                    fontSize: 11,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    borderRadius: 4,
                    padding: '4px 6px',
                    display: 'inline-block',
                    position: 'relative',
                    top: -2,
                    marginLeft: 10,
                    lineHeight: 1,
                },
                E = [
                    {
                        text: 'Tutorial',
                        url: 'https://www.gatsbyjs.com/docs/tutorial/',
                        description:
                            "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
                        color: '#E95800',
                    },
                    {
                        text: 'How to Guides',
                        url: 'https://www.gatsbyjs.com/docs/how-to/',
                        description:
                            "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
                        color: '#1099A8',
                    },
                    {
                        text: 'Reference Guides',
                        url: 'https://www.gatsbyjs.com/docs/reference/',
                        description:
                            "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
                        color: '#BC027F',
                    },
                    {
                        text: 'Conceptual Guides',
                        url: 'https://www.gatsbyjs.com/docs/conceptual/',
                        description:
                            'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
                        color: '#0D96F2',
                    },
                    {
                        text: 'Plugin Library',
                        url: 'https://www.gatsbyjs.com/plugins',
                        description:
                            'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
                        color: '#8EB814',
                    },
                    {
                        text: 'Build and Host',
                        url: 'https://www.gatsbyjs.com/cloud',
                        badge: !0,
                        description:
                            'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
                        color: '#663399',
                    },
                ];
            e.default = function () {
                return i.createElement(
                    'main',
                    { style: a },
                    i.createElement('title', null, 'Home Page'),
                    i.createElement(
                        'h1',
                        { style: l },
                        'Congratulations',
                        i.createElement('br', null),
                        i.createElement('span', { style: c }, '— you just made a Gatsby site! '),
                        '🎉🎉🎉'
                    ),
                    i.createElement(
                        'p',
                        { style: u },
                        'Edit ',
                        i.createElement('code', { style: p }, 'src/pages/index.tsx'),
                        ' to see this page update in real-time. 😎'
                    ),
                    i.createElement(
                        'ul',
                        { style: d },
                        i.createElement(
                            'li',
                            { style: y },
                            i.createElement(
                                'a',
                                {
                                    style: g,
                                    href: h + '?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts',
                                },
                                f
                            )
                        ),
                        E.map(function (t) {
                            return i.createElement(
                                'li',
                                { key: t.url, style: s(s({}, m), {}, { color: t.color }) },
                                i.createElement(
                                    'span',
                                    null,
                                    i.createElement(
                                        'a',
                                        {
                                            style: g,
                                            href:
                                                t.url +
                                                '?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts',
                                        },
                                        t.text
                                    ),
                                    t.badge && i.createElement('span', { style: w, 'aria-label': 'New Badge' }, 'NEW!'),
                                    i.createElement('p', { style: b }, t.description)
                                )
                            );
                        })
                    ),
                    i.createElement('img', {
                        alt: 'Gatsby G Logo',
                        src: "data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E",
                    })
                );
            };
        },
    },
]);
//# sourceMappingURL=component---src-pages-index-tsx-1112ddebc74337afd6f9.js.map
