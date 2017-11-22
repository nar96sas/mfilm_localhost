// remove the diacritic of a string (` ~ ' .)
function removeDiacritic(str) {
    str = str.toString().toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    //str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");  

    str = str.replace(/^\-+|\-+$/g, "");
    return str;
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function turnOffTheLight() {
    $('.overlay-tatden').css({ 'display': 'block' });
    $('.video-player').addClass('tatden');
}

function showModal(id) {
    $('#' + id).trigger('click');
}

function closeModal() {
    $('.closeModal').trigger('click');
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString());
}

function getCookie(name){
    var decodeCookie = decodeURIComponent(document.cookie); // https%3A%2F%2Fw3schools.com%2F -> https://w3schools.com/
    var cookies = decodeCookie.split(';');
    for (var i=0; i < cookies.length; i++){
        var c = cookies[i].split('=');
        if (c[0].trim() ==  name){
            return c[1];
        }
    }
    return '';
}

function toMinute(time){
    var minute = Math.floor(time / 60);
    var second = time - minute*60;

    return minute + ':' + (second < 10 ? '0' + second : second);
}

export { removeDiacritic, scrollToTop, turnOffTheLight, showModal, closeModal, setCookie, getCookie, toMinute }

