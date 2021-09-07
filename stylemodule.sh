#!/bin/sh
scss $2:$3 --quiet --update --no-cache && {
  printf '\n<dom-module id="%s-style">\t\n<template>\t\t\n<style>\n' "$1"
  cat $3
  printf '\t\t\n</style>\t\n</template>\n</dom-module>'
} > "$1-style".html && rm -- "$3"

exit
