def seciba(x, y):

    if x < y:
        for skaitlis in range(x, y + 1, 1):
            print(skaitlis, end=" ")
    else:
        for skaitlis in range(y, x + 1, 1):
            print(skaitlis, end=" ")

seciba(5, -5)
