let login = [
    {   
        index:0,
        checked: 0,
        id: 'hj213',
        password:'hj213',
        name: '윤효정',
        nickname: '',
        age: '24세',
        gender:'여성',
        img: 'image/hd.png',
        location: '',
        style: '',
        buget: [],
        roomgender: '',
        pattern:[],
    },
    {
        index:1,
        checked: 0,
        id: '0000',
        password:'0000',
        name: '이광민',
        nickname: '',
        age: '24세',
        gender:'여성',
        img: 'image/p1.jpg',
        location: '혜화',
        
    },{
        index:2,
        checked: 0,
        id: '1234',
        password:'1234',
        name: '채가예',
        nickname: '',
        age: '24세',
        gender:'여성',
        img: 'image/p2.jpg',
        
    },
    {
        index:3,
        checked: 0,
        id: '5678',
        password:'5678',
        name: '최지희',
        nickname: '',
        age: '24세',
        gender:'여성',
        img: 'image/p3.jpg',

    }
]

let userIndex = 0

function loginfun(){

    const checkLocal = localStorage.getItem(0);
    if(!checkLocal){
        localStorage.setItem(0,JSON.stringify(login[0]))
        localStorage.setItem(1,JSON.stringify(login[1]))
        localStorage.setItem(2,JSON.stringify(login[2]))
        localStorage.setItem(3,JSON.stringify(login[3]))    
    } 

    const submit = document.getElementById('loginButton');
    submit.addEventListener('click',(event)=>{
        event.preventDefault();

        const idValue = document.querySelector('.idinput').value;
        const passwordValue = document.querySelector('.password').value;
        let localData = ''
        
        for(let i =0; i < login.length; i++){
            if( login[i].id == idValue && login[i].password == passwordValue && idValue!='' && passwordValue !=''){
                userIndex = login[i].index;

                localStorage.setItem('id', idValue);
                localStorage.setItem('password', passwordValue);
                localStorage.setItem('index', userIndex);

                localData = JSON.parse(localStorage.getItem(userIndex));

                if(localData.checked == 0){
                    window.location.href = "link1.html";
                }else{
                    window.location.href = "main수정6.html";
                }
                
            }
        }
    })
}

loginfun()