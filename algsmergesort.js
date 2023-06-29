function mergeSort(arr) {
  // Базовый случай: если массив содержит один элемент или пуст, он уже отсортирован
  if (arr.length <= 1) {
    return arr;
  }
  
  // Находим середину массива
  const middle = Math.floor(arr.length / 2);
  
  // Рекурсивно разделяем исходный массив на две половины
  const leftHalf = mergeSort(arr.slice(0, middle));
  const rightHalf = mergeSort(arr.slice(middle));
  
  // Объединяем и сортируем две половины
  return merge(leftHalf, rightHalf);
}

function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Пока оба массива содержат элементы, сравниваем и добавляем их в результирующий массив
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Добавляем оставшиеся элементы из левого массива (если есть)
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }
  
  // Добавляем оставшиеся элементы из правого массива (если есть)
  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }
  
  return merged;
}

// Пример использования:
const arr = [8, 3, 1, 5, 10, 2, 7, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Выводит [1, 2, 3, 5, 6, 7, 8, 10]
