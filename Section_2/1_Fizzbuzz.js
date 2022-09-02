for (let i = 0; i < 100; i++) {
    //if the number is divisible by 3 and 5 >> FizzBuzz
    if((i+1)%3==0 && (i+1)%5==0) console.log('FizzBuzz');
    //if the number is only divisible by 3 >> Fizz
    else if((i+1)%3==0) console.log('Fizz');
    //if the number is only divisible by 5 >> Buzz
    else if((i+1)%5==0) console.log('Buzz');
    else console.log(i+1);
  }