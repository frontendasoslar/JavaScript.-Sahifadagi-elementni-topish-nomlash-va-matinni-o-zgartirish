// Sahifadagi elementni topish uchun quyidagi biyruqni beramiz
//document.querySelector('.element klasi');
//document - butun sahifani tanlaydi, querySelector() - butun hahifadan kerakli elementni topish uchun tanlovchi vazifasini bajaradi
//MASALAN
// Document.querySelector('.site-list-text');
// console.log(querySelector);


//Har safar elementni hususiyatlarini o'zgartirish uchun bunaqa buyruq berish juda noqulay bo'lishi mumkun. Buni osonroq bajarish uchun topish uchun topilgan elemantimizni o'zgaruvchiga solib qo'yishimiz mumkun.

const elLogoLink = document.querySelector('.site-logo');

//.site-logo elementini topayapdi va elLogoLink o'zgaruvchi nomiga bog'layapdi
// o'zgaruvchi nomiga el qo'shish js o'zgaruvchilari nilan biz bearyotgan nom bir hil bo'lib qolishini oldini oladi

elLogoLink.textContent = 'Mamadiyev Faxriddin';

//.site-logo elementini matni Mamadiyev Faxriddin ga o'zgaradi


//.biz bergan o'zgaruvchi nomini yana boshqa o'zgaruvchiga bog'lash mumkun
const elNom = document.querySelector('.site-logo');
//.site-logo elementini topayapdi va elLogoLink o'zgaruvchi nomiga bog'layapdi

const elYangi = 'Assalomaleykum';
// Boshqa o'zgaruvchi yaratilayapdi va yangi matn kiritilayapdi

elNom.textContent = elYangi;
// o'zgaruvchini yangi o'zgaruvchiga bog'layapdi
