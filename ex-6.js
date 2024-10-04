// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";
let lastLetter = "";

// Start coding here
for (let i = 0; i < companyName.length; i++) {
  if (i < companyName.length) {
    reversedCompanyName = companyName[i] + reversedCompanyName;
  }
}
console.log(reversedCompanyName);
