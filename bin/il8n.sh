#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PARENT="$(dirname $DIR)"
for file in $PARENT/languages/*.po ; do msgfmt $file -o `echo $file | sed 's/\(.*\.\)po/\1mo/'` ; done
