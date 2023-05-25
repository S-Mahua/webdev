const fur = "https://www.coursehubiitg.in/api/codingweek/contributions";

fetch(fur)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("ERROR" + response.status);
        }
    })
    .then(user => {
        const alpha = [];
        const beta = [];
        const gamma= [];

        for (let x in user) {
            

            alpha[x] = (user[x].points);

        }

        alpha.sort(function (a, b) { return b - a });

        let nos = alpha.indexOf()
        for (let y in user) {
            let nos = alpha.indexOf(user[y].points, 0);
            beta[nos] = user[y].name;
            gamma[nos] = user[y].avatar;
        }

        let e1
        let e2
        let e3
        let e4
        let e5
        let e6
        let e7



        document.getElementsByClassName('amanda')[0].innerHTML=beta[0] +' . ' +alpha[0];
        let av1=document.createElement('img');
        av1.classList='cute';
        av1.src=gamma[0];
      
        document.getElementsByClassName('dot1')[0].appendChild(av1);

        document.getElementsByClassName('jeremy')[0].innerHTML=beta[1] +' . ' +alpha[1];
        let av2=document.createElement('img');
        av2.classList='cuter';
        av2.src=gamma[1];
      
        document.getElementsByClassName('dot2')[0].appendChild(av2);


        document.getElementsByClassName('jefferey')[0].innerHTML=beta[2] +' . ' +alpha[2];
        let av3=document.createElement('img');
        av3.classList='cuter';
        av3.src=gamma[2];
      
        document.getElementsByClassName('dot3')[0].appendChild(av3);


        for(let k=3; k < user.length;k++)
        {
            e1=document.createElement('div');
             e2=document.createElement('div');
             e3=document.createElement('div');
            e4=document.createElement('div');
           e5=document.createElement('div');
           e6=document.createElement('div');
           e7=document.createElement('img');
           e7.classList ='cutest';
           e7.src=gamma[k];
           e1.setAttribute('id','rec1');
           e2.setAttribute('id','num1');
           e3.setAttribute('id','circle');
           e4.setAttribute('id','name1');
           e5.setAttribute('id','score1');
           e6.classList='dog';
           e2.textContent=k+1;
           e4.textContent=beta[k];
           e5.textContent=alpha[k];
           e3.appendChild(e7);
           e1.appendChild(e2);
           e1.appendChild(e3)
           e1.appendChild(e4)
           e1.appendChild(e5)
           document.getElementsByClassName('rec')[0].appendChild(e1);
           document.getElementsByClassName('rec')[0].appendChild(e6);
          console.log(e4);



           
        }

    })
    .catch(error => {
        console.error(error);
    });