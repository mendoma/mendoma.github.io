// Show sidebar on smaller screens
$(document).ready(function () {

  // Show sidebar on smaller screens
  $('.sidenav').sidenav()

  // Trigger modal
  $('.modal-trigger').on('click', function (element) {

    // Prevent default link behavior
    element.preventDefault()

    // Set iframe source in modal to project github link
    let src = $(this).attr('link')
    let code = $(this).attr('code')

    $('#modal-frame').attr('src', src)
    $('#deployed-site').attr('href', src)
    $('#view-code').attr('href', code)

    // Trigger modal
    $('.modal').modal()

  })
})