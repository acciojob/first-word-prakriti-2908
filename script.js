function firstWord(s) {
  // your code here
	let ans= "";
  for(let i=0;i<s.length;i++){
      if(s.charAt(i)!=" "){
          ans+=s.charAt(i);
      }else{
          return ans;
      }
  }
  return ans;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
