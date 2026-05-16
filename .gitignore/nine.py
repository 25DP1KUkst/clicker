def fact_summa(N):
    summa = 0
    fact = 1

    for faktorials in range(1, N + 1):
        fact *= faktorials
        summa += fact

    return summa

print(fact_summa(4))