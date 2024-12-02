const translateBtn = document.getElementById('translate-btn');
    const recordBtn = document.getElementById('record-btn');
    const inputText = document.getElementById('input-text');
    const signContainer = document.getElementById('sign-container');

    const arabicToSignMap = {
  'ا': 'IMG-20241126-WA0028.jpg',
  'ب': 'IMG-20241126-WA0027.jpg',
  'ت': 'IMG-20241126-WA0026.jpg',
  'ث': 'IMG-20241126-WA0030.jpg',
  'ج': 'IMG-20241126-WA0029.jpg',
  'ح': 'IMG-20241126-WA0031.jpg',
  'خ': 'IMG-20241126-WA0032.jpg',
  'د': 'IMG-20241126-WA0033.jpg',
  'ذ': 'IMG-20241126-WA0034.jpg',
  'ر': 'IMG-20241126-WA0035.jpg',
  'ز': 'IMG-20241126-WA0036.jpg',
  'س': 'IMG-20241126-WA0037.jpg',
  'ش': 'IMG-20241126-WA0038.jpg',
  'ص': 'IMG-20241126-WA0040.jpg',
  'ض': 'IMG-20241126-WA0039.jpg',
  'ط': 'IMG-20241126-WA0042.jpg',
  'ظ': 'IMG-20241126-WA0041.jpg',
  'ع': 'IMG-20241126-WA0043.jpg',
  'غ': 'IMG-20241126-WA0048.jpg',
  'ف': 'IMG-20241126-WA0044.jpg',
  'ق': 'IMG-20241126-WA0046.jpg',
  'ك': 'IMG-20241126-WA0047.jpg',
  'ل': 'IMG-20241126-WA0045.jpg',
  'م': 'IMG-20241126-WA0049.jpg',
  'ن': 'IMG-20241126-WA0050.jpg',
  'ه': 'IMG-20241126-WA0051.jpg',
  'و': 'IMG-20241126-WA0052.jpg',
  'ي': 'IMG-20241126-WA0053.jpg',
//الاعداد//

  '0': 'IMG-20241127-WA0025.jpg',
  '1': 'IMG-20241127-WA0024.jpg',
  '2': 'IMG-20241127-WA0023.jpg',
  '3': 'IMG-20241127-WA0022.jpg',
  '4': 'IMG-20241127-WA0021.jpg',
  '5': 'IMG-20241127-WA0020.jpg',
  '6': 'IMG-20241127-WA0019.jpg',
  '7': 'IMG-20241127-WA0018.jpg',
  '8': 'IMG-20241127-WA0016.jpg',
  '9': 'IMG-20241127-WA0015.jpg',
//english//
'a':'IMG-20241127-WA0027.jpg',
'b':'IMG-20241127-WA0028.jpg',
'c':'IMG-20241127-WA0029.jpg',
'd':'IMG-20241127-WA0030.jpg',
'e':'IMG-20241127-WA0032.jpg',
'f':'IMG-20241127-WA0033.jpg',
'g':'IMG-20241127-WA0034.jpg',
'h':'IMG-20241127-WA0035.jpg',
'i':'IMG-20241127-WA0036.jpg',
'j':'IMG-20241127-WA0037.jpg',
'k':'IMG-20241127-WA0038.jpg',
'l':'IMG-20241127-WA0039.jpg',
'm':'IMG-20241127-WA0040.jpg',
'n':'IMG-20241127-WA0041.jpg',
'o':'IMG-20241127-WA0042.jpg',
'p':'WhatsApp Image 2024-11-27 at 10.06.00_4790d588.jpg',
'q':'WhatsApp Image 2024-11-27 at 10.06.22_299dd933.jpg',
'r':'WhatsApp Image 2024-11-27 at 10.06.46_afb66e3e.jpg',
's':'WhatsApp Image 2024-11-27 at 10.06.58_eb80f025.jpg',
't':'WhatsApp Image 2024-11-27 at 10.07.14_f343887c.jpg',
'u':'IMG-20241127-WA0043.jpg',
'v':'IMG-20241127-WA0044.jpg',
'w':'IMG-20241127-WA0045.jpg',
'x':'IMG-20241127-WA0046.jpg',
'y':'IMG-20241127-WA0047.jpg',
'z':'IMG-20241127-WA0048.jpg',


};

    translateBtn.addEventListener('click', () => {
      const text = inputText.value.trim();
      signContainer.innerHTML = '';

      if (text) {
        [...text].forEach(char => {
          if (arabicToSignMap[char]) {
            const signElement = document.createElement('div');
            signElement.className = 'sign';
            const img = document.createElement('img');
            img.src = arabicToSignMap[char];
            signElement.appendChild(img);
            signContainer.appendChild(signElement);
          }
        });
      } else {
        alert('يرجى كتابة نص للترجمة!');
      }
    });

    recordBtn.addEventListener('click', () => {
      if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert('التسجيل الصوتي غير مدعوم في هذا المتصفح.');
        return;
      }

      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'ar-SA';
      recognition.interimResults = false;

      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        inputText.value = transcript;
        alert('تم تسجيل الصوت بنجاح!');
      };

      recognition.onerror = (event) => {
        alert('حدث خطأ أثناء تسجيل الصوت: ' + event.error);
      };
    });