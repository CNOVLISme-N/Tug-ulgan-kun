function displayGreeting() {
  const name = document.getElementById('nameInput').value;
  const birthdayMessage = document.getElementById('birthdayMessage');

  if (name) {
    birthdayMessage.innerHTML = `${name} - Seni tug'ulgan kuning bilan chin qalbimdan tabriklayman ! Ortda qolgan yoshingda , qilgan barcha yaxshi maqsadlaringni amalga oshira olmagan bo'lsang , shu yoshingda amalga oshirishing tilakdoshiman . Bugun seni eng quvonchli va unitilmas kuning . Senga baxt , sog'lik salomatlik va omad tilab qolaman . Hayotingda doimo faqat quvonchli onlar bo‘lsin , har bir kuning baxtga to‘lsin . Ota - onang sen bilan faxrlanadigon farzand bo'lib ulg'aygin . O'qishlaringga omad va ishlaringga rivoj . `;
  } else {
    birthdayMessage.innerHTML = 'Tug\'ulgan Kuningiz Muborak!';
  }
}

