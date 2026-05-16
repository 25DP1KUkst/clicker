def faktorials(x):
    fact = 1

    for i in range(1, x + 1):
        fact *= i

    return fact

N = int(input())
summa = 0

for i in range(1, N + 1):
    summa += faktorials(i)

print(summa)