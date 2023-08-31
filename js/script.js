document.addEventListener('DOMContentLoaded', () => {
    const usernameSpan = document.getElementById('username');
    const username = prompt('Please enter your name:');
    usernameSpan.textContent = username;
});

document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const messageOutput = document.getElementById('message-output');

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const currentDate = new Date().toString();
        const name = document.getElementById('name').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const jenisKelaminRadio = document.querySelector('input[name="jenisKelamin"]:checked');
        const pesan = document.getElementById('pesan').value;

        const jenisKelamin = jenisKelaminRadio ? jenisKelaminRadio.value : '';

        const outputText = `Current time  : ${currentDate}\nNama          : ${name}\nTanggal Lahir :   ${tanggalLahir}\nJenis Kelamin : ${jenisKelamin}\nPesan         : ${pesan}`;
        messageOutput.textContent = outputText;
    });
});