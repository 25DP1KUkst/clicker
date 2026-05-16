def summa(n):
    rez = 0
    for skaitli in range(10):
        n = int(input())
        rez += n
    return rez

print(summa(10))