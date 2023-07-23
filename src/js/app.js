export default function orderByProps (obj, array) {
    let arr1 = [];
    let arr2 = [];

    if (!array) {
        throw new Error('Не передан порядок сортировки свойств');
      } else if (!Array.isArray(array)) {
        throw new Error('Порядок сортировки свойств не является массивом');
      }
      
      for (let i = 0; i < array.length; i++) {
        if (Object.keys(obj).includes(array[i])) {
          arr1.push({key: array[i], value: obj[array[i]]});
        }
      }
    
      for (let key in obj) {
        if (!array.includes(key)) {
           arr2.push({key: key, value: obj[key]});
        }
      }
    
      arr2.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        }
        return -1;
      });
    
      const sortedArr = arr1.concat(arr2);
      return sortedArr;
}