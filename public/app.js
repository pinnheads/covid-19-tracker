window.addEventListener('DOMContentLoaded', (event) => {
  // Change Card color according to heading
  var confirmed = document.getElementById('Confirmed');
  confirmed.style.borderBottomColor = '#f0dd62';

  var recovered = document.getElementById('Recovered');
  recovered.style.borderBottomColor = '#53c95c';

  document.querySelectorAll('#increase')[2].innerHTML =
    '<h3 style="margin: 13px 0;">Data not Recorded</h3>';
});
