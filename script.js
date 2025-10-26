const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const response = await fetch('http://localhost:3000/contacts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, email})
  });
  if(response.ok) {
    loadContacts();
    form.reset();
  } else {
    alert('Error adding contact');
  }
});
async function loadContacts() {
  const resp = await fetch('http://localhost:3000/contacts');
  const contacts = await resp.json();
  const list = document.getElementById('contactList');
  list.innerHTML = '';
  contacts.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.name} - ${c.email}`;
    list.appendChild(li);
  });
}
loadContacts();
