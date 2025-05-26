/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
/* Проверка мобильного браузера */
export let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
/* Добавление класса touch для HTML если браузер мобильный */
export function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) document.documentElement.classList.add('touch');
}
// Добавление loaded для HTML после полной загрузки страницы
export function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		}, 0);
	});
}
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
export let bodyLockToggle = () => {
    if (document.documentElement.classList.contains("lock")) {
        bodyUnlock();
    } else {
        bodyLock();
    }
};

export let bodyUnlock = () => {
    let body = document.querySelector("body");
    document.documentElement.classList.remove("lock");
    body.style.paddingRight = "0px";
};

export let bodyLock = () => {
    let body = document.querySelector("body");
    body.style.paddingRight =
        window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    document.documentElement.classList.add("lock");
};

// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
/*
Сниппет (HTML): smenu
*/
document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger");
  const sideMenu = document.getElementById("sideMenu");
  const closeButton = document.getElementById("closeMenu");

  // Функция закрытия меню
  function closeMenu() {
    sideMenu.classList.remove("_active");
    document.documentElement.classList.remove("lock");
  }

  // Открыть меню
  burgerButton.addEventListener("click", function () {
    sideMenu.classList.add("_active");
    document.documentElement.classList.add("lock");
  });

  // Закрыть меню по кнопке
  closeButton.addEventListener("click", closeMenu);

  // Закрытие по нажатию ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sideMenu.classList.contains("_active")) {
      closeMenu();
    }
  });

  // Закрытие по клику вне меню
  document.addEventListener("click", function (e) {
    if (
      sideMenu.classList.contains("_active") &&
      !sideMenu.contains(e.target) &&
      !burgerButton.contains(e.target)
    ) {
      closeMenu();
    }
  });
});
