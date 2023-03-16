// problem-1: Write an arrow function that will take 3 parameters , will multiply the parameters and will return the result.

const multiply = (first,second,third) => first*second*third;

const result = multiply(2,2,2);


// problem-2: Write the following sentence in three lines and print the result--:
// 'i am a web developer. i love to code. i love to eat biriyani.'

const multipleLines=`I am a web developer.
I love to code.
I love  to eat biriyani`;

//  problem-3:Write an arrow function that take 2 parameters: One parameter will come from you and the other parameter will be a default parameter.Add these parameters and return the result.

const add=(first,second=5) => first+second;
const res = add(10);


// problem: Write an arrow function that will do the following-->
// a) It will take an array where the array elements will be the name of your friends.
// b) check if the length of each element is even. push elements with even length to a new array and return the result. print the result

const getFriendsWithEvenLength = (friendsArray) => {
    const evenLengthFriends = [];
  
    friendsArray.forEach((friend) => {
      if (friend.length % 2 === 0) {
        evenLengthFriends.push(friend);
      }
    });
  
    return evenLengthFriends;
  };
  
  const friends = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
  const friendsWithEvenLength = getFriendsWithEvenLength(friends);
  console.log(friendsWithEvenLength);
  


