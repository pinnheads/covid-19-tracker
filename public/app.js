window.addEventListener('DOMContentLoaded', (event) => {
  // Change Card color according to heading
  var confirmed = document.getElementById('Confirmed');
  confirmed.style.borderBottomColor = '#65c0eb';

  var recovered = document.getElementById('Recovered');
  recovered.style.borderBottomColor = '#53c95c';

  document.querySelectorAll('#increase')[2].innerHTML =
    '<h3 style="margin: 13px 0;">Data not Recorded</h3>';

  document.querySelector('#Confirmed p').style.color = '#65c0eb';
  document.querySelector('#Deaths p').style.color = 'crimson';
  document.querySelector('#Recovered p').style.color = '#53c95c';

  document.querySelector('button').addEventListener('click', () => {
    setTimeout(() => {
      window.scrollTo(0, 1000);
    }, 600);
  });
});
