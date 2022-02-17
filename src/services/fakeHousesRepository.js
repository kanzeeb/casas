const houses = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    location: "CDMX",
    item: "Av. simpre viva 1 2 3",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberRooms: 6,
    numberBaths: 6,
    parking: "Estacionamiento",
    kitchen: "Cocina",
    yard: "Jardín",
    price: "1,220,000.00",
    gallery: {
        flat: ['https://i.postimg.cc/wxnPnJRm/flat-5.jpg'],        
    }
  },  
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    location: "CDMX",
    item: "Av. simpre viva 1 2 3",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberRooms: 6,
    numberBaths: 6,
    parking: "Estacionamiento",
    kitchen: "Cocina",
    yard: "Jardín",
    price: "1,220,000.00",
    gallery: {
        flat: ['https://i.postimg.cc/0rgpZ9Qz/flat-1.jpg'],        
    }
  },  
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    location: "CDMX",
    item: "Av. simpre viva 1 2 3",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberRooms: 6,
    numberBaths: 6,
    parking: "Estacionamiento",
    kitchen: "Cocina",
    yard: "Jardín",
    price: "1,220,000.00",
    gallery: {
        flat: ['https://i.postimg.cc/y8HG8HP6/flat-2.jpg'],        
    }
  },  
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    location: "CDMX",
    item: "Av. simpre viva 1 2 3",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberRooms: 6,
    numberBaths: 6,
    parking: "Estacionamiento",
    kitchen: "Cocina",
    yard: "Jardín",
    price: "1,220,000.00",
    gallery: {
        flat: ['https://i.postimg.cc/Qx5PDtcn/flat-3.jpg'],        
    }
  },  
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    location: "CDMX",
    item: "Av. simpre viva 1 2 3",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberRooms: 6,
    numberBaths: 6,
    parking: "Estacionamiento",
    kitchen: "Cocina",
    yard: "Jardín",
    price: "1,220,000.00",
    gallery: {
        flat: ['https://i.postimg.cc/G34VMztR/flat-4.jpg'],        
    }
  }, 
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    location: "CDMX",
    item: "Av. simpre viva 1 2 3",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberRooms: 6,
    numberBaths: 6,
    parking: "Estacionamiento",
    kitchen: "Cocina",
    yard: "Jardín",
    price: "1,220,000.00",
    gallery: {
        flat: ['https://i.postimg.cc/0rgpZ9Qz/flat-1.jpg'],        
    }
  }, 
];
  

export function getHouses() {
  return houses;
}

export function getHouse(id) {
  return houses.find(m => m._id === id);
}
