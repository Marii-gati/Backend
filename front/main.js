const form = document.getElementById('signup-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const birthDate = document.getElementById('birthDate').value;
  const biography = document.getElementById('biography').value;

  try {
    const response = await fetch('http://localhost:8000/users/sign-up/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, email, password,
         firstName, lastName,birthDate, biography}),
    });

    if (response.ok) {
      // Signup successful, handle the response
      console.log('Signup successful!');
    } else {
      // Signup failed, handle the error
      console.error('Signup failed:', await response.json());
    }
  } catch (error) {
    console.error('Error:', error);
  }
});