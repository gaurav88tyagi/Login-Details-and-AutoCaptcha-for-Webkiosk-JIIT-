$(document).ready(function () {
    var institute, enroll, dob, password, captcha;

    chrome.storage.sync.get( function (details) {
        if (details.state == '1') {
            institute = details.institute;
            enroll = details.enroll;
            dob = details.dob.split("-").reverse().join("-");
            password = details.password;
            captcha = $('font[face=casteller]').text();

            $('select[name=InstCode]').val(institute);
            $('#MemberCode').val(enroll);
            $('#DATE1').val(dob);
            $('#Password101117').val(password);
            $('#txtcap').val(captcha);
        }
    });
});