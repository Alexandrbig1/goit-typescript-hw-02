/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Alisa" }, { age: 28 });

merged.name;

export {};
