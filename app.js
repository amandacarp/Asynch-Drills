function doStuff(message){
    console.log(message);
}

doStuff("hello")

setTimeout(() => {
    doStuff('hello world');
}, 2000)    

let words = ['word1', 'word2', 'word3', 'word4']

function getWords(word){
    console.log(word)
}
getWords(words[0])

setTimeout(() => {
    getWords(words[1]);
  }, 3000);

  setTimeout(() => {
    getWords(words[2]);
  }, 2000);

  setTimeout(() => {
    getWords(words[3]);
  }, 1000);


const countDown = (num, callback) => {
    setTimeout(() => {
         if(num > 0){
        console.log(num);
        countDown(num - 1, callback);
    } else{
        callback();
    } 
    }, 1000);
   
}

const done = () => {
    console.log("Job's done!")
};

countDown(5, done);

const lunchTime = true;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        
        if (lunchTime === true) {
            let lunchOrder = {
                lunch: 'sandwich',
                drink: 'soda'
            }
            resolve(lunchOrder);
        } else {
            let err = new Error('Something went wrong')
            reject(err);
        }
    });
  };

  orderMeSomeFood()
  .then((a) => {
      console.log(a);
  }).catch((e) => {
      console.log('An error occurred')
      console.log(e);
  })

  