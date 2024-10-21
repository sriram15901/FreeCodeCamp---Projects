const inputField = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultParagraph = document.getElementById('result');

    function isPalindrome(str) {
      // Normalize the string: Remove non-alphanumeric characters & convert to lowercase
      const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      // Compare the cleaned string with its reverse
      return cleaned === cleaned.split('').reverse().join('');
    }

    checkBtn.addEventListener('click', () => {
      const inputValue = inputField.value.trim();

      if (!inputValue) {
        alert('Please input a value'); // Alert if the input is empty
        return;
      }

      // Check if the input is a palindrome
      if (isPalindrome(inputValue)) {
        resultParagraph.textContent = `${inputValue} is a palindrome`;
      } else {
        resultParagraph.textContent = `${inputValue} is not a palindrome`;
      }
    });