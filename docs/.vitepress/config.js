/*
 * @Description: Configuration
 * @Author: Sunly
 * @Date: 2022-11-19 06:34:36
 */
export default {
  base: "/blog/",
  themeConfig: {
    siteTitle: "Sunly's Blog",
    nav: [{ text: "foo", link: "/foo/1", activeMatch: "/foo/" }],
    socialLinks: [{ icon: "github", link: "https://github.com/sjx1995" }],
    sidebar: {
      "/foo/": [
        {
          text: "foo",
          collapsible: true,
          collapsed: false,
          items: [
            { text: "foo 1", link: "/foo/1" },
            { text: "foo 2", link: "/foo/2" },
          ],
        },
        {
          text: "another foo",
          collapsible: false,
          collapsed: false,
          items: [{ text: "foo 3", link: "/foo/3" }],
        },
      ],
    },
  },
};
