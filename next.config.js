const blogCategories= ["digital-marketing","content-marketing","growth-hacking","social-media","mobile",
                        "community-management","email","word-of-mouth","analytics","brand-identity"]



module.exports={ 
  exportPathMap: () => ({ 
      "/": {page: '/'},
      '/digital-marketing/website-digital-gq': { page: '/post', query: { title: 'custom pathmap' } }
  })
}

                        
const withFonts = require('next-fonts')
const	withCss	=	require('@zeit/next-css');
const	withImages	=	require('next-images');
const nextWebpackConfig = withFonts(withImages(withCss({cssModules: true})))
module.exports	=	 nextWebpackConfig;