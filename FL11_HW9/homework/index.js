// --------0

function getNumbers(text) {
    let a = text,
        b = [];
    for (let i=0; i < a.length; i++) {
        if (!isNaN(a[i])) {
            b.push(a[i]);
        }
    }
    return b
}

// getNumbers('string');
// getNumbers('n1um3ber95');

// --------1

function findTypes() {
    let countTypes = {
        'number': 0,
        'boolean': 0,
        'string': 0,
        'object': 0,
        'function': 0
    };

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        switch (typeof arguments[i]) {
            case 'number':
                ++countTypes.number;
                break;
            case 'boolean':
                ++countTypes.boolean;
                break;
            case 'string':
                ++countTypes.string;
                break;
            case 'object':
                ++countTypes.object;
                break;
            case 'function':
                ++countTypes.function;
                break;
            default:
                ++countTypes.undefined;
                break;
        }
     }
    
    return countTypes
}

// findTypes(3, true);
// findTypes(5, null, 'hello');
 
// --------2

function executeforEach(arr, callback) {
    for (let i=0; i < arr.length; i++) {
        callback(arr[i])
    }
}

// executeforEach([1,2,3], function(el) {
//  console.log(el) 
// });

// --------3

function mapArray(arr, callback) {
    let c = [];
    executeforEach(arr, (el) => {
        c.push(callback(el));
    });
    return c
}

// mapArray([2, 5, 8], function(el) {
//     return el + 3 
// }) 

// --------4

function filterArray(arr, callback) {
    let c = [];
    executeforEach(arr, (el) => {
        if(callback(el)) {
            c.push(el);
        }
    });
    return c
}

// filterArray([2, 5, 8], function(el) {
//     return el > 3 
//    }) 

// --------5

function showFormattedDate(date) {
	let options = { month: 'short', day: 'numeric' , year: 'numeric' };
	return 'Date: ' + date.toLocaleDateString('en-UK', options).replace(/,/, '');
}

// showFormattedDate(new Date('2019-12-27T01:10:00'));

// --------6

function canConvertToDate(date) {
    return !isNaN(new Date(date));
  }
  
// canConvertToDate('2016-13-18T00:00:00');
// canConvertToDate('2016-03-18T00:00:00');

// --------7

function daysBetween(date1, date2) {
	const SEC_IN_DAY = 86400000;
	return Math.ceil(Math.abs(Date.parse(date1) - Date.parse(date2)) / SEC_IN_DAY);
}
  
// daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

// --------8

let data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ];
  

function getAmountOfAdultPeople(data) {
    const DAYS_IN_YEAR = 365;
    const ADULT_AGE = 18;
    return filterArray(data, function(el) {
      return daysBetween(new Date(el[' birthday ']), Date.now()) / DAYS_IN_YEAR > ADULT_AGE;
    }).length;
  }

getAmountOfAdultPeople(data);


// --------9

function keys(obj) {
    let c = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        c.push(key);
      }
    }
    return c;
  }
  
// keys({
//     keyOne: 1,
//     keyTwo: 2,
//     keyThree: 3
//   });

// --------10

function values(obj) {
    let c = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        c.push(obj[key]);
      }
    }
    return c;
  }
  
// keys({
//     keyOne: 1,
//     keyTwo: 2,
//     keyThree: 3
//   });

