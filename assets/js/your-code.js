export async function getAllDogs() {
  try {
    const res = await fetch("/api/dogs");

    // Handle HTTP errors
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data; 
  } catch (error) {
    console.error("ERROR: ", error);
    return null; 
  }
}

export async function getDogNumberTwo() {
   try {
     const res = await fetch("/api/dogs/2");

    // Handle HTTP errors
    if(!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
   } catch (error) {
    console.error("Error", error);
    return null;
   }
}

export async function postNewDog() {
   try {

    const res = await fetch ("/api/dogs", {
        method: "POST",
        headers: headers,
        body:body
    })
    const data = await res.json();
    return data;
   } catch (error) {
    console.error("Error", error);
    return null;
   }
}

export async function postNewDogV2(name, age) {
     try {
const response = await fetch("/api/dogs", {
    method: "POST",
    headers : {
        "Content-Type": "application/json"
    
    },
    body: JSON.stringify({
        name: name,
        age: age
    })
})
const data = await response.json();
return data;
     } catch (err) {
        console.log("Error", err);
        return null;
     }
}

export async function deleteDog(id) {
      try {
        const response = await fetch(`/api/dogs/${id}`, {
            method: "DELETE",
           
        })
const data = await response.json();
return data;
      } catch (err) {
        console.error("Error", err);
        return null
      }
}