(function() {
  //get button IDs
  let stopButton = document.getElementById('stopButton')
  let slowButton = document.getElementById('slowButton')
  let goButton = document.getElementById('goButton')
  //get light IDs
  let redLight = document.getElementById('stopLight')
  let slowLight = document.getElementById('slowLight')
  let goLight = document.getElementById('goLight')
  //assign buttons to toggle lights
  stopButton.addEventListener('click', function() {
    redLight.classList.toggle('stop')
  });
 
  slowButton.addEventListener('click', function() {
    slowLight.classList.toggle('slow') 
  });

  goButton.addEventListener('click', function() {
    goLight.classList.toggle('go')
  });
  //Part 2
  stopButton.addEventListener('mouseenter', function() {
    console.log('Entered Stop Button')
  });

  stopButton.addEventListener('mouseleave', function() {
    console.log('Left Stop Button')
  });

  slowButton.addEventListener('mouseenter', function() {
    console.log('Entered Slow Button')
  });

  slowButton.addEventListener('mouseleave', function() {
    console.log('Left Slow Button')
  });

  goButton.addEventListener('mouseenter', function() {
    console.log('Entered Go Button')
  });

  goButton.addEventListener('mouseleave', function() {
    console.log('Left Go Button')
  });
  //bonus
  let controls = document.getElementById('#controls')
}) ();
