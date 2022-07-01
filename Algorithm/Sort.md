# Sort

### 目录

1. [冒泡排序](#1)
2. [选择排序](#2)
3. [插入排序](#3)
4. [堆排序](#4)
5. [二路归并排序](#5)
6. [快速排序](#6)
7. [希尔排序](#7)
8. [](#)
9. [](#)
10. [](#)
&nbsp;

### <span id = "5">**5.归并排序**</span>

* 迭代法（自写简单版）
```cpp
void MergeSort(int* Array, int len) {
	int leftStart, leftEnd, rightStart, rightEnd;
	int tmp[100];
	for (int i = 1; i < len; i *= 2) {		//控制归并的区间
		int k = 0;
		for (leftStart = 0; leftStart + i < len; leftStart = rightEnd) {		//按照区间，从头归并到尾巴。
			rightStart = leftEnd = leftStart + i;
			rightEnd = rightStart + i;
			if (rightEnd > len) {		//很重要。
				rightEnd = len;
			}
			while (leftStart < leftEnd && rightStart < rightEnd) {		//归并
				if (Array[rightStart] < Array[leftStart]) {
					tmp[k++] = Array[rightStart++];
				}
				else {
					tmp[k++] = Array[leftStart++];
				}
			}
			while (leftStart < leftEnd) {	//只有可能是左多，又少。
				tmp[k++] = Array[leftStart++];
			}
			while (rightStart < rightEnd) {
				tmp[k++] = Array[rightStart++];
			}
		}
		for (int i = 0; i < len; i++) {
			Array[i] = tmp[i];
		}
	}
}
```

* 迭代法（经典版）
```cpp
void MergeSort(int* Array, int len) {
	int left_min, left_max, right_min, right_max;
	int tmp[100];
	for (int i = 1; i < len; i *= 2) {		//控制归并的区间
		int k = 0;
		for (left_min = 0; left_min + i < len; left_min = right_max) {		//按照区间，从头归并到尾巴。
			right_min = left_max = left_min + i;
			right_max = right_min + i;
			if (right_max > len) {		//很重要。
				right_max = len;
			}
			while (left_min < left_max && right_min < right_max) {		//归并
				if (Array[right_min] < Array[left_min]) {
					tmp[k++] = Array[right_min++];
				}
				else {
					tmp[k++] = Array[left_min++];
				}
			}
			while (left_min < left_max) {	//只有可能是左多，又少。
				Array[--right_min] = Array[--left_max];
				//右边满了，左边没满。right_min到了边界，把左边从外到里赋值到。
			}
			while (k > 0) {
				Array[--right_min] = tmp[--k];
				//继续从right_min复制。
			}
		}
	}
}
```

*递归法
```cpp
void Merge(int start, int end) {
	if (start >= end)return;
	int mid = (start + end) / 2;
	Merge(start, mid);
	Merge(mid + 1, end);
	int i = start, j = mid + 1, k = start;
	while (i <= mid && j <= end) {
		if (Array[i] < Array[j])tmp[k++] = Array[i++];
		else tmp[k++] = Array[j++];
	}
	while (i <= mid) {
		tmp[k++] = Array[i++];
	}
	while (j <= end) {
		tmp[k++] = Array[j++];
	}
	for (int i = start; i <= end; i++) {
		Array[i] = tmp[i];
	}
}
```

### <span id = "6">**快速排序**</span>

* 经典无优化版
```cpp
/***************挖空法***************/
void Quick_Sort(int first, int second) {
	if (first >= second) return;
	int ele = Array[first];
	int i = first, j = second;
	while (i != j) {
		while (ele <= Array[j] && i < j) { --j; }
		Array[i] = Array[j];
		while (Array[i] <= ele && i < j) { ++i; }
		Array[j] = Array[i];
	}
	Array[i] = ele;
	Quick_Sort(first, i - 1);
	Quick_Sort(i + 1, second);
}

/***************交换法***************/
void Quick_Sort(int first, int second) {
	if (first < second) {
		int ele = Array[first];
		int i = first, j = second;
		while (i != j) {
			while (ele <= Array[j] && i < j) { --j; }
			while (Array[i] <= ele && i < j) { ++i; }
			if (i < j)swap(Array[i], Array[j]);
		}
		swap(Array[first], Array[j]);
		Quick_Sort(first, i - 1);
		Quick_Sort(i + 1, second);
	}
}
```




