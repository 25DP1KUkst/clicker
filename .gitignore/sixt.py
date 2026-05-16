def summa_fact(n):
    summa = 1

    for skaitlis in range(1, n + 1):
        summa *= skaitlis

    return summa

print(summa_fact(5))