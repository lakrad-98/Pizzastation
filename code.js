// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATIONS OBJECT ---
    const translations = {
        en: {
            siteTitle: "Pizza Plus Restaurant",
            brandName: "Pizza Plus",
            navHome: "Home",
            navMenu: "Menu",
            navOrder: "Order Now",
            navContact: "Contact Us",
            language: "Language",
            heroTitle: "The Best Pizza in Town",
            heroSubtitle: "Made with love and passion, straight from our oven to you.",
            orderNowBtn: "Order Now",
            menuTitle: "Our Menu",
            pizzaMargherita: "Margherita Pizza",
            pizzaMargheritaDesc: "Classic tomato sauce, fresh mozzarella, and basil.",
            pizzaPrice1: "SAR 45",
            pizzaPepperoni: "Pepperoni Pizza",
            pizzaPepperoniDesc: "Generously topped with pepperoni slices and mozzarella.",
            pizzaPrice2: "SAR 55",
            softDrink: "Soft Drinks",
            softDrinkDesc: "A variety of cold and refreshing beverages.",
            drinkPrice: "SAR 5",
            orderFormTitle: "Fill The Order Form",
            formName: "Full Name",
            formAddress: "Address",
            formPhone: "Phone Number",
            formOrderDetails: "Order Details",
            formSubmitBtn: "Submit Order",
            contactTitle: "Contact Us",
            ourLocation: "Our Location",
            addressInfo: "123 Pizza Street, Riyadh, Saudi Arabia",
            phoneInfo: "+966 11 123 4567",
            emailInfo: "contact@pizzaplus.com",
            footerText: "© 2024 Pizza Plus. All rights reserved.",
            formSuccess: "Order submitted successfully! We will contact you shortly.",
            formError: "Please fill out all required fields.",
        },
        fr: {
            siteTitle: "Restaurant Pizza Plus",
            brandName: "Pizza Plus",
            navHome: "Accueil",
            navMenu: "Menu",
            navOrder: "Commander",
            navContact: "Contact",
            language: "Langue",
            heroTitle: "La Meilleure Pizza en Ville",
            heroSubtitle: "Faite avec amour et passion, directement de notre four à vous.",
            orderNowBtn: "Commander Maintenant",
            menuTitle: "Notre Menu",
            pizzaMargherita: "Pizza Margherita",
            pizzaMargheritaDesc: "Sauce tomate classique, mozzarella fraîche et basilic.",
            pizzaPrice1: "45 SAR",
            pizzaPepperoni: "Pizza Pepperoni",
            pizzaPepperoniDesc: "Généreusement garnie de tranches de pepperoni et de mozzarella.",
            pizzaPrice2: "55 SAR",
            softDrink: "Boissons Gazeuses",
            softDrinkDesc: "Une variété de boissons froides et rafraîchissantes.",
            drinkPrice: "5 SAR",
            orderFormTitle: "Remplir le Formulaire de Commande",
            formName: "Nom Complet",
            formAddress: "Adresse",
            formPhone: "Numéro de Téléphone",
            formOrderDetails: "Détails de la Commande",
            formSubmitBtn: "Envoyer la Commande",
            contactTitle: "Contactez-Nous",
            ourLocation: "Notre Emplacement",
            addressInfo: "123 Rue de la Pizza, Riyad, Arabie Saoudite",
            phoneInfo: "+966 11 123 4567",
            emailInfo: "contact@pizzaplus.com",
            footerText: "© 2024 Pizza Plus. Tous droits réservés.",
            formSuccess: "Commande envoyée avec succès ! Nous vous contacterons bientôt.",
            formError: "Veuillez remplir tous les champs obligatoires.",
        },
        ar: {
            siteTitle: "مطعم بيتزا بلس",
            brandName: "بيتزا بلس",
            navHome: "الرئيسية",
            navMenu: "قائمة الطعام",
            navOrder: "اطلب الآن",
            navContact: "تواصل معنا",
            language: "اللغة",
            heroTitle: "أفضل بيتزا في المدينة",
            heroSubtitle: "مصنوعة بحب وشغف، مباشرة من فرننا إليك.",
            orderNowBtn: "اطلب الآن",
            menuTitle: "قائمة طعامنا",
            pizzaMargherita: "بيتزا مارجريتا",
            pizzaMargheritaDesc: "صلصة طماطم كلاسيكية، جبنة موزاريلا طازجة وريحان.",
            pizzaPrice1: "٤٥ ريال",
            pizzaPepperoni: "بيتزا بيبروني",
            pizzaPepperoniDesc: "مغطاة بسخاء بشرائح البيبروني وجبنة الموزاريلا.",
            pizzaPrice2: "٥٥ ريال",
            softDrink: "مشروبات غازية",
            softDrinkDesc: "مجموعة متنوعة من المشروبات الباردة والمنعشة.",
            drinkPrice: "٥ ريال",
            orderFormTitle: "املأ نموذج الطلب",
            formName: "الاسم الكامل",
            formAddress: "العنوان",
            formPhone: "رقم الهاتف",
            formOrderDetails: "تفاصيل الطلب",
            formSubmitBtn: "إرسال الطلب",
            contactTitle: "تواصل معنا",
            ourLocation: "موقعنا",
            addressInfo: "123 شارع البيتزا، الرياض، المملكة العربية السعودية",
            phoneInfo: "+966 11 123 4567",
            emailInfo: "contact@pizzaplus.com",
            footerText: "© 2024 بيتزا بلس. جميع الحقوق محفوظة.",
            formSuccess: "تم إرسال الطلب بنجاح! سنتصل بك قريباً.",
            formError: "يرجى ملء جميع الحقول المطلوبة.",
        }
    };

    // --- LANGUAGE SWITCHER LOGIC ---
    const htmlEl = document.documentElement;
    const bootstrapStyleLink = document.getElementById('bootstrap-style');
    
    // Make changeLanguage function globally accessible
    window.changeLanguage = (lang) => {
        // Set language and direction
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Switch Bootstrap stylesheet for RTL/LTR support
        if (lang === 'ar') {
            bootstrapStyleLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css');
        } else {
            bootstrapStyleLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        }

        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[lang][key];
        });

        // Save language preference to local storage
        localStorage.setItem('language', lang);
    };

    // --- ORDER FORM LOGIC ---
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        
        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const details = document.getElementById('order-details').value.trim();
        
        // Basic validation
        if (name === '' || address === '' || phone === '' || details === '') {
            const currentLang = localStorage.getItem('language') || 'ar';
            alert(translations[currentLang].formError);
            return;
        }
        
        // On success
        const currentLang = localStorage.getItem('language') || 'ar';
        alert(translations[currentLang].formSuccess);
        
        // Reset the form
        orderForm.reset();
    });
    
    // --- INITIAL LOAD ---
    // Check for saved language in local storage, otherwise default to Arabic
    const savedLanguage = localStorage.getItem('language') || 'ar';
    changeLanguage(savedLanguage);
});