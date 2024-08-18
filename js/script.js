const inputText = document.querySelector(".input-text");
const outputText = document.querySelector(".output-text");
const btnCopy = document.querySelector(".btn-copy");

const Arraycode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

const encrypt = (stringToEncrypt) => {
    stringToEncrypt = stringToEncrypt.toLowerCase();
    for (let [original, encrypted] of Arraycode) {
        stringToEncrypt = stringToEncrypt.replaceAll(original, encrypted);
    }
    return stringToEncrypt;
}

const decrypt = (stringToDecrypt) => {
    stringToDecrypt = stringToDecrypt.toLowerCase();
    for (let [original, encrypted] of Arraycode) {
        stringToDecrypt = stringToDecrypt.replaceAll(encrypted, original);
    }
    return stringToDecrypt;
}

const btnEncrypt = () => {
    const encryptedString = encrypt(inputText.value);
    outputText.value = encryptedString;
    inputText.value = "";
    outputText.style.backgroundImage = "none";
}

const btnDecrypt = () => {
    const decryptedString = decrypt(inputText.value);
    outputText.value = decryptedString;
    inputText.value = "";
}

const copyToClipboard = () => {
    outputText.select();
    document.execCommand("copy");
}

document.querySelector(".btn-encrypt").addEventListener("click", btnEncrypt);
document.querySelector(".btn-decrypt").addEventListener("click", btnDecrypt);
btnCopy.addEventListener("click", copyToClipboard);