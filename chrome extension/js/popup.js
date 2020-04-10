$(document).ready(function () {
    chrome.storage.sync.get(function (details) {
        chrome.browserAction.setBadgeText({ 'text': details.state });
    });

    $('#btnSubmit').on('click', function () {
        var institute, enroll, dob, password;

        institute = $('select').val();
        enroll = $('input[type=number]').val();
        dob = $('input[type=date]').val();
        password = $('input[type=password]').val();

        chrome.storage.sync.set({
            "institute": institute,
            "enroll": enroll,
            "dob": dob,
            "password": password,
            "state": '1'
        });

        var notifOptions = {
            type: 'basic',
            iconUrl: '../image/logo.png',
            title: 'UPDATE',
            message: 'Record Successfully Saved!'
        };

        chrome.notifications.create('dataUpdated', notifOptions);
        chrome.browserAction.setBadgeText({ 'text': '1' });

    });

    $('#btnClear').on('click', function () {
        chrome.storage.sync.set({
            "institute": "JIIT",
            "enroll": "",
            "dob": "",
            "password": "",
            "state": '0'
        });

        var notifOptions = {
            type: 'basic',
            iconUrl: '../image/logo.png',
            title: 'UPDATE',
            message: 'Record Successfully Removed!'
        };

        chrome.notifications.create('dataRemoved', notifOptions);
        chrome.browserAction.setBadgeText({ 'text': '0' });

    });
});