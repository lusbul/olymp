const TASKS14=[
  {
    "id": "manhattan",
    "name": "Таксі для Буча",
    "skill": "Манхеттенська відстань",
    "story": "Буч їде містом по горизонтальних і вертикальних вулицях. Знайдіть найменшу довжину маршруту між точками (x1,y1) та (x2,y2), якщо перешкод немає.",
    "input": "Чотири цілі числа x1 y1 x2 y2 (−10⁹..10⁹).",
    "output": "Довжина маршруту.",
    "exampleIn": "1 2 4 6",
    "exampleOut": "7",
    "hint": "Додайте модулі різниць координат.",
    "theory": "Манхеттенська відстань: |x2−x1|+|y2−y1|.",
    "starter": "x1,y1,x2,y2=map(int,input().split())\n# Обчисліть відстань\n",
    "tests": [
      {
        "input": "1 2 4 6",
        "expected": "7"
      },
      {
        "input": "0 0 0 0",
        "expected": "0"
      },
      {
        "input": "0 0 1 1",
        "expected": "2"
      },
      {
        "input": "-1 -1 1 1",
        "expected": "4"
      },
      {
        "input": "10 0 0 0",
        "expected": "10"
      },
      {
        "input": "0 10 0 -10",
        "expected": "20"
      },
      {
        "input": "-5 3 -2 9",
        "expected": "9"
      },
      {
        "input": "100 200 300 400",
        "expected": "400"
      },
      {
        "input": "-1000000000 0 1000000000 0",
        "expected": "2000000000"
      },
      {
        "input": "7 -8 -3 2",
        "expected": "20"
      }
    ]
  },
  {
    "id": "rectangle",
    "name": "Плакат олімпіади",
    "skill": "Геометрія · площа",
    "story": "Буч виготовляє прямокутний плакат шириною W і висотою H. Скільки квадратних одиниць паперу потрібно?",
    "input": "Два додатних цілих числа W H (1..10⁹).",
    "output": "Площа прямокутника.",
    "exampleIn": "3 5",
    "exampleOut": "15",
    "hint": "Площа дорівнює добутку сторін.",
    "theory": "Для прямокутника S=W·H. Python підтримує великі цілі числа.",
    "starter": "w,h=map(int,input().split())\n# Площа плаката\n",
    "tests": [
      {
        "input": "3 5",
        "expected": "15"
      },
      {
        "input": "1 1",
        "expected": "1"
      },
      {
        "input": "1 10",
        "expected": "10"
      },
      {
        "input": "10 1",
        "expected": "10"
      },
      {
        "input": "7 7",
        "expected": "49"
      },
      {
        "input": "100 200",
        "expected": "20000"
      },
      {
        "input": "2 9",
        "expected": "18"
      },
      {
        "input": "999 999",
        "expected": "998001"
      },
      {
        "input": "1000000000 1000000000",
        "expected": "1000000000000000000"
      },
      {
        "input": "13 17",
        "expected": "221"
      }
    ]
  },
  {
    "id": "orientation",
    "name": "Поворот робота",
    "skill": "Векторний добуток",
    "story": "Робот Буча йде від A до B, а потім до C. Визначте напрям повороту: LEFT, RIGHT або STRAIGHT (точки на одній прямій).",
    "input": "Шість цілих чисел ax ay bx by cx cy (−10⁶..10⁶).",
    "output": "LEFT, RIGHT або STRAIGHT.",
    "exampleIn": "0 0 2 0 2 2",
    "exampleOut": "LEFT",
    "hint": "Порівняйте знак (bx−ax)(cy−ay)−(by−ay)(cx−ax).",
    "theory": "Знак орієнтованої площі визначає напрям повороту. Нуль означає колінеарність.",
    "starter": "ax,ay,bx,by,cx,cy=map(int,input().split())\n# Визначте напрям повороту\n",
    "tests": [
      {
        "input": "0 0 2 0 2 2",
        "expected": "LEFT"
      },
      {
        "input": "0 0 2 0 2 -2",
        "expected": "RIGHT"
      },
      {
        "input": "0 0 1 1 2 2",
        "expected": "STRAIGHT"
      },
      {
        "input": "1 1 2 2 1 3",
        "expected": "LEFT"
      },
      {
        "input": "1 1 2 2 3 1",
        "expected": "RIGHT"
      },
      {
        "input": "-1 0 0 1 1 2",
        "expected": "STRAIGHT"
      },
      {
        "input": "0 0 0 1 -1 1",
        "expected": "LEFT"
      },
      {
        "input": "0 0 0 1 1 1",
        "expected": "RIGHT"
      },
      {
        "input": "5 5 5 5 5 5",
        "expected": "STRAIGHT"
      },
      {
        "input": "-2 -3 4 1 1 9",
        "expected": "LEFT"
      }
    ]
  },
  {
    "id": "inside",
    "name": "Буч у зоні нагород",
    "skill": "Точка в прямокутнику",
    "story": "Зона нагород — прямокутник із кутами (x1,y1) та (x2,y2), де x1<x2 і y1<y2. Перевірте, чи точка (x,y) лежить усередині або на межі зони.",
    "input": "Шість цілих чисел x1 y1 x2 y2 x y.",
    "output": "YES або NO.",
    "exampleIn": "0 0 10 10 5 5",
    "exampleOut": "YES",
    "hint": "Перевірте координати незалежно.",
    "theory": "Точка належить замкненому прямокутнику, якщо x1≤x≤x2 і y1≤y≤y2.",
    "starter": "x1,y1,x2,y2,x,y=map(int,input().split())\n# Перевірте точку\n",
    "tests": [
      {
        "input": "0 0 10 10 5 5",
        "expected": "YES"
      },
      {
        "input": "0 0 10 10 0 0",
        "expected": "YES"
      },
      {
        "input": "0 0 10 10 10 10",
        "expected": "YES"
      },
      {
        "input": "0 0 10 10 11 5",
        "expected": "NO"
      },
      {
        "input": "0 0 10 10 -1 5",
        "expected": "NO"
      },
      {
        "input": "-5 -5 5 5 0 0",
        "expected": "YES"
      },
      {
        "input": "-5 -5 5 5 5 -5",
        "expected": "YES"
      },
      {
        "input": "1 2 3 4 2 4",
        "expected": "YES"
      },
      {
        "input": "1 2 3 4 2 5",
        "expected": "NO"
      },
      {
        "input": "-10 -20 -1 -2 -5 -10",
        "expected": "YES"
      }
    ]
  },
  {
    "id": "square",
    "name": "Квадратні плитки",
    "skill": "Геометрія · округлення",
    "story": "Буч застеляє прямокутний зал W×H квадратними плитками зі стороною A. Плитки можна обрізати. Скільки плиток мінімально потрібно, якщо укладати їх сіткою паралельно сторонам залу?",
    "input": "Три додатних цілі числа W H A (1..10⁹).",
    "output": "Кількість плиток.",
    "exampleIn": "6 6 4",
    "exampleOut": "4",
    "hint": "Окремо порахуйте кількість плиток по ширині й висоті.",
    "theory": "Для кожного виміру використовуйте округлення вгору: (x+a−1)//a.",
    "starter": "w,h,a=map(int,input().split())\n# Порахуйте плитки\n",
    "tests": [
      {
        "input": "6 6 4",
        "expected": "4"
      },
      {
        "input": "1 1 1",
        "expected": "1"
      },
      {
        "input": "2 2 3",
        "expected": "1"
      },
      {
        "input": "10 10 5",
        "expected": "4"
      },
      {
        "input": "11 10 5",
        "expected": "6"
      },
      {
        "input": "1 100 10",
        "expected": "10"
      },
      {
        "input": "100 1 10",
        "expected": "10"
      },
      {
        "input": "1000000000 1000000000 1",
        "expected": "1000000000000000000"
      },
      {
        "input": "5 7 2",
        "expected": "12"
      },
      {
        "input": "9 9 10",
        "expected": "1"
      }
    ]
  }
];
