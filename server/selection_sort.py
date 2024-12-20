num_List = [3, -1, 5, 2]
# Output: [-1, 2, 3, 5]

# 

def selectionSort(num_List):
    return sorted(num_List)

# def selectionSort(num_List):
#     return num_List.sort() // *Note* - returns 'None' even when set to a variable


if __name__ == '__main__':
    print(selectionSort(num_List))
