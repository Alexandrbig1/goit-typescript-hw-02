/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DaysOfWeek): boolean {
  if (day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday) {
    return false;
  }
  return true;
}

isWeekend(DaysOfWeek.Monday);
