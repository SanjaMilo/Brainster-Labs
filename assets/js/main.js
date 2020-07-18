
let filteringBtns = document.querySelectorAll('.pjt-btn'); // filtering buttons
let loadMore = document.querySelector('#loadMore'); // button Load more
let allCards = document.querySelectorAll('.somecard'); // all cards to be shown or filtered

// Handle active class on filtering buttons 

function filteringFunc(e) {
    // handle active class on the filter buttons 
    filteringBtns.forEach(function(ele) {
        ele.classList.remove('active');
        e.currentTarget.classList.add('active');
    });
    // invoke of filtering functions
    if(e.currentTarget.classList.contains("btn-marketing") ){
        filterMarketing();
    } else if (e.currentTarget.classList.contains("btn-programming")) {
        filterProgramming();
    } else if (e.currentTarget.classList.contains("btn-design")) {
        filterDesign();
    }; 
};

// Function for filtering marketing cards
function filterMarketing() {
    allCards.forEach(function(elem, i) {
        if (!elem.classList.contains('marketing')) {
            elem.classList.add('column');
        } else {
            elem.classList.remove('column')
        };
    });
};

// Function for filtering programming cards
function filterProgramming() {
    allCards.forEach(function(elem, i) {
        if (!elem.classList.contains('programming')) {
            elem.classList.add('column');
        } else {
            elem.classList.remove('column')
        };
    });
 };

// function for filtering design cards
 function filterDesign() {
    allCards.forEach(function(elem, i) {
        if (!elem.classList.contains('design')) {
            elem.classList.add('column');
        } else {
            elem.classList.remove('column')
        };
    });
 };

 // Load more function (show first 6 , then  add + 6)

 let num = 6;

 function loadMoreFunc() {
     let arrLoad = Array.from(allCards);
     arrLoad.slice(0, num).forEach(function(ele) {
         ele.classList.remove('column');
         if(arrLoad.slice(0, num).length < 20) {
         loadMore.style.display = 'block';
     } else {
         loadMore.style.display = 'none';
     };
     });
     num += 6;
 };


// Adding event listeners to the filtering buttons and on document load to show all cards

filteringBtns.forEach(function(el, i) {
    el.addEventListener('click', filteringFunc);
});

loadMore.addEventListener('click', loadMoreFunc);

window.addEventListener('load', loadMoreFunc);


//Add navbar burger menu for mobile device

function openNav() {
    document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};


// For Modal on form button

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });

