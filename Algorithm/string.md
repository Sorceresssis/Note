# String

## KMP

```cpp
#include <iostream>
#include <string>
using namespace std;

bool KMP(string T, string S);
void Get_Nextval(string S, int *nextval);

int main(int argc, char const *argv[]) {
	string T, S;
	while (cin >> T >> S) {
		if (KMP(T, S)) {
			cout << "Yes" << endl;
		}
		else {
			cout << "No" << endl;
		}
	}
	return 0;
}
bool KMP(string T, string S) {
	int i = 0, j = 0, Slen = S.size(), Tlen = T.size();
	int *nextval = new int[Slen];
	Get_Nextval(S, nextval);
	while (i < Tlen && j < Slen) {
		if (j == -1) {
			j = 0;
			++i;
		}
		else if (S[j] == T[i]) {
			++i;
			++j;
		}
		else {
			j = nextval[j];
		}
	}
	if (j == Slen) {
		return true;
	}
	else {
		return false;
	}
}
void Get_Nextval(string S, int *nextval) {
	nextval[0] = -1;
	int i = 0, j = -1, Slen = S.size();
	while (i < Slen) {
		if (j == -1 || S[i] == S[j]) {
			++i;
			++j;
			nextval[i] = S[i] == S[j] ? nextval[j] : j;
		}
		else {
			j = nextval[j];
		}
	}
}
```