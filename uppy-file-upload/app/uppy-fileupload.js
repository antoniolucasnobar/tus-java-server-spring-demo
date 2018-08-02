module.exports = {
  uppy: function() {
    require("uppy/dist/uppy.min.css")
    const Uppy = require('@uppy/core')
    const Dashboard = require('@uppy/dashboard')
    const Tus = require('@uppy/tus')

    const uppy = Uppy({
      debug: true,
      autoProceed: false,
//      restrictions: {
//        maxFileSize: 1000000,
//        maxNumberOfFiles: 3,
//        minNumberOfFiles: 2,
//        allowedFileTypes: ['image/*', 'video/*']
//      }
    })
    .use(Dashboard, {
      inline: true,
      target: '.DashboardContainer',
      replaceTargetContent: true,
      note: 'The best way to test this is with a file of several hundred MB (e.g. a Linux distro DVD image)',
      maxHeight: 450,
      metaFields: [
        { id: 'license', name: 'License', placeholder: 'specify license' },
        { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
      ]
    })
    .use(Tus, { endpoint: 'http://localhost:8080/api/upload' })

    return uppy;
  }
}