
window.onscroll = function() {
    var header = document.getElementById('myHeader');
    if (window.pageYOffset > 80) {
        header.classList.add('color-change');
    } else {
        header.classList.remove('color-change');
    }
};

const mediaQuery1 = window.matchMedia('(max-width: 768px)');

function handleScreenChange1(e1) {
    if (e1.matches) {
        const block2221 = document.querySelector('.txt1');
        const txt1111 = document.querySelector('.block2');

        const temp1 = document.createElement('div');
        block2221.parentNode.insertBefore(temp1, block2221);
        txt1111.parentNode.insertBefore(block2221, txt1111);
        temp1.parentNode.insertBefore(txt1111, temp1);
        temp1.parentNode.removeChild(temp1);
    }
}

mediaQuery1.addListener(handleScreenChange1);
handleScreenChange1(mediaQuery1);;


const phrases = ["с нами !", "c ProCourse !"];
let currentPhrase = 0;
let currentCharacter = 0;
let htmlElement = document.querySelector('.typing');
let typingSpeed = 200;
let deletingSpeed = 100;

function type() {
    if (currentCharacter < phrases[currentPhrase].length) {
        htmlElement.textContent += phrases[currentPhrase].charAt(currentCharacter);
        currentCharacter++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, 2000);
    }
}

function deleteText() {
    if (currentCharacter > 0) {
        htmlElement.textContent = phrases[currentPhrase].substring(0, currentCharacter - 1);
        currentCharacter--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        currentPhrase++;
        if (currentPhrase >= phrases.length) {
            currentPhrase = 0;
        }
        setTimeout(type, 200);
    }
}

setTimeout(type, 200);


let activeImage = document.getElementById('image1');
let inactiveImage = document.getElementById('image2');

setInterval(() => {
    if (activeImage.classList.contains('active')) {
        activeImage.classList.remove('active');
        inactiveImage.classList.add('active');
    } else {
        inactiveImage.classList.remove('active');
        activeImage.classList.add('active');
    }

    let temp = activeImage;
    activeImage = inactiveImage;
    inactiveImage = temp;
}, 4000);

let image1 = document.getElementById('im1');
let image2 = document.getElementById('im2');
let image3 = document.getElementById('im3');
let image4 = document.getElementById('im4');
let image5 = document.getElementById('im5');
let images = [image1, image2, image3, image4, image5];
let index = 0;

setInterval(() => {

    images[index].classList.remove('active');
    setTimeout(() => {
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }, 2000);
}, 4000);

let imagess = document.querySelectorAll('.tegm');
let indexs = 0;

images.forEach((img, i) => {
    if (i !== 0) img.style.opacity = '0';
});


setInterval(() => {
    imagess[indexs].style.opacity = '0';
    indexs = (indexs + 1) % imagess.length;
    setTimeout(() => {
        imagess[indexs].style.opacity = '1';
    }, 2000);
}, 4000);

let buttons = [
    document.getElementById('active1'),
    document.getElementById('active2'),
    document.getElementById('active3'),
    document.getElementById('active4'),
    document.getElementById('active5')
];


let currentButtonIndex = 0;
let intervalId;

function shineButton() {
    buttons.forEach(button => {
        button.classList.remove('shine');
    });

    buttons[currentButtonIndex].classList.add('shine');


    currentButtonIndex++;

    if (currentButtonIndex >= buttons.length) {
        currentButtonIndex = 0;
    }
}

intervalId = setInterval(shineButton, 1000);

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
        buttons.forEach(b => {
            b.classList.remove('shine');
        });
    });
    button.addEventListener('mouseleave', () => {
        intervalId = setInterval(shineButton, 1000);
    });
});

const words = [
    "Прокачай свои скиллы!",
    "Стань лучше вместе с нами!",
    "Открой новые горизонты!",
    "Учись и развивайся каждый день!",
    "Достижение новых высот в программировании!",
    "Будь на шаг впереди!",
    "Изучай, твори, вдохновляй!",
    "Не останавливайся на достигнутом!",
    "Преврати свои мечты в код!",
    "Освой новые языки программирования!"
];

const container = document.getElementById("test");

function animateWords(index) {
    if (index >= words.length) {
        index = 0;
    }
    container.textContent = words[index];
    setTimeout(() => {
        animateWords(index + 1);
    }, 1000); // Время показа слова в миллисекундах (1000 мс = 1 с)
}

animateWords(0);


let open = document.getElementById('open')
let block = document.getElementById('block')

function Open() {
    open.style.display = 'block'
    block.style.transition = 'right 0.3s';
    setTimeout(function () {
        block.style.right = '0';
    }, 50);
}

function Close() {
    block.style.right = '-300px'
    block.style.transition = 'right 0.3s'
    setTimeout(function () {
        open.style.display = 'none';
    }, 400)
}
let ops = document.getElementById('ops');
ops.addEventListener('click', (event) => {
    event.preventDefault();
    Open();
});

// Вставляем вызов функции Close в ваш код
let closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    Close();
});


const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleScreenChange(e) {
    if (e.matches) {
        const block222 = document.querySelector('.block222');
        const txt111 = document.querySelector('.txt111');

        const temp = document.createElement('div');
        block222.parentNode.insertBefore(temp, block222);
        txt111.parentNode.insertBefore(block222, txt111);
        temp.parentNode.insertBefore(txt111, temp);
        temp.parentNode.removeChild(temp);
    }
}

mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);
