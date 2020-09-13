module.exports = function (phone) {
    phone = phone.replace(/^(\d)/, "+$1");
    phone = phone.replace(/(.{3})(\d)/, "$1 $2");
    phone = phone.replace(/(.{3})(\d)/, "$1($2");
    phone = phone.replace(/(.{6})(\d)/, "$1$2) ");
    phone = phone.replace(/(.{4})$/, "-$1");
    return phone;
};
