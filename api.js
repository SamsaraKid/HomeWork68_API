let sendbut = document.getElementById('sendbut')
sendbut.onclick = f1


function f1(){
    let nam = document.getElementById('user').value
    let req
    if (window.XMLHttpRequest){
        req = new XMLHttpRequest()
    } else{
        req = new ActiveXObject("Microsoft.XMLHTTP")
    }

    req.open('GET', 'https://api.github.com/users/' + nam)

    req.onload = function (){
        if (req.status === 200){
            let newobj = JSON.parse(req.response, filt)
            console.log(newobj)
            forresponce(newobj)
        } else {
            console.log('neok')
            divresponce.innerHTML = '<h3>Нет такого пользователя</h3>'
        }

    }

    req.send()
}


function forresponce(resp){
    let login = resp.login
    let avatar = resp.avatar_url
    let name = resp.name
    let link = resp.html_url
    let date = resp.created_at
    let divresponce = document.getElementById('divresponce')
    divresponce.innerHTML = '<table>' +
                            '<tr><th>Логин:</th><td>' + login + '</td></tr>' +
                            '<tr><th>Аватар:</th><td><img src="' + avatar + '"></td></tr>' +
                            '<tr><th>Имя:</th><td>' + name + '</td></tr>' +
                            '<tr><th>Дата рег.:</th><td>' + date + '</td></tr>' +
                            '<tr><th>Ссылка:</th><td><a href="' + link + '">' + link + '</a></td></tr>' +
                            '</table>'
}


function filt(key, value){
    if (value === null){
        return 'не указано'
    }
    return value
}