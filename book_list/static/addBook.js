$('.alert').hide()
$( "#bookform" ).submit(function( event ) {

  event.preventDefault();
  var $form = $( this );
  $.post( "http://localhost:8000/api/book/", $form.serialize())
    .done(function() {
        $form[0].reset();
        $('.alert').hide()
        $('.alert-success').show()
    })
    .fail(function (err){
        $('.alert').hide()
        $('.alert-danger').show()
        $('#status-error').text(err.statusText)
    })
});