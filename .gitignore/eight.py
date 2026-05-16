def skaitlu_kapnes(N):

    for rindas in range(1, N + 1):
        for skaitli in range(1, rindas + 1):
            print(skaitli, end="")
        print()

skaitlu_kapnes(4)