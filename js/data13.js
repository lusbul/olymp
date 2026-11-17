const TASKS13=[
  {
    "id": "bookstack",
    "name": "Стос карток Буча",
    "skill": "Стек · LIFO",
    "story": "Буч кладе картки на стос і забирає лише верхню. Виконайте N команд: + X (покласти картку X) або - (забрати верхню). Гарантовано, що з порожнього стосу не забирають. Який номер залишиться зверху? Якщо стос порожній, виведіть EMPTY.",
    "input": "N (1–1000), далі N рядків: + X або -.",
    "output": "Верхній номер або EMPTY.",
    "exampleIn": "6\n+ 3\n+ 8\n-\n+ 7\n-",
    "exampleOut": "3",
    "hint": "Стек підтримує append() і pop().",
    "theory": "Стек працює за принципом LIFO: останній доданий елемент вилучають першим.",
    "starter": "n=int(input())\nstack=[]\nfor _ in range(n):\n    command=input().split()\n    # Опрацюйте команду\n",
    "tests": [
      {
        "input": "6\n+ 3\n+ 8\n-\n+ 7\n-",
        "expected": "3"
      },
      {
        "input": "1\n+ 9",
        "expected": "9"
      },
      {
        "input": "2\n+ 1\n-",
        "expected": "EMPTY"
      },
      {
        "input": "3\n+ 2\n+ 4\n-",
        "expected": "2"
      },
      {
        "input": "4\n+ 1\n+ 2\n-\n-",
        "expected": "EMPTY"
      },
      {
        "input": "5\n+ 1\n+ 2\n+ 3\n-\n-",
        "expected": "1"
      },
      {
        "input": "3\n+ 10\n-\n+ 5",
        "expected": "5"
      },
      {
        "input": "6\n+ 1\n+ 2\n+ 3\n-\n-\n-",
        "expected": "EMPTY"
      },
      {
        "input": "3\n+ 0\n+ 7\n+ 8",
        "expected": "8"
      },
      {
        "input": "4\n+ 8\n-\n+ 2\n+ 4",
        "expected": "4"
      }
    ]
  },
  {
    "id": "queue",
    "name": "Черга на реєстрацію",
    "skill": "Черга · FIFO",
    "story": "Буч допомагає на реєстрації. Виконайте N команд: + X — учасник X стає в кінець черги, - — перший учасник іде. Гарантовано, що з порожньої черги не вилучають. Виведіть номер першого учасника або EMPTY.",
    "input": "N (1–1000), далі N команд + X або -.",
    "output": "Перший номер або EMPTY.",
    "exampleIn": "6\n+ 3\n+ 8\n-\n+ 7\n-",
    "exampleOut": "7",
    "hint": "Черга з collections.deque підтримує append() та popleft().",
    "theory": "FIFO: першим виходить той, хто прийшов першим.",
    "starter": "from collections import deque\nn=int(input())\nq=deque()\nfor _ in range(n):\n    command=input().split()\n    # Опрацюйте команду\n",
    "tests": [
      {
        "input": "6\n+ 3\n+ 8\n-\n+ 7\n-",
        "expected": "7"
      },
      {
        "input": "1\n+ 9",
        "expected": "9"
      },
      {
        "input": "2\n+ 1\n-",
        "expected": "EMPTY"
      },
      {
        "input": "3\n+ 2\n+ 4\n-",
        "expected": "4"
      },
      {
        "input": "4\n+ 1\n+ 2\n-\n-",
        "expected": "EMPTY"
      },
      {
        "input": "5\n+ 1\n+ 2\n+ 3\n-\n-",
        "expected": "3"
      },
      {
        "input": "3\n+ 10\n-\n+ 5",
        "expected": "5"
      },
      {
        "input": "6\n+ 1\n+ 2\n+ 3\n-\n-\n-",
        "expected": "EMPTY"
      },
      {
        "input": "3\n+ 0\n+ 7\n+ 8",
        "expected": "0"
      },
      {
        "input": "4\n+ 8\n-\n+ 2\n+ 4",
        "expected": "2"
      }
    ]
  },
  {
    "id": "parent",
    "name": "Хто тренер Буча?",
    "skill": "Дерево · батьківська вершина",
    "story": "У дереві підготовки N вершин. Для кожної вершини від 2 до N задано номер її батька. Визначте батька вершини X. Корінь — вершина 1.",
    "input": "Перший рядок N X (2 ≤ N ≤ 1000, 2 ≤ X ≤ N), другий — N−1 номерів батьків для вершин 2..N.",
    "output": "Номер батька X.",
    "exampleIn": "5 4\n1 1 2 2",
    "exampleOut": "2",
    "hint": "Відповідний елемент масиву батьків має індекс X−2.",
    "theory": "У кореневого дерева кожна вершина, крім кореня, має одного батька.",
    "starter": "n,x=map(int,input().split())\nparents=list(map(int,input().split()))\n# Знайдіть батька x\n",
    "tests": [
      {
        "input": "5 4\n1 1 2 2",
        "expected": "2"
      },
      {
        "input": "2 2\n1",
        "expected": "1"
      },
      {
        "input": "3 3\n1 2",
        "expected": "2"
      },
      {
        "input": "4 2\n1 2 3",
        "expected": "1"
      },
      {
        "input": "5 5\n1 2 3 4",
        "expected": "4"
      },
      {
        "input": "6 3\n1 1 1 1 1",
        "expected": "1"
      },
      {
        "input": "6 6\n1 1 2 2 3",
        "expected": "3"
      },
      {
        "input": "7 4\n1 1 2 2 3 3",
        "expected": "2"
      },
      {
        "input": "8 8\n1 2 3 4 5 6 7",
        "expected": "7"
      },
      {
        "input": "4 3\n1 1 1",
        "expected": "1"
      }
    ]
  },
  {
    "id": "leaves",
    "name": "Листочки турнірного дерева",
    "skill": "Дерево · степені",
    "story": "Буч малює дерево з N вершинами. Листок — вершина степеня 1. Для N=1 єдиний вузол теж вважаємо листком. Порахуйте листки.",
    "input": "N (1–1000), далі N−1 ребер U V.",
    "output": "Кількість листків.",
    "exampleIn": "5\n1 2\n1 3\n3 4\n3 5",
    "exampleOut": "3",
    "hint": "Порахуйте, скільки ребер торкається кожної вершини.",
    "theory": "У неорієнтованому дереві з N>1 листки мають степінь 1.",
    "starter": "n=int(input())\ndeg=[0]*(n+1)\nfor _ in range(n-1):\n    u,v=map(int,input().split())\n    # Збільшіть степені\n",
    "tests": [
      {
        "input": "5\n1 2\n1 3\n3 4\n3 5",
        "expected": "3"
      },
      {
        "input": "1",
        "expected": "1"
      },
      {
        "input": "2\n1 2",
        "expected": "2"
      },
      {
        "input": "3\n1 2\n2 3",
        "expected": "2"
      },
      {
        "input": "4\n1 2\n1 3\n1 4",
        "expected": "3"
      },
      {
        "input": "5\n1 2\n2 3\n3 4\n4 5",
        "expected": "2"
      },
      {
        "input": "6\n1 2\n1 3\n1 4\n1 5\n1 6",
        "expected": "5"
      },
      {
        "input": "4\n1 2\n2 3\n2 4",
        "expected": "3"
      },
      {
        "input": "5\n1 2\n2 3\n2 4\n4 5",
        "expected": "3"
      },
      {
        "input": "6\n1 2\n2 3\n3 4\n4 5\n5 6",
        "expected": "2"
      }
    ]
  },
  {
    "id": "heap",
    "name": "Найменша нагорода",
    "skill": "Пріоритетна черга",
    "story": "Буч має N коробок із різними або однаковими номерами. Йому потрібно вибрати найменший номер. Виведіть його.",
    "input": "N (1–100000), другий рядок N цілих чисел.",
    "output": "Мінімальне число.",
    "exampleIn": "4\n8 3 9 1",
    "exampleOut": "1",
    "hint": "Можна знайти мінімум за один прохід.",
    "theory": "Пріоритетна черга дозволяє швидко отримувати найменший елемент. Для одноразового пошуку достатньо min().",
    "starter": "n=int(input())\na=list(map(int,input().split()))\n# Виведіть найменший номер\n",
    "tests": [
      {
        "input": "4\n8 3 9 1",
        "expected": "1"
      },
      {
        "input": "1\n4",
        "expected": "4"
      },
      {
        "input": "2\n7 7",
        "expected": "7"
      },
      {
        "input": "3\n0 -2 5",
        "expected": "-2"
      },
      {
        "input": "3\n100 20 30",
        "expected": "20"
      },
      {
        "input": "5\n1 2 3 4 5",
        "expected": "1"
      },
      {
        "input": "3\n-100 -99 -98",
        "expected": "-100"
      },
      {
        "input": "4\n9 8 7 6",
        "expected": "6"
      },
      {
        "input": "3\n0 0 0",
        "expected": "0"
      },
      {
        "input": "2\n1000000 -1000000",
        "expected": "-1000000"
      }
    ]
  }
];
