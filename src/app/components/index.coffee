api = {}

api.setActiveLinks = (href) ->
  fragment = '/'+href.split('/')[1]
  $('#navbar li').removeClass('active')
  $('#navbar li a[href="'+fragment+'"]').parent().addClass('active')

module.exports = api
