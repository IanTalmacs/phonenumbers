
const prefix = '98877-'
const fileName = 'ian98877.txt';
const numberList = document.querySelector('#number-list');
const phoneNumbers = [];

const data = [];

// {
//   number : '',
//   exist : false,
//   doesntWant : false,
//   accepted : false,
// }


for (i = 0; i<1000; i++) {
  let numberStr = '0000' + i;
  while (numberStr.length > 4) {
    numberStr = numberStr.slice(1)
  }
  data.push({
    number : prefix + numberStr,
    doesntExist : false,
    doesntWant : false,
    accepted : false,
  })
}

//USER CLICKED 'ACCEPTED' CHECKBOX
document.querySelector('.accepted')
.addEventListener('change', e => {
  if (e.target.checked) {
    e.path[2].style.backgroundColor = 'springgreen';
    console.log('oi')
  } else {
    e.path[2].style.backgroundColor = 'white';
  };
});

// USER CLICKED 'DOESNT WANT' CHECKBOX
document.querySelector('.doesnt-want')
.addEventListener('change', (e) => {
  if (e.target.checked) {
     e.path[2].style.backgroundColor = 'tomato';
  } else {
     e.path[2].style.backgroundColor = 'white';
  }
})

// USER CLICKED 'DOESNT exist' CHECKBOX
document.querySelector('.doesnt-exist')
.addEventListener('change', (e) => {
  if (e.target.checked) {
     e.path[2].style.backgroundColor = 'grey';
  } else {
     e.path[2].style.backgroundColor = 'white';
  }
})

const acceptedFunc = e => {
  e.addEventListener('change', e => {
    if (e.target.checked) {
      e.path[2].style.backgroundColor = 'springgreen';
      for (i=0; i<1000; i++) {
        if (e.path[2].id == data[i].number) {
          data[i].accepted = true;
        }
      }
    } else {
      e.path[2].style.backgroundColor = 'white';
      for (i=0; i<1000; i++) {
        if (e.path[2].id == data[i].number) {
          data[i].accepted = false;
        }
      }
    };
  });
}

const doesntWantFunc = e => {
  e.addEventListener('change', e => {
    if (e.target.checked) {
      e.path[2].style.backgroundColor = 'tomato';
      for (i=0; i<1000; i++) {
        if (e.path[2].id == data[i].number) {
          data[i].doesntWant = true;
        }
      }
    } else {
      e.path[2].style.backgroundColor = 'white';
      for (i=0; i<1000; i++) {
        if (e.path[2].id == data[i].number) {
          data[i].doesntWant = false;
        }
      }
    };
  });
}

const doesntExistFunc = e => {
  e.addEventListener('change', e => {
    if (e.target.checked) {
      e.path[2].style.backgroundColor = 'grey';
      for (i=0; i<1000; i++) {
        if (e.path[2].id == data[i].number) {
          data[i].doesntExist = true;
        }
      }
    } else {
      e.path[2].style.backgroundColor = 'white';
      for (i=0; i<1000; i++) {
        if (e.path[2].id == data[i].number) {
          data[i].doesntExist = false;
        }
      }
    };
  });
}

//EACH LINE ELEMENT
const line = document.querySelector('#row')
const loadNumbers = () => {
  data.map(num => {
    let line = document.querySelector('#row').cloneNode(true)
    line.id = num.number
    document.body.appendChild(line);
    line.children[0].childNodes[1].textContent = num.number;
  })
  document.querySelectorAll('.accepted').forEach(acceptedFunc);
  document.querySelectorAll('.doesnt-want').forEach(doesntWantFunc);
  document.querySelectorAll('.doesnt-exist').forEach(doesntExistFunc);
}

const loadNumbers2 = () => {

  const myJSON = JSON.stringify(data)
  document.body.innerHTML = myJSON

}


const postFunc = () => {
  fetch(fileName, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

document.querySelector('#load-numbers')
.addEventListener('click', loadNumbers2);

document.querySelector('#post')
.addEventListener('click', postFunc)


