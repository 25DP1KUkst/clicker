def summa(N):
    rez = 0
    for skaitli in range(N):
        N = int(input())
        rez += N

    return rez

print(summa(3))