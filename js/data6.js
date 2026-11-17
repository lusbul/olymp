const TASKS6=[
  {
    "id": "letters",
    "name": "Літери у шифрі Буча",
    "skill": "Підрахунок символів",
    "story": "Буч отримав пароль з малих латинських літер. Скільки разів у ньому зустрічається літера a?",
    "input": "Один непорожній рядок S з малих латинських літер, довжина ≤ 1000.",
    "output": "Кількість літер a.",
    "exampleIn": "bananas",
    "exampleOut": "3",
    "hint": "Переберіть символи або скористайтеся count.",
    "theory": "Рядок — це послідовність символів. Метод count підраховує входження заданого символу.",
    "starter": "s = input().strip()\n# Порахуйте літери a\n",
    "tests": [
      {
        "input": "bananas",
        "expected": "3"
      },
      {
        "input": "a",
        "expected": "1"
      },
      {
        "input": "bbbb",
        "expected": "0"
      },
      {
        "input": "aaaa",
        "expected": "4"
      },
      {
        "input": "abracadabra",
        "expected": "5"
      },
      {
        "input": "cat",
        "expected": "1"
      },
      {
        "input": "papaya",
        "expected": "3"
      },
      {
        "input": "zzzzza",
        "expected": "1"
      },
      {
        "input": "alabama",
        "expected": "4"
      },
      {
        "input": "alphabet",
        "expected": "2"
      }
    ]
  },
  {
    "id": "palindrome",
    "name": "Дзеркальний пароль",
    "skill": "Паліндром",
    "story": "Двері лабораторії Буча відкриються, якщо пароль однаково читається зліва направо й справа наліво. Виведіть YES або NO.",
    "input": "Непорожній рядок S із малих латинських літер, довжина ≤ 1000.",
    "output": "YES, якщо рядок є паліндромом, інакше NO.",
    "exampleIn": "level",
    "exampleOut": "YES",
    "hint": "Порівняйте рядок із перевернутим рядком.",
    "theory": "Зріз [::-1] повертає рядок у зворотному порядку. Паліндром збігається зі своїм відображенням.",
    "starter": "s = input().strip()\n# Перевірте дзеркальність\n",
    "tests": [
      {
        "input": "level",
        "expected": "YES"
      },
      {
        "input": "a",
        "expected": "YES"
      },
      {
        "input": "ab",
        "expected": "NO"
      },
      {
        "input": "abba",
        "expected": "YES"
      },
      {
        "input": "abcba",
        "expected": "YES"
      },
      {
        "input": "abca",
        "expected": "NO"
      },
      {
        "input": "racecar",
        "expected": "YES"
      },
      {
        "input": "banana",
        "expected": "NO"
      },
      {
        "input": "zzzz",
        "expected": "YES"
      },
      {
        "input": "abcdedcba",
        "expected": "YES"
      }
    ]
  },
  {
    "id": "vowels",
    "name": "Голосові сигнали",
    "skill": "Підрахунок голосних",
    "story": "Буч аналізує англомовні повідомлення робота. Скільки голосних літер a, e, i, o, u містить повідомлення? Усі літери малі.",
    "input": "Один непорожній рядок S із малих латинських літер, довжина ≤ 1000.",
    "output": "Кількість голосних літер.",
    "exampleIn": "algorithm",
    "exampleOut": "3",
    "hint": "Для кожного символу перевіряйте належність до рядка голосних.",
    "theory": "Оператор in перевіряє, чи міститься символ у заданому наборі. Лічильник збільшується для кожної голосної.",
    "starter": "s = input().strip()\n# Порахуйте голосні\n",
    "tests": [
      {
        "input": "algorithm",
        "expected": "3"
      },
      {
        "input": "a",
        "expected": "1"
      },
      {
        "input": "bcdf",
        "expected": "0"
      },
      {
        "input": "aeiou",
        "expected": "5"
      },
      {
        "input": "book",
        "expected": "2"
      },
      {
        "input": "queue",
        "expected": "4"
      },
      {
        "input": "python",
        "expected": "1"
      },
      {
        "input": "education",
        "expected": "5"
      },
      {
        "input": "zzz",
        "expected": "0"
      },
      {
        "input": "olympiad",
        "expected": "3"
      }
    ]
  },
  {
    "id": "words",
    "name": "Слова у повідомленні",
    "skill": "Розбиття рядка",
    "story": "Буч отримав повідомлення з кількох слів, розділених пробілами. Скільки слів у повідомленні? Між словами може бути кілька пробілів.",
    "input": "Один рядок із латинських літер і пробілів, довжина ≤ 1000.",
    "output": "Кількість слів.",
    "exampleIn": "buch goes to olympiad",
    "exampleOut": "4",
    "hint": "Метод split() без аргументів розділяє за послідовностями пробілів.",
    "theory": "Метод split() повертає список слів, ігноруючи зайві пробіли. len() визначає його довжину.",
    "starter": "s = input()\n# Порахуйте слова\n",
    "tests": [
      {
        "input": "buch goes to olympiad",
        "expected": "4"
      },
      {
        "input": "hello",
        "expected": "1"
      },
      {
        "input": "a  b   c",
        "expected": "3"
      },
      {
        "input": "   cat   ",
        "expected": "1"
      },
      {
        "input": "one two",
        "expected": "2"
      },
      {
        "input": "   ",
        "expected": "0"
      },
      {
        "input": "x  y",
        "expected": "2"
      },
      {
        "input": "python code runner",
        "expected": "3"
      },
      {
        "input": "  many   spaces  here ",
        "expected": "3"
      },
      {
        "input": "word",
        "expected": "1"
      }
    ]
  },
  {
    "id": "substrings",
    "name": "Таємний фрагмент",
    "skill": "Пошук підрядка",
    "story": "Буч шукає секретний фрагмент P у повідомленні S. Скільки разів він зустрічається, якщо входження можуть перекриватися?",
    "input": "Два рядки: S та P з малих латинських літер (1 ≤ |P| ≤ |S| ≤ 1000).",
    "output": "Кількість входжень P у S, включно з перекриваннями.",
    "exampleIn": "ababa\naba",
    "exampleOut": "2",
    "hint": "Перевіряйте всі можливі початкові позиції фрагмента.",
    "theory": "Для перекривних входжень недостатньо звичайного count: потрібно порівнювати зрізи S[i:i+len(P)] на кожній позиції.",
    "starter": "s = input().strip()\np = input().strip()\n# Порахуйте всі входження, навіть перекривні\n",
    "tests": [
      {
        "input": "ababa\naba",
        "expected": "2"
      },
      {
        "input": "a\na",
        "expected": "1"
      },
      {
        "input": "aaaa\naa",
        "expected": "3"
      },
      {
        "input": "abc\nd",
        "expected": "0"
      },
      {
        "input": "banana\nana",
        "expected": "2"
      },
      {
        "input": "abcabc\nabc",
        "expected": "2"
      },
      {
        "input": "xyz\ny",
        "expected": "1"
      },
      {
        "input": "aaaaa\naaa",
        "expected": "3"
      },
      {
        "input": "mississippi\nissi",
        "expected": "2"
      },
      {
        "input": "abababab\nbab",
        "expected": "3"
      }
    ]
  }
];
