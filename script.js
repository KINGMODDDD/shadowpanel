// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
event.preventDefault();

const username = event.target.username.value;
const password = event.target.password.value;

if (username === 'Teke_Love' && password === '12345678') {
window.location.href = 'dashboard.html';
} else {
alert('Invalid login credentials');
}
});

window.onload = function() {
const keys = generateKeys();
const keysTable = document.getElementById('keys-table');

keys.forEach(key => {
const row = document.createElement('tr');

const keyCell = document.createElement('td');
keyCell.textContent = key.key;
row.appendChild(keyCell);

const devicesCell = document.createElement('td');
devicesCell.textContent = key.devices;
row.appendChild(devicesCell);

const durCell = document.createElement('td');
durCell.textContent = key.dur;
row.appendChild(durCell);

keysTable.appendChild(row);
});
};

function generateKeys() {
const keys = [];
const durations = [1, 7, 30];

for (let i = 0; i < 3; i++) {
keys.push({
key: generateRandomKey(),
devices: `${Math.floor(Math.random() * 100)}/100`,
dur: durations[i]
});
}

return keys;
}

function generateRandomKey() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result = 'SHADOW-';
for (let i = 0; i < 45; i++) {
result += characters.charAt(Math.floor(Math.random() * characters.length));
}
return result;
}
