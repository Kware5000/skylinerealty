







module.exports = () => {


  return {
    /* config options for all phases except development here */
    
    reactStrictMode: false,
    videos: require('next-videos'),
    images: {
      domains: ['ap.rdcpix.com', 'ar.rdcpix.com']
    },
  }
}