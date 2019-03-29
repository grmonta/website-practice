//get the information when use hits lick

//user's values

caculateIt = function() {
  var newLb, newTwo, newOne;

  var lbs = $('#pounds').val();

  var two = $('#2oz').val();
  var one = $('#1oz').val();

  if (lbs > 0) {
    newLb = lbs;
    newTwo = lbs * 8;
    newOne = lbs * 16;
  } else if (two > 0) {
    newTwo = two;
    newLb = two / 8;
    newOne = two * 2;
  } else if (one > 0) {
    newOne = one;
    newLb = one / 16;
    newTwo = one / 2;
  }

  
  $('#pounds').val(newLb);
  $('#2oz').val(newTwo);
  $('#1oz').val(newOne);

  //set the values to the new one
};

caculateIt();
//update the values in input

document.getElementById('caculate').addEventListener('click', caculateIt);

document.getElementById('clear').addEventListener('click', function() {
  $('#pounds').val('');
  $('#2oz').val('');
  $('#1oz').val('');
});

//if the value is three do this

//caulate somethign with it

// if there issome value in LBS
//caculate it 1oz
//caculate it to 2oz

//if there is a value in 2 0z //
//caulate 1 oz
//caculate 1 lb

//if the alue is in 1 oz
//caculate it to 1 lbs
//caculate it 2oz

//display results to the user in the box
