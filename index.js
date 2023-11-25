// function fetchAdvice() {
//     // Fetch data from the API
//     fetch('https://api.adviceslip.com/advice')
//         .then(response => response.json())
//         .then(data => {
//             // Update the advice quote text
//             const adviceQuoteElement = document.querySelector('.advice-quote');
//             adviceQuoteElement.textContent = `"${data.slip.advice}"`;

//             // Generate and update random number in the header
//             const randomNumberElement = document.getElementsByClassName('random-number');
//             const randomAdviceNumber = Math.floor(Math.random() * 1000) + 1;
//             randomNumberElement.textContent = randomAdviceNumber;
//         })
//         .catch(error => console.error('Error fetching advice:', error));
// }
function fetchAdvice() {
    // Fetch data from the API
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            // Update the advice quote text
            const adviceQuoteElement = document.querySelector('.advice-quote');
            adviceQuoteElement.textContent = `"${data.slip.advice}"`;

            // Generate and update random number in the header
            const randomNumberElement = document.getElementById('random-number');
            const randomAdviceNumber = Math.floor(Math.random() * 1000) + 1;
            randomNumberElement.textContent = randomAdviceNumber;
        })
        .catch(error => console.error('Error fetching advice:', error));
}