def kubu_summa(N):
    summa = 0
    
    for skaitlis in range(1, N + 1):
        summa += skaitlis ** 3

    return summa

print(kubu_summa(10))