const fontSize = document.querySelectorAll('.font-size');
const fontColor = document.querySelectorAll('.book__control_color .color');
const bgColor = document.querySelectorAll('.book__control_background .color')
const book = document.querySelector('.book');



function changeFontSize() {
    [...fontSize].forEach(e => {
        e.classList.remove('font-size_active')
    })

    if (book.classList.contains('book_fs-big') || book.classList.contains('book_fs-small')) {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }

    this.classList.add('font-size_active');
    if (this.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
    }
    if (this.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
    }

    return false;
};

function changeFontColor() {
    [...fontColor].forEach (e => {
        e.classList.remove('color_active')
    })

    book.classList.remove('book_color-black');
    book.classList.remove('book_color-gray');
    book.classList.remove('book_color-whitesmoke');

    this.classList.add('color_active');
    if (this.classList.contains('text_color_black')) {
        book.classList.add('book_color-black')
    };
    if (this.classList.contains('text_color_gray')) {
        book.classList.add('book_color-gray')
    };
    if (this.classList.contains('text_color_whitesmoke')) {
        book.classList.add('book_color-whitesmoke')
    };

    return false;
};

function changeBackgroundColor() {
    [...bgColor].forEach (e => {
        e.classList.remove('color_active')
    })

    book.classList.remove('book_bg-black');
    book.classList.remove('book_bg-gray');
    book.classList.remove('book_bg-white');

    this.classList.add('color_active');
    if (this.classList.contains('bg_color_black')) {
        book.classList.add('book_bg-black')
    };
    if (this.classList.contains('bg_color_gray')) {
        book.classList.add('book_bg-gray')
    };
    if (this.classList.contains('bg_color_white')) {
        book.classList.add('book_bg-white')
    };

    return false;
};


[...fontSize].forEach(size => {
    size.onclick = changeFontSize;
});

[...fontColor].forEach(color => {
    color.onclick = changeFontColor;
});

[...bgColor].forEach(color => {
    color.onclick = changeBackgroundColor;
})