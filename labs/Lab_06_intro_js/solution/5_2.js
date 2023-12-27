tabs = {
    firstname: 'Ivan',
    surname: 'Ivanov',
    patronim: 'Ivanovic',
    birthyear: 1986,
    hobby: 'garage',
    age: 37,

    method: function(){
        let temp = ''
        for(let key in tabs){
            if (key != 'method'){
                temp += tabs[key] + ' '
            }
        }
        alert(temp)
    }
};

tabs.method();