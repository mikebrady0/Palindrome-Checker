const button = document.getElementById('check-btn')
let result = document.getElementById('result')

function checkPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return str === str.split('').reverse().join('');
}



button.addEventListener('click', function() {
  let wordInput = document.getElementById('text-input').value;

if (wordInput === '') {
    alert('Please input a value')
   result.innerHTML = 'Please input a value';
   return;
}
  

    if (checkPalindrome(wordInput)) {
      return result.textContent = `${wordInput} is a palindrome`;
  } else {
    return result.textContent = `${wordInput} is not a palindrome`;
  }
})

