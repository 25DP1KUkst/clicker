def summa_nulles(N):
    nulles = 0

    for skaitlis in range(N):
        N = int(input())
        if N == 0:
            nulles += 1

    return nulles

skaitli = int(input())
print(summa_nulles(skaitli))