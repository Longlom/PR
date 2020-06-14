'use strict'

const fetchInfo = () => {
    let info =  fetch('/getinfo/');
    let descr = fetch('/getdescription/');
    return Promise.all([
        info,
        descr
    ])
        .then((respArr) => {
            if (!respArr[0].ok && !respArr[1].ok)
            {
                return Promise.reject()
            } else if (!respArr[0].ok) {
                return respArr[1].json();
            } else if (!respArr[1].ok) {
                return respArr[0].json();
            } else return Promise.all([
                respArr[0].json()
                ,respArr[1].json()
            ])
        })
        .then((resp) => {
            if (Array.isArray(resp)){
                if (!resp[0].isSucceeded && !resp[1].isSucceeded){
                    return  Promise.reject();
                } else if (!resp[1].isSucceeded) {
                    return resp[0].text;
                } else if (!resp[0].isSucceeded) {
                    return resp[1].text
                } else  return [resp[0].text, resp[1].text];

            } else return resp.isSucceeded ? resp.text : Promise.reject();
        })
        .catch(() => Promise.reject('Server Error'));
};

const fetchAvailability = () => {
    return fetch('/serviceavailable/')
        .then((resp) => {
            return  resp.ok ? resp.json(): Promise.reject();
        })
        .then((respObj) => {
           if (respObj.isSucceeded){
               return  Promise.resolve(fetchInfo());
           }else {
               return  Promise.reject('Some error');
           }
        });


};


document.body.querySelector('.btn').addEventListener('click', function (e) {
    let result = fetchAvailability();
    result
        .then((resp) => {
            if (Array.isArray(resp)){
                document.body.querySelector('.info').innerHTML = `${resp[0]}`;
                document.body.querySelector('.descr').innerHTML = `${resp[1]}`;
            } else {
                document.body.querySelector('.info').innerHTML = `${resp}`;
            }
        })
        .catch((e) =>{
        if (e === 'Server Error') {
            console.error(e);
        } else {
            document.body.querySelector('.info').innerHTML = `Произошла ошибка`;
        }

        });

});

