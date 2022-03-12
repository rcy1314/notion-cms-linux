module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '', //页面ID

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: "",  //空间ID，可为空

  // basic site info (required)
  name: 'NOISE | 知识效率集', //你的网站名称
  domain: 'https://www.noisesite.cn', //你的网站域名
  author: 'NOISE | 知识效率集', //网站作者

  // open graph metadata (optional)
  description: 'NOISE | 知识效率集', //网站描述
  socialImageTitle: 'NOISE | 知识效率集', //网站社交图片标题
  socialImageSubtitle: '👋', //网站社交副标题

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,  //页面图标
  defaultPageCover: null,  //页面封面
  defaultPageCoverPosition: 0.5, //页面封面位置

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null, //图片CDN

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null, // Git hub repo name

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false, //是否开启预览图片支持

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null //页面URL路径映射
}
