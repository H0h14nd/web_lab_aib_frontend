tabs = {
    fedorov: 30000,
    petrov: 1200,
    stepuk: 45000,
    
    method: function ObjSummSalary(){
        let temp = 0
        for(let key in tabs){
            if (key != 'method'){
                temp += tabs[key] + ' '
            }
        }
        alert(temp)
    }
};

tabs.method();