
  $(function() {
    $('#majPremier').click(function() {
      $('#premier').load('maj1.html', function() {
        alert('La première zone a été mise à jour');
      });
    });

    $('#majDeuxieme').click(function() {
      $('#deuxieme').load('maj2.html', function() {
        alert('La deuxième zone a été mise à jour');
      });
    });
  });
