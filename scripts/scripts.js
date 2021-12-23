let contactSave = function () {
    this.getNewContact = function () {
        this.lastName = prompt('Введите фамилию', 'Иванов');
        this.firstName = prompt('Введите имя', 'Иван');
        this.patronymic = prompt('Введите отчество', 'Иванович');
        this.ageContact = +prompt('Введите возраст контакта', '25');
        this.phoneNum = prompt('Введите номер телефона контакта', '+375(33) 545-23-34');
        this.emailContact = prompt('Введите электронную почту контакта', 'name@google.com');

        this.checkInform();
    }

    this.checkInform = function () {
        let regExpNum = /\+([0-9]{3})(\(?[0-9]{2}\)?)( ?-?)([0-9]{3})( ?-?)([0-9]{2})( ?-?)([0-9]{2})/gm,
            regExpEml = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi;

        if(!this.lastName) {
            this.resultLastName = 'Фамилия не введена';
        } else {
            this.resultLastName = 'Фамилия контакта: ' + this.lastName;
        }

        if(!this.firstName) {
            this.resultFirstName = 'Имя не введено';
        } else {
            this.resultFirstName = 'Имя контакта: ' + this.firstName;
        }

        if(!this.patronymic) {
            this.resultPatronymic = 'Отчество не введено';
        } else {
            this.resultPatronymic = 'Отчество контакта: ' + this.patronymic;
        }

        if (this.ageContact > 18 && Number.isInteger(this.ageContact) && this.ageContact > 0 ) {
            this.resultAge = 'Возраст контакта: ' + this.ageContact + ' лет.';
        } else {
            this.resultAge = 'Возраст введен неверно или меньше 18';
        }

        if (regExpNum.test(this.phoneNum)) {
            this.resultNumber = 'Номер телефона контакта: ' + this.phoneNum;
        } else {
            this.resultNumber = 'Номер телефона введен неверно';
        }

        if (regExpEml.test(this.emailContact)) {
            this.resultEmail = 'Электронная почта контакта: ' + this.emailContact;
        } else {
            this.resultEmail = 'Электронная почта введенa неверно';
        }

        this.showContact();
    }

    this.showContact = function() {
        document.write(this.resultLastName + `<br />` + this.resultFirstName + `<br />` + this.resultPatronymic + `<br />` + this.resultAge + `<br />` + this.resultNumber + `<br />` + this.resultEmail + `<hr />`)
    }
}

let contact1 = new contactSave(),
    contact2 = new contactSave(),
    contact3 = new contactSave();

contact1.getNewContact();
contact2.getNewContact();
contact3.getNewContact();