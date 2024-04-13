let welcome = prompt(
  'Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math'
);
let question_1 = '';
let question_2 = '';
let question_3 = '';

switch (welcome) {
  case '1':
    question_1 = prompt('რა არის რა არის typeof(5)?');
    break;
  case '2':
    question_2 = prompt('შეიძლება თუ არა let-ის რედეკლალირება?');
    break;
  case '3':
    question_3 = prompt('რას აბრუნებს console.log(Math.floor(2.1))? ');
    break;
  default:
    'ERORR!!!';
}

if (question_1.toLowerCase() === 'number') {
  alert('გილოცავთ პასუხი სწორია🥳');
} else if (question_2.toLowerCase() === 'yes') {
  alert('გილოცავთ პასუხი სწორია🥳');
} else if (question_3.toLowerCase() === 'ori') {
  alert('გილოცავთ პასუხი სწორია🥳');
} else alert('სამწუხაროდ პასუხი არაზუსტია 🥺');
