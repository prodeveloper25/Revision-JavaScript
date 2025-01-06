const addToLocalStorage = () => {
  const storageIdField = document.getElementById("storageId");
  const storageValueField = document.getElementById("storageValue");
  const storageId = storageIdField.value;
  const storageValue = storageValueField.value;
  if (storageId && storageValue) {
    localStorage.setItem(storageId, storageValue);
    storageId.value = "";
    storageValue.value = "";
  } else {
    alert("Please Enter your Id & Value");
  }
};
