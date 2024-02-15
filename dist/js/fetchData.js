
        // Function to fetch the number of completed questions from LeetCode
        async function getCompletedQuestions(username) {
            const response = await fetch(`https://leetcode.com/${username}`);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const numCompletedElement = doc.querySelector('.css-17gur6z');
            if (numCompletedElement) {
                const numCompleted = numCompletedElement.textContent.trim();
                return numCompleted;
            } else {
                return 'Error fetching data';
            }
        }

        // Replace 'your_username' with your actual LeetCode username
        const username = 'imutkarsht';
        getCompletedQuestions(username)
            .then(numCompleted => {
                document.getElementById('completed').textContent = `You have completed ${numCompleted} questions on LeetCode.`;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('completed').textContent = 'Error fetching data';
            });