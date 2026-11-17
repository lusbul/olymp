const TASKS16=[
  {
    "id": "badge",
    "name": "Перепустка фіналіста",
    "skill": "Умови · порівняння",
    "story": "Буч пройде до фіналу, якщо набрав щонайменше A балів у першому турі та щонайменше B — у другому. Перевірте результат.",
    "input": "Чотири цілі числа X Y A B (0..1000).",
    "output": "YES або NO.",
    "exampleIn": "80 90 70 80",
    "exampleOut": "YES",
    "hint": "Потрібно, щоб обидві нерівності були істинними.",
    "theory": "Логічне and поєднує дві обов’язкові умови.",
    "starter": "x,y,a,b=map(int,input().split())\n# Перевірте обидва тури\n",
    "tests": [
      {
        "input": "80 90 70 80",
        "expected": "YES"
      },
      {
        "input": "0 0 0 0",
        "expected": "YES"
      },
      {
        "input": "10 9 10 10",
        "expected": "NO"
      },
      {
        "input": "9 10 10 10",
        "expected": "NO"
      },
      {
        "input": "10 10 10 10",
        "expected": "YES"
      },
      {
        "input": "100 99 100 99",
        "expected": "YES"
      },
      {
        "input": "50 70 60 60",
        "expected": "NO"
      },
      {
        "input": "1 100 2 50",
        "expected": "NO"
      },
      {
        "input": "999 999 1000 1000",
        "expected": "NO"
      },
      {
        "input": "1000 1000 1000 1000",
        "expected": "YES"
      }
    ]
  },
  {
    "id": "medals",
    "name": "Медалі для команди",
    "skill": "Сортування · топ K",
    "story": "У Буча є N результатів учасників. Для нагородження обирають K найкращих. Знайдіть суму їхніх балів.",
    "input": "N K (1≤K≤N≤100000), другий рядок N невід’ємних балів.",
    "output": "Сума K найбільших.",
    "exampleIn": "5 2\n1 9 3 8 2",
    "exampleOut": "17",
    "hint": "Відсортуйте результати за спаданням.",
    "theory": "Сортування за спаданням дозволяє взяти перші K елементів.",
    "starter": "n,k=map(int,input().split())\na=list(map(int,input().split()))\n# Сума k найкращих\n",
    "tests": [
      {
        "input": "5 2\n1 9 3 8 2",
        "expected": "17"
      },
      {
        "input": "1 1\n5",
        "expected": "5"
      },
      {
        "input": "3 3\n1 2 3",
        "expected": "6"
      },
      {
        "input": "4 1\n0 0 0 0",
        "expected": "0"
      },
      {
        "input": "4 2\n5 5 5 5",
        "expected": "10"
      },
      {
        "input": "5 3\n1 2 3 4 5",
        "expected": "12"
      },
      {
        "input": "2 1\n100 1",
        "expected": "100"
      },
      {
        "input": "6 4\n1 1 2 2 3 3",
        "expected": "10"
      },
      {
        "input": "3 2\n0 1 0",
        "expected": "1"
      },
      {
        "input": "5 5\n9 8 7 6 5",
        "expected": "35"
      }
    ]
  },
  {
    "id": "train",
    "name": "Встигнути на потяг",
    "skill": "Моделювання · час",
    "story": "Потяг Буча вирушає о H:M. Дорога триває T хвилин. Знайдіть час прибуття як два цілі числа H M через пробіл, враховуючи перехід через північ.",
    "input": "Три цілі числа H M T (0≤H<24; 0≤M<60; 0≤T≤10⁹).",
    "output": "Година та хвилина прибуття.",
    "exampleIn": "23 50 25",
    "exampleOut": "0 15",
    "hint": "Переведіть усе у хвилини та візьміть остачу від 1440.",
    "theory": "У добі 24×60=1440 хвилин. Остача від 1440 повертає час у межі доби.",
    "starter": "h,m,t=map(int,input().split())\n# Обчисліть час прибуття\n",
    "tests": [
      {
        "input": "23 50 25",
        "expected": "0 15"
      },
      {
        "input": "0 0 0",
        "expected": "0 0"
      },
      {
        "input": "12 0 60",
        "expected": "13 0"
      },
      {
        "input": "23 59 1",
        "expected": "0 0"
      },
      {
        "input": "0 1 1440",
        "expected": "0 1"
      },
      {
        "input": "10 30 15",
        "expected": "10 45"
      },
      {
        "input": "22 0 180",
        "expected": "1 0"
      },
      {
        "input": "5 5 55",
        "expected": "6 0"
      },
      {
        "input": "12 59 2",
        "expected": "13 1"
      },
      {
        "input": "1 2 1000000000",
        "expected": "11 42"
      }
    ]
  },
  {
    "id": "teams",
    "name": "Скільки команд?",
    "skill": "Множини · унікальні значення",
    "story": "На олімпіаді учні зареєструвалися з номерами команд. Скільки різних команд представлені серед N учнів?",
    "input": "N (1..100000), другий рядок N цілих номерів.",
    "output": "Кількість різних номерів.",
    "exampleIn": "5\n1 2 2 3 1",
    "exampleOut": "3",
    "hint": "Множина set зберігає лише різні елементи.",
    "theory": "Для підрахунку різних значень достатньо len(set(a)).",
    "starter": "n=int(input())\na=list(map(int,input().split()))\n# Порахуйте команди\n",
    "tests": [
      {
        "input": "5\n1 2 2 3 1",
        "expected": "3"
      },
      {
        "input": "1\n1",
        "expected": "1"
      },
      {
        "input": "2\n2 2",
        "expected": "1"
      },
      {
        "input": "2\n1 2",
        "expected": "2"
      },
      {
        "input": "3\n0 0 0",
        "expected": "1"
      },
      {
        "input": "5\n1 2 3 4 5",
        "expected": "5"
      },
      {
        "input": "5\n5 4 3 2 1",
        "expected": "5"
      },
      {
        "input": "3\n-1 -1 0",
        "expected": "2"
      },
      {
        "input": "4\n100 100 200 300",
        "expected": "3"
      },
      {
        "input": "6\n1 1 1 2 2 3",
        "expected": "3"
      }
    ]
  },
  {
    "id": "finalroute",
    "name": "Останній маршрут Буча",
    "skill": "Граф · BFS",
    "story": "У фінальному турі Буч має пройти від кімнати S до T. Є N кімнат і M двосторонніх переходів однакової довжини. Виведіть мінімальну кількість переходів або -1, якщо пройти неможливо.",
    "input": "N M S T (1≤N≤1000; 0≤M≤3000), далі M ребер U V.",
    "output": "Мінімальна кількість переходів або -1.",
    "exampleIn": "5 4 1 5\n1 2\n2 3\n3 4\n4 5",
    "exampleOut": "4",
    "hint": "BFS обходить вершини за зростанням відстані.",
    "theory": "Для незваженого графа пошук у ширину знаходить найкоротший шлях.",
    "starter": "from collections import deque\nn,m,s,t=map(int,input().split())\n# Побудуйте граф і застосуйте BFS\n",
    "tests": [
      {
        "input": "5 4 1 5\n1 2\n2 3\n3 4\n4 5",
        "expected": "4"
      },
      {
        "input": "1 0 1 1",
        "expected": "0"
      },
      {
        "input": "2 0 1 2",
        "expected": "-1"
      },
      {
        "input": "2 1 1 2\n1 2",
        "expected": "1"
      },
      {
        "input": "4 2 1 4\n1 2\n3 4",
        "expected": "-1"
      },
      {
        "input": "4 3 1 4\n1 2\n2 4\n1 3",
        "expected": "2"
      },
      {
        "input": "5 5 1 5\n1 2\n2 3\n3 4\n4 5\n1 5",
        "expected": "1"
      },
      {
        "input": "3 2 2 3\n1 2\n2 3",
        "expected": "1"
      },
      {
        "input": "6 3 1 6\n1 2\n2 3\n4 6",
        "expected": "-1"
      },
      {
        "input": "3 3 3 3\n1 2\n2 3\n1 3",
        "expected": "0"
      }
    ]
  }
];
