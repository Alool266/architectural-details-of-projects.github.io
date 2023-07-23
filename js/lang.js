const LANG = {
    AR: {
      contact: "تواصل معنا",
      // ... other Arabic translations
    },
    EN: {
      contact: "Contact Us",
      // ... other English translations
    },
  };
  
  function switchLanguage(lang) {
    document.querySelector('#contact').textContent = LANG[lang].contact;
    // ... update other elements
  }

  document.querySelector('#lang-switcher').onchange = (event) => {
    switchLanguage(event.target.value);
  };