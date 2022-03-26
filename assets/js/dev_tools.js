/* 
    Document Written by Richard Anderson (https://richardjanderson.me)!
*/

function all_cookies(){
    var all_cookie = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumlator, [key, value]) =>({ ...accumlator, [key.trim()]: decodeURIComponent(value)}),{});

    console.log(all_cookie);
}