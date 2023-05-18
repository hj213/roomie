const users = [
    {   
        index:0,
        id: 'hj213',
        password:'hj213',
        name: '윤효정',
        age: '24세',
        gender:'여성',
        
        type: {location:'혜화', style:'아파트', budget: '100 ~ 140만원', gender:'여성', pattern:['야행성','비흡연']},
        img: 'image/hd.png'
    },
    {
        index:1,
        id: '',
        password:'',
        name: '이광민',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'여성', pattern:['야행성','비흡연']},
        img: 'image/p1.jpg'
    },{
        index:2,
        id: '',
        password:'',
        name: '채가예',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'오피스텔', budget: '70 ~ 100만원', gender:'여성', pattern:['야행성','비흡연']},
        img: 'image/p2.jpg'
    },
    {
        index:3,
        id: '',
        password:'',
        name: '최지희',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'여성', pattern:['야행성','비흡연']},
        img: 'image/p3.jpg'
    },{
        index:4,
        id: '',
        password:'',
        name: '김민주',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'여성', pattern:['야행성','비흡연']},
        img: 'image/p4.jpg'
    },{
        index:5,
        id: '',
        password:'',
        name: '엄수빈',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'아파트', budget: '50 ~ 70만원', gender:'여성', pattern:['아침형','비흡연']},
        img: 'image/hd.png'
    },{
        index:6,
        id: '',
        password:'',
        name: '이승주',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'여성', pattern:['아침형','비흡연']},
        img: 'image/hd.png'
    },{
        index:7,
        id: '',
        password:'',
        name: '이철수',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'투룸', budget: '50 ~ 70만원', gender:'남성', pattern:['야행성','상관없음']},
        img: 'image/hd.png'
    },{
        index:8,
        id: '',
        password:'',
        name: '이유리',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'투룸', budget: '100 ~ 120만원', gender:'여성', pattern:['아침형','상관없음']},
        img: 'image/hd.png'
    },{
        index:9,
        id: '',
        password:'',
        name: '이맹구',
        age: '24세',
        gender:'여성',
        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'남성', pattern:['아침형','비흡연']},
        img: 'image/hd.png'
    },  
]

const hyehwa = [
    {
        index:0,
        id: '',
        password:'',
        name: '김민주',
        age: '24세',
        gender:'여성',
        location:'혜화',
        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'여성', pattern:['야행성','비흡연']},
        img: 'image/p4.jpg'
    },{
        index:1,
        id: '',
        password:'',
        name: '엄수빈',
        age: '24세',
        gender:'여성',
        location:'혜화',

        type: {location:'혜화', style:'아파트', budget: '50 ~ 70만원', gender:'여성', pattern:['아침형','비흡연']},
        img: 'image/hd.png'
    },{
        index:2,
        id: '',
        password:'',
        name: '이승주',
        age: '24세',
        gender:'여성',
        location:'혜화',

        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'여성', pattern:['아침형','비흡연']},
        img: 'image/hd.png'
    },
]
    
const seongsu = [
    {
        index:0,
        id: '',
        password:'',
        name: '신짱구',
        age: '24세',
        gender:'여성',
        location:'성수',

        type: {location:'혜화', style:'투룸', budget: '50 ~ 70만원', gender:'남성', pattern:['야행성','상관없음']},
        img: 'image/hd.png'
    },
    {
        index:1,
        id: '',
        password:'',
        name: '김철수',
        age: '24세',
        gender:'여성',
        location:'성수',
        type: {location:'혜화', style:'투룸', budget: '50 ~ 70만원', gender:'남성', pattern:['야행성','상관없음']},
        img: 'image/hd.png'
    },{
        index:2,
        id: '',
        password:'',
        name: '한유리',
        age: '24세',
        gender:'여성',
        location:'성수',
        type: {location:'혜화', style:'투룸', budget: '100 ~ 120만원', gender:'여성', pattern:['아침형','상관없음']},
        img: 'image/hd.png'
    },{
        index:3,
        id: '',
        password:'',
        name: '이훈이',
        age: '24세',
        gender:'여성',
        location:'성수',
        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'남성', pattern:['아침형','비흡연']},
        img: 'image/hd.png'
    }, {
        index:4,
        id: '',
        password:'',
        name: '맹구',
        age: '24세',
        gender:'여성',
        location:'성수',
        type: {location:'혜화', style:'투룸', budget: '70 ~ 100만원', gender:'남성', pattern:['아침형','비흡연']},
        img: 'image/hd.png'
    }, 
]

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

function logout(){
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', ()=>{
        localStorage.removeItem('id');
        localStorage.removeItem('password');
        localStorage.removeItem('index');

        checkLogin()
        initMap()
        profileList()
    })
}

function checkLogin(){
    let loginedUser = localStorage.getItem('id');
    let loginedUserIndex = localStorage.getItem('index');

    const logoutForm= document.getElementById('logoutForm');
    const nickname = document.querySelector('#logoutForm h4');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click',()=>{window.location.href='login.html'});

    
    if (loginedUser){
        loginButton.style.display = 'none';
        logoutForm.style.display = '';

        nickname.innerText = `안녕하세요 ${users[loginedUserIndex].name}님 👀 `; //나중에 닉네임으로 변경하기

    } else {
        loginButton.style.display = '';
        logoutForm.style.display = 'none';
    }
}

function imageChange(){
    const image = document.getElementById('heart');

    if(image.src.match('heart2')){
        image.src = 'image/heart1.png';
    } else {
        image.src = 'image/heart2.png';
    }
}

function back(){
    const detail = document.querySelector(".detail");
    const sidebar = document.querySelector(".sidebar");
    sidebar.removeChild(detail);

    const h4 = document.querySelector(".sidebar h4");
    h4.style.display = '';

    const h5 = document.querySelector(".sidebar h5");
    h5.style.display = '';


    const sidebarUl = document.querySelector(".sidebar-ul");
    sidebarUl.style.display = '';
}

function detailProfile(loca, index){

    let user = '';

    if(loca == '혜화'){
        user = hyehwa[index]
    } else if (loca == '성수'){
        user = seongsu[index]
    }

    const sidebar = document.querySelector(".sidebar");
    
    const h4 = document.querySelector(".sidebar h4");
    h4.style.display = 'none';

    const h5 = document.querySelector(".sidebar h5");
    h5.style.display = 'none';

    const sidebarUl = document.querySelector(".sidebar-ul");
    sidebarUl.style.display = 'none';

    const detail = document.createElement("div");
    detail.classList.add("detail");

    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("picture");

    const backImage = document.createElement("img");
    backImage.id = 'arrow'
    backImage.src = 'image/Arrow.png';
    backImage.width = 20;
    backImage.height = 20;
    backImage.onclick = function(){back()}

    const profileImage = document.createElement("img");
    profileImage.src = user.img;
    profileImage.width = innerWidth - 1100;
    profileImage.height = 330;

    pictureDiv.append(backImage);
    pictureDiv.appendChild(profileImage);

    const textDiv = document.createElement("div");
    textDiv.classList.add("textDiv");

    const locaTime = document.createElement("div");
    locaTime.classList.add("locaTime");

    const location = document.createElement("span");
    location.textContent = user.location;

    const time = document.createElement("span");
    time.textContent = '10분 전';

    locaTime.appendChild(location);
    locaTime.appendChild(time);

    const name = document.createElement("div");
    name.classList.add('name');
    name.textContent = user.name;

    const extrainfo = document.createElement("div");
    extrainfo.classList.add('extrainfo');
    
    const gender = document.createElement("span");
    gender.textContent = user.gender;

    const age = document.createElement("span");
    age.textContent = user.age;

    extrainfo.appendChild(gender);
    extrainfo.appendChild(document.createTextNode(" "));
    extrainfo.appendChild(age);

    textDiv.appendChild(locaTime);
    textDiv.appendChild(name);
    textDiv.appendChild(extrainfo);

    // 태그
    const tags = document.createElement("div");
    tags.classList.add("detailTags");

    const tag1 = document.createElement("span");
    tag1.textContent = user.type.style;

    const tag2 = document.createElement("span");
    tag2.textContent = user.type.budget;

    const tag3 = document.createElement("span");
    tag3.textContent = user.type.gender;

    tags.appendChild(tag1);
    tags.appendChild(document.createTextNode(" "));
    tags.appendChild(tag2);
    tags.appendChild(document.createTextNode(" "));
    tags.appendChild(tag3);
    tags.appendChild(document.createTextNode(" "));

    for (let i = 0; i < user.type.pattern.length; i++) {
        const taglist = document.createElement("span");
        taglist.textContent = user.type.pattern[i];
        tags.appendChild(taglist);
        tags.appendChild(document.createTextNode(" "));
            
    }

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const chatDiv = document.createElement("span");
    chatDiv.classList.add('chatDiv');

    const chatButton = document.createElement("button");
    chatButton.textContent = '채팅하기';
    chatButton.style.width =  `${innerWidth - 1100 - 45 - 20 - 30}px`;

    chatDiv.appendChild(chatButton);

    const heartDiv = document.createElement("span");
    heartDiv.classList.add('heartDiv');
    heartDiv.style.marginRight = '20px';


    const heartButton = document.createElement("img");
    heartButton.id = 'heart';
    heartButton.src = 'image/heart2.png';
    heartButton.width = 45;
    heartButton.height = 45;
    heartButton.onclick = function(){imageChange()}

    heartDiv.appendChild(heartButton);

    chatDiv.appendChild(chatButton);
    heartDiv.appendChild(heartButton);

    buttons.appendChild(chatDiv);
    buttons.appendChild(heartDiv);

    detail.appendChild(pictureDiv);
    detail.appendChild(textDiv);
    detail.appendChild(tags);
    detail.appendChild(buttons);



    sidebar.appendChild(detail);

}

function profileList(loca = ' '){
    // const h4 = document.querySelector(".sidebar h4");
    // h4.style.display = 'none';

    // const sidebarUl = document.querySelector(".sidebar-ul");
    // sidebarUl.style.display = 'none';

    // detailProfile(0);
    ///

    const userIndex = localStorage.getItem('index');
    const localData = JSON.parse(localStorage.getItem(userIndex));
    let userList = [];

    //1번 로그인 유저가 없음, 2번 로그인 유저 있
    if(loca === ' ' && !localData){
        userList = users; //로그인 유저 없음
    } else if(loca === ' ' && localData){
        if (localData.location == '혜화'){
            userList = hyehwa
        } else if (localData.location == ''){ //추가

        }
    } else if(loca != ' '){ 
        if (loca == '혜화'){
            userList = hyehwa
        } else if (loca == '성수'){ //추가
            userList = seongsu
        }
    }

    const sidebar = document.querySelector('.sidebar');
    sidebar.style.height = `${innerHeight - 103.5}px`;

    const h4 = document.querySelector(".sidebar h4");
    h4.innerText = `🏡 ${localData? userList[0].location: '전체'} 루미를 보고있어요.`

    userList.forEach(function(data) {
        // list
        const listItem = document.createElement("li");
        listItem.classList.add("sidebar-list");
        listItem.addEventListener('click',()=>{
            detailProfile(data.location, data.index);
        })
        //image
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
      
        const image = document.createElement("img");
        image.src = data.img;
        image.width = 70;
        image.height = 70;
      
        imageDiv.appendChild(image);
      
        // profile
        const profile = document.createElement("div");
        profile.classList.add("profile");
      
        // info
        const info = document.createElement("div");
        info.classList.add("info");
      
        const name = document.createElement("span");
        name.textContent = data.name;
      
        const gender = document.createElement("span");
        gender.textContent = data.gender;
      
        const age = document.createElement("span");
        age.textContent = data.age;
      
        info.appendChild(name);
        info.appendChild(document.createTextNode(" "));
        info.appendChild(gender);
        info.appendChild(document.createTextNode(" "));
        info.appendChild(age);
      
        // 태그
        const tags = document.createElement("div");
        tags.classList.add("tags");
      
        const tag1 = document.createElement("span");
        tag1.textContent = data.type.style;
      
        const tag2 = document.createElement("span");
        tag2.textContent = data.type.budget;
      
        const tag3 = document.createElement("span");
        tag3.textContent = data.type.gender;
      
        const tag4 = document.createElement("span");
        tag4.textContent = data.type.pattern[0]; //일단 하나만 
      
        tags.appendChild(tag1);
        tags.appendChild(document.createTextNode(" "));
        tags.appendChild(tag2);
        tags.appendChild(document.createTextNode(" "));
        tags.appendChild(tag3);
        tags.appendChild(document.createTextNode(" "));
        tags.appendChild(tag4);
        tags.appendChild(document.createTextNode(" "));
      
        profile.appendChild(info);
        profile.appendChild(tags);
      
        listItem.appendChild(imageDiv);
        listItem.appendChild(profile);
      
        const sidebarUl = document.querySelector(".sidebar-ul");
        sidebarUl.appendChild(listItem);
        
      });

      const h5 = document.querySelector(".sidebar h5");
      h5.innerText = `총 ${userList.length}개의 결과가 있습니다.`
      
}

checkLogin()
logout()
profileList()

