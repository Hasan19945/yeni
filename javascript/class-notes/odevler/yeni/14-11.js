function generateRandomPassword(lenght = 10) {
    const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCases = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
    //? en az 1 küçük harf, 1 büyük harf, 3 rakam, ve 2 tane sembol
    const requiredLowerCase =
      lowerCases[Math.floor(Math.random() * lowerCases.length)];
    console.log(requiredLowerCase);
    const requiredUpperCase =
      upperCases[Math.floor(Math.random() * upperCases.length)];
    console.log(requiredUpperCase);
    const randomNumber1 = numbers.charAt(
      Math.floor(Math.random() * numbers.length)
    );
    const randomSymbol1 = symbols.charAt(
      Math.floor(Math.random() * symbols.length)
    );
    const randomNumber2 = numbers.charAt(
      Math.floor(Math.random() * numbers.length)
    );
    const randomSymbol2 = symbols.charAt(
      Math.floor(Math.random() * symbols.length)
    );
    const randomSymbol3 = symbols.charAt(
      Math.floor(Math.random() * symbols.length)
    );
    const gerekliKarakterler =
      requiredLowerCase +
      requiredUpperCase +
      randomNumber1 +
      randomNumber2 +
      randomSymbol1 +
      randomSymbol2 +
      randomSymbol3;
    console.log(gerekliKarakterler);
    // Geri kalan karakterleri rastgele seçelim
    const remainingCharacters = upperCases + lowerCases + numbers + symbols;
    let password = "";
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
      password += remainingCharacters.charAt(randomIndex);
    }
    password = password + gerekliKarakterler;
    console.log(password);
    password = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
      console.log(password);
      return password
  }
  generateRandomPassword();
  const button =document.getElementById("password")
  const p=document.querySelector("p")
  button.addEventListener("click",()=>{
   const paralo=generateRandomPassword()
  p.innerText=paralo
  })