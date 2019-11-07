#!/usr/bin/env bash

set -x

autoflake --remove-all-unused-imports --recursive --remove-unused-variables --in-place ./rtmp_checker/app --exclude=__init__.py
isort --multi-line=3 --trailing-comma --force-grid-wrap=0 --combine-as --line-width 88 --recursive --apply ./rtmp_checker/app
black ./rtmp_checker/app
vulture ./rtmp_checker/app

autoflake --remove-all-unused-imports --recursive --remove-unused-variables --in-place ./darknet_serve/app --exclude=__init__.py
isort --multi-line=3 --trailing-comma --force-grid-wrap=0 --combine-as --line-width 88 --recursive --apply ./darknet_serve/app
black ./darknet_serve/app
vulture ./darknet_serve/app

autoflake --remove-all-unused-imports --recursive --remove-unused-variables --in-place ./pytorch_serve/app --exclude=__init__.py
isort --multi-line=3 --trailing-comma --force-grid-wrap=0 --combine-as --line-width 88 --recursive --apply ./pytorch_serve/app
black ./pytorch_serve/app
vulture ./pytorch_serve/app

autoflake --remove-all-unused-imports --recursive --remove-unused-variables --in-place ./backend/app/app --exclude=__init__.py
isort --multi-line=3 --trailing-comma --force-grid-wrap=0 --combine-as --line-width 88 --recursive --apply ./backend/app/app
black ./backend/app/app
vulture ./backend/app/app

autoflake --remove-all-unused-imports --recursive --remove-unused-variables --in-place ./rtmp_stc/app --exclude=__init__.py
isort --multi-line=3 --trailing-comma --force-grid-wrap=0 --combine-as --line-width 88 --recursive --apply ./rtmp_stc/app
black ./rtmp_stc/app
vulture ./rtmp_stc/app
    