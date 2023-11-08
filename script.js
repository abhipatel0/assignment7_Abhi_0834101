var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const validator = new FormValidator('swiper-container', [{
        name: 'name',
        rules: 'required'
    },
    {
        name: 'dob',
        rules: 'required'
    },
    {
        name: 'email',
        rules: 'required|email'
    },
    {
        name: 'phone',
        rules: 'required|numeric|exact_length[10]'
    },
    {
        name: 'address',
        rules: 'required'
    },
    {
        name: 'creditCard',
        rules: 'required|numeric|exact_length[10]'
    },
    {
        name: 'expiryDate',
        rules: 'required'
    },
    {
        name: 'cvv',
        rules: 'required|numeric|exact_length[3]'
    }
]);

document.getElementById('swiper-container').addEventListener('submit', function (e) {
    e.preventDefault();
    var errors = validator.validateForm(this);
    if (errors.length > 0) {
        
        console.log(errors);
    } else {
        
        console.log('Form submitted successfully');
    }
});